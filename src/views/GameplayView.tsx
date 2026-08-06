import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';
import { SKP_MODULES } from '../data/skpScenarios';
import { EXAM_SKP_MODULES } from '../data/examScenarios';
import { DialogBox } from '../components/ui/DialogBox';
import { StarRating } from '../components/ui/StarRating';
import { SBARItem } from '../types/game';
import { LanguageToggle } from '../components/ui/LanguageToggle';
import { UI_TRANSLATIONS } from '../data/translations';

export const GameplayView: React.FC = () => {
    const { activeSKP, activeSubLevel, setScreen, submitSKPResult, currentUser, selectedMode, language } = useGameStore();
    const t = UI_TRANSLATIONS[language];
    const activeModules = selectedMode === 'exam' ? EXAM_SKP_MODULES : SKP_MODULES;
    const moduleGroup = activeModules.find((m) => m.id === activeSKP) || activeModules[0];
    const moduleData = moduleGroup.subLevels.find((s) => s.id === activeSubLevel) || moduleGroup.subLevels[0];

    const [showIntro, setShowIntro] = useState(true);
    const [showResultModal, setShowResultModal] = useState(false);
    const [score, setScore] = useState(0);
    const [stars, setStars] = useState(1);
    const [isCorrect, setIsCorrect] = useState(false);
    const [explanation, setExplanation] = useState('');

    function getLocalizedText<T extends string | string[]>(valId: T, valEn?: T, valTh?: T): T {
        if (language === 'th' && valTh) return valTh;
        if (language === 'en' && valEn) return valEn;
        return valId;
    }

    // State Khusus Modul SBAR (SKP 2)
    const [selectedSBAR, setSelectedSBAR] = useState<SBARItem[]>([]);
    const initialSBAROptions = (moduleData.sbarData?.options || []).map(item => ({
        ...item,
        text: getLocalizedText(item.text, item.textEn, item.textTh)
    }));
    const [availableSBAR, setAvailableSBAR] = useState<SBARItem[]>(initialSBAROptions);

    // State Khusus Modul Obat (SKP 3)
    const [drugIndex, setDrugIndex] = useState(0);
    const [drugCorrectCount, setDrugCorrectCount] = useState(0);

    // State Khusus Modul Cuci Tangan (SKP 5)
    const rawSteps = getLocalizedText(
        moduleData.sequenceData?.steps || [], 
        moduleData.sequenceData?.stepsEn, 
        moduleData.sequenceData?.stepsTh
    );
    const [handSteps] = useState<string[]>(rawSteps);
    const [selectedHandOrder, setSelectedHandOrder] = useState<number[]>([]);

    const handleFinishSKP = (correct: boolean, calcScore: number, calcStars: number, expText: string) => {
        setIsCorrect(correct);
        setScore(calcScore);
        setStars(calcStars);
        setExplanation(expText);
        setShowResultModal(true);

        submitSKPResult({
            skpId: moduleGroup.id,
            subLevelId: moduleData.id,
            isCorrect: correct,
            score: calcScore,
            stars: calcStars,
        });
    };

    const bgUrl = `/assets/skp${moduleGroup.id}_bg.png`;

    const displayTitle = getLocalizedText(moduleGroup.title, moduleGroup.titleEn, moduleGroup.titleTh);
    const displaySubTitle = getLocalizedText(moduleData.title, moduleData.titleEn, moduleData.titleTh);
    const displayPatientName = moduleData.patientName ? getLocalizedText(moduleData.patientName, moduleData.patientNameEn, moduleData.patientNameTh) : undefined;
    const displayPatientInfo = moduleData.patientInfo ? getLocalizedText(moduleData.patientInfo, moduleData.patientInfoEn, moduleData.patientInfoTh) : undefined;
    const displayIntroDialog = getLocalizedText(moduleData.introDialog, moduleData.introDialogEn, moduleData.introDialogTh);

    const currentQuestion = moduleData.questions?.[0];
    const displayQuestionText = currentQuestion ? getLocalizedText(currentQuestion.question, currentQuestion.questionEn, currentQuestion.questionTh) : '';
    const displayOptions = currentQuestion ? getLocalizedText(currentQuestion.options, currentQuestion.optionsEn, currentQuestion.optionsTh) : [];
    const displayExplanation = currentQuestion ? getLocalizedText(currentQuestion.explanation, currentQuestion.explanationEn, currentQuestion.explanationTh) : '';

    return (
        <div 
            style={{ backgroundImage: `url("${bgUrl}")` }}
            className="h-full w-full bg-cover bg-center flex flex-col justify-between p-4 text-white relative overflow-y-auto select-none"
        >
            {/* Background overlay for readability */}
            <div className="absolute inset-0 bg-slate-955/20 pointer-events-none z-0" />

            {/* Top Bar Nav */}
            <div className="flex items-center justify-between bg-slate-900/90 border-[4px] border-sky-300 p-3 rounded-2xl z-20 shrink-0 shadow-[0_6px_0_#1e3a8a,0_10px_15px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <button
                    onClick={() => setScreen('menu')}
                    className="px-3 py-2 bg-gradient-to-b from-sky-400 to-blue-500 text-white rounded-full border-2 border-sky-100 shadow-[0_3px_0_#1d4ed8] active:translate-y-0.5 active:shadow-[0_1px_0_#1d4ed8] transition-all flex items-center gap-1 text-xs font-black select-none cursor-pointer"
                >
                    <ArrowLeft className="w-4 h-4 stroke-[3]" /> 
                    <span>{t.menuNav}</span>
                </button>
                <div className="text-center">
                    <span className="text-[10px] font-black text-amber-300 uppercase tracking-widest bg-amber-400/20 px-2.5 py-0.5 rounded-full border border-amber-300">
                        {selectedMode === 'practice' ? (language === 'id' ? 'Latihan' : (language === 'th' ? 'ฝึกปฏิบัติ' : 'Practice')) : (language === 'id' ? 'Ujian' : (language === 'th' ? 'การสอบ' : 'Exam'))} • {displayTitle}
                    </span>
                    <h2 className="text-xs font-black text-white mt-1 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">{displaySubTitle}</h2>
                </div>
                <div className="flex items-center gap-2">
                    <LanguageToggle />
                </div>
            </div>

            {/* Info Panel Pasien jika ada */}
            {displayPatientName && (
                <div className="bg-slate-900/95 border-[4px] border-amber-300 p-3.5 rounded-[1.5rem] my-3 text-xs z-10 flex items-center justify-between shadow-[0_6px_0_#d97706,0_10px_15px_rgba(0,0,0,0.3)] backdrop-blur-md shrink-0">
                    <div>
                        <span className="font-black text-amber-300 text-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] block">{displayPatientName}</span>
                        <span className="text-[12px] text-sky-100 font-bold mt-1 block leading-relaxed">{displayPatientInfo}</span>
                    </div>
                </div>
            )}

            {/* Main Game Content Area */}
            <div className="flex-1 flex flex-col justify-center my-4 z-10 overflow-y-auto">
                {showIntro ? (
                    <div className="space-y-4 my-auto w-full max-w-xl mx-auto">
                        <DialogBox
                            speakerName={currentUser?.username || (language === 'id' ? 'Ners Jaga' : (language === 'th' ? 'พยาบาลประจำการ' : 'Duty Nurse'))}
                            text={displayIntroDialog}
                            avatar={currentUser?.avatar}
                            onComplete={() => setShowIntro(false)}
                        />
                        <button
                            onClick={() => setShowIntro(false)}
                            className="w-full py-4 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-white font-black text-lg rounded-full border-4 border-amber-100 shadow-[0_6px_0_#b45309,0_10px_20px_rgba(0,0,0,0.35)] relative overflow-hidden transition-all duration-150 active:translate-y-1 active:shadow-[0_2px_0_#b45309,0_4px_10px_rgba(0,0,0,0.3)] uppercase tracking-wider flex items-center justify-center gap-2 select-none cursor-pointer"
                        >
                            <span className="absolute top-1 left-4 right-4 h-3 bg-gradient-to-b from-white/60 to-transparent rounded-full pointer-events-none" />
                            <span className="absolute bottom-1 left-4 right-4 h-1 bg-black/10 rounded-full pointer-events-none" />
                            <span className="z-10 relative drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">{language === 'id' ? 'Mulai Tindakan Klinis Sekarang' : (language === 'th' ? 'เริ่มดำเนินการทางคลินิกตอนนี้' : 'Start Clinical Action Now')}</span>
                        </button>
                    </div>
                ) : (
                    <>
                        {/* TIPE 1, 4, 6: Pilihan Ganda / Analisis Skenario */}
                        {(moduleData.type === 'dialog_choice' || moduleData.type === 'stage_analysis' || moduleData.type === 'assessment_tool') && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch w-full max-w-4xl mx-auto">
                                <div className="bg-slate-900/95 border-[4px] border-sky-300 p-4.5 rounded-[2rem] shadow-[0_8px_0_#1e3a8a,0_12px_20px_rgba(0,0,0,0.4)] flex flex-col justify-center min-h-[140px] backdrop-blur-md">
                                    <h3 className="text-xs font-black text-sky-300 uppercase tracking-widest mb-2 flex items-center gap-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                                        <HelpCircle className="w-4.5 h-4.5 text-amber-400 shrink-0 stroke-[2.5]" /> 
                                        <span>{language === 'id' ? 'EVALUASI SKENARIO:' : (language === 'th' ? 'การประเมินสถานการณ์:' : 'SCENARIO EVALUATION:')}</span>
                                    </h3>
                                    <p className="text-xs md:text-sm text-white leading-relaxed font-bold whitespace-pre-line overflow-y-auto max-h-[350px] pr-1">
                                        {displayQuestionText}
                                    </p>
                                </div>

                                <div className="space-y-2.5 flex flex-col justify-center max-h-[420px] overflow-y-auto pr-1">
                                    {displayOptions.map((opt, idx) => (
                                        <motion.button
                                            key={idx}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => {
                                                const q = moduleData.questions![0];
                                                const isRight = idx === q.correctAnswer;
                                                handleFinishSKP(
                                                    isRight,
                                                    isRight ? 100 : (selectedMode === 'exam' ? 0 : 20),
                                                    isRight ? 3 : 1,
                                                    displayExplanation
                                                );
                                            }}
                                            className="w-full text-left p-3.5 bg-slate-900 hover:bg-sky-955 border-4 border-slate-700 hover:border-sky-300 rounded-2xl text-xs font-bold text-white transition-all flex items-start gap-3 shadow-[0_4px_0_#1e293b] hover:shadow-[0_4px_0_#1d4ed8] select-none cursor-pointer"
                                        >
                                            <span className="w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center font-black text-amber-300 shrink-0 mt-0.5 text-[11px] shadow-sm">
                                                {String.fromCharCode(65 + idx)}
                                            </span>
                                            <span className="leading-relaxed mt-0.5">{opt}</span>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* TIPE 2: Penyusunan Telepon SBAR (SKP 2) */}
                        {moduleData.type === 'sbar_builder' && (
                            <div className="space-y-4 w-full max-w-4xl mx-auto">
                                <div className="bg-slate-900/95 border-2 border-slate-700 p-3 rounded-2xl text-xs shrink-0 font-bold shadow-md">
                                    <p className="text-sky-300 uppercase tracking-widest font-black text-[10px] mb-0.5">{t.sbarInstruction}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                                    {/* Area Telepon yang Disusun */}
                                    <div className="min-h-[160px] md:min-h-[280px] bg-slate-955/90 border-4 border-dashed border-sky-300 rounded-2xl p-3 space-y-2 flex flex-col justify-start shadow-inner">
                                        <p className="text-[10px] text-sky-300 font-black uppercase tracking-wider mb-1">{t.sbarSelected}</p>
                                        {selectedSBAR.length === 0 ? (
                                            <p className="text-xs text-slate-500 text-center py-10 my-auto font-black">-- {language === 'id' ? 'Belum ada dialog dipilih' : (language === 'th' ? 'ยังไม่ได้เลือกการสนทนา' : 'No dialog selected')} --</p>
                                        ) : (
                                            selectedSBAR.map((item, idx) => (
                                                <div key={idx} className="p-3 bg-gradient-to-r from-sky-900 to-sky-955 border-[3px] border-sky-200 rounded-2xl text-xs flex items-center justify-between shadow-md">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-black bg-amber-400 text-slate-950 px-2 py-0.5 rounded-lg border border-amber-200 text-[10px]">{item.category}</span>
                                                        <span className="text-slate-100 font-bold line-clamp-2">{getLocalizedText(item.text, item.textEn, item.textTh)}</span>
                                                    </div>
                                                    <button
                                                        onClick={() => {
                                                            setSelectedSBAR(selectedSBAR.filter((_, i) => i !== idx));
                                                            setAvailableSBAR([...availableSBAR, item]);
                                                        }}
                                                        className="text-rose-300 hover:text-rose-200 font-black ml-2 text-xs hover:underline cursor-pointer"
                                                    >
                                                        {language === 'id' ? 'BATAL' : (language === 'th' ? 'ยกเลิก' : 'CANCEL')}
                                                    </button>
                                                </div>
                                            ))
                                        )}
                                    </div>

                                    {/* Pilihan Dialog yang Tersedia */}
                                    <div className="space-y-2">
                                        <p className="text-[10px] text-amber-300 font-black uppercase tracking-wider mb-1">{t.sbarAvailable}</p>
                                        {availableSBAR.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => {
                                                    const newSelected = [...selectedSBAR, item];
                                                    setSelectedSBAR(newSelected);
                                                    setAvailableSBAR(availableSBAR.filter((_, i) => i !== idx));

                                                    // Validasi Otomatis saat 4 item lengkap
                                                    if (newSelected.length === 4) {
                                                        const isRight = newSelected.every((val, i) => val.category === ['S', 'B', 'A', 'R'][i]);
                                                        const explanationSBAR = language === 'id' 
                                                            ? "Urutan pelaporan telepon SBAR wajib dimulai dari Situation, Background, Assessment, dan Recommendation."
                                                            : (language === 'th'
                                                                ? "ลำดับการรายงานทางโทรศัพท์ SBAR ต้องเริ่มจาก Situation (สถานการณ์), Background (ประวัติ), Assessment (การประเมิน), และ Recommendation (ข้อเสนอแนะ)"
                                                                : "SBAR reporting must strictly follow Situation, Background, Assessment, and Recommendation order.");
                                                        handleFinishSKP(
                                                            isRight,
                                                            isRight ? 100 : 40,
                                                            isRight ? 3 : 1,
                                                            explanationSBAR
                                                        );
                                                    }
                                                }}
                                                className="p-3.5 bg-slate-900/90 border-4 border-slate-700 hover:border-amber-300 rounded-2xl cursor-pointer text-xs flex items-center gap-2.5 shadow-[0_4px_0_#1e293b] hover:shadow-[0_4px_0_#d97706] transition-all"
                                            >
                                                <span className="font-black bg-slate-800 text-sky-300 px-2 py-0.5 rounded-lg border border-slate-700">{item.category}</span>
                                                <span className="text-slate-200 font-bold">{getLocalizedText(item.text, item.textEn, item.textTh)}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* TIPE 3: Penyortiran Obat High Alert vs LASA (SKP 3) */}
                        {moduleData.type === 'drug_sorting' && moduleData.drugs && (
                            <div className="space-y-6 text-center my-auto w-full max-w-4xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                                    <div className="bg-slate-900/95 border-[6px] border-sky-300 p-5 rounded-[2.5rem] shadow-[0_12px_0_#1e3a8a,0_20px_30px_rgba(0,0,0,0.45)] w-full max-w-xs mx-auto md:col-span-5 flex flex-col justify-center min-h-[180px]">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-sky-300 block mb-1">
                                            {language === 'id' ? `Obat Ke-${drugIndex + 1} dari ${moduleData.drugs.length}` : (language === 'th' ? `ยาตัวที่ ${drugIndex + 1} จาก ${moduleData.drugs.length}` : `Medication ${drugIndex + 1} of ${moduleData.drugs.length}`)}
                                        </span>
                                        <h3 className="text-2xl font-black text-amber-300 mb-1 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">{moduleData.drugs[drugIndex].name}</h3>
                                        <p className="text-xs font-black text-white bg-slate-955/80 py-1.5 px-3 rounded-xl border-2 border-slate-800 mt-2">
                                            {language === 'id' ? 'Sediaan:' : (language === 'th' ? 'ขนาดบรรจุ:' : 'Dosage:')} {getLocalizedText(moduleData.drugs[drugIndex].dosage, moduleData.drugs[drugIndex].dosageEn, moduleData.drugs[drugIndex].dosageTh)}
                                        </p>
                                    </div>

                                    <div className="md:col-span-7 space-y-4">
                                        <p className="text-sm text-slate-200 font-bold md:text-left drop-shadow-[0_1px_1.5px_rgba(0,0,0,0.8)]">{t.drugInstruction}</p>

                                        <div className="grid grid-cols-2 gap-4">
                                            <button
                                                onClick={() => {
                                                    const curr = moduleData.drugs![drugIndex];
                                                    const isRight = curr.type === 'high_alert';
                                                    const newCount = isRight ? drugCorrectCount + 1 : drugCorrectCount;
                                                    setDrugCorrectCount(newCount);

                                                    if (drugIndex + 1 < moduleData.drugs!.length) {
                                                        setDrugIndex(drugIndex + 1);
                                                    } else {
                                                        const finalSuccess = newCount === moduleData.drugs!.length;
                                                        const expDrug = language === 'id'
                                                            ? "Obat High Alert diberi stiker MERAH. Sedangkan obat LASA diberi stiker KUNING."
                                                            : (language === 'th'
                                                                ? "ยา High Alert ต้องติดฉลากสีแดง ส่วนยา LASA ติดฉลากสีเหลือง"
                                                                : "High-Alert drugs require RED labels, while LASA drugs require YELLOW labels.");
                                                        handleFinishSKP(
                                                            finalSuccess,
                                                            Math.round((newCount / moduleData.drugs!.length) * 100),
                                                            finalSuccess ? 3 : 2,
                                                            expDrug
                                                        );
                                                    }
                                                }}
                                                className="p-6 bg-gradient-to-b from-rose-500 to-rose-700 border-4 border-rose-200 rounded-3xl font-black text-white shadow-[0_8px_0_#be123c,0_12px_20px_rgba(0,0,0,0.3)] hover:from-rose-450 hover:to-rose-650 active:translate-y-1 active:shadow-[0_2px_0_#be123c] transition-all flex flex-col items-center gap-2 cursor-pointer select-none"
                                            >
                                                <span className="absolute top-1 left-4 right-4 h-3 bg-gradient-to-b from-white/40 to-transparent rounded-full pointer-events-none" />
                                                <AlertTriangle className="w-8 h-8 text-amber-300" />
                                                <span className="text-xs md:text-sm tracking-wide uppercase font-black">{t.drugHighAlertCategory}</span>
                                                <span className="text-[10px] font-bold text-rose-100 bg-rose-900/60 px-2 py-0.5 rounded-full">{language === 'id' ? 'Stiker Merah' : (language === 'th' ? 'สติกเกอร์สีแดง' : 'Red Label')}</span>
                                            </button>

                                            <button
                                                onClick={() => {
                                                    const curr = moduleData.drugs![drugIndex];
                                                    const isRight = curr.type === 'lasa';
                                                    const newCount = isRight ? drugCorrectCount + 1 : drugCorrectCount;
                                                    setDrugCorrectCount(newCount);

                                                    if (drugIndex + 1 < moduleData.drugs!.length) {
                                                        setDrugIndex(drugIndex + 1);
                                                    } else {
                                                        const finalSuccess = newCount === moduleData.drugs!.length;
                                                        const expDrug = language === 'id'
                                                            ? "Obat High Alert diberi stiker MERAH. Sedangkan obat LASA diberi stiker KUNING."
                                                            : (language === 'th'
                                                                ? "ยา High Alert ต้องติดฉลากสีแดง ส่วนยา LASA ติดฉลากสีเหลือง"
                                                                : "High-Alert drugs require RED labels, while LASA drugs require YELLOW labels.");
                                                        handleFinishSKP(
                                                            finalSuccess,
                                                            Math.round((newCount / moduleData.drugs!.length) * 100),
                                                            finalSuccess ? 3 : 2,
                                                            expDrug
                                                        );
                                                    }
                                                }}
                                                className="p-6 bg-gradient-to-b from-amber-400 to-amber-600 border-4 border-amber-100 text-white shadow-[0_8px_0_#b45309,0_12px_20px_rgba(0,0,0,0.3)] hover:from-amber-350 hover:to-amber-500 active:translate-y-1 active:shadow-[0_2px_0_#b45309] transition-all flex flex-col items-center gap-2 cursor-pointer select-none"
                                            >
                                                <span className="absolute top-1 left-4 right-4 h-3 bg-gradient-to-b from-white/50 to-transparent rounded-full pointer-events-none" />
                                                <CheckCircle className="w-8 h-8 text-slate-100" />
                                                <span className="text-xs md:text-sm tracking-wide uppercase font-black">{t.drugLasaCategory}</span>
                                                <span className="text-[10px] font-bold text-amber-105 bg-amber-900/60 px-2 py-0.5 rounded-full">{language === 'id' ? 'Stiker Kuning' : (language === 'th' ? 'สติกเกอร์สีเหลือง' : 'Yellow Label')}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* TIPE 5: Urutan 6 Langkah Cuci Tangan WHO (SKP 5) */}
                        {moduleData.type === 'sequence_order' && moduleData.sequenceData && (
                            <div className="space-y-4 w-full max-w-4xl mx-auto">
                                <div className="bg-slate-900/95 border-2 border-slate-700 p-3 rounded-2xl text-xs shrink-0 font-bold shadow-md">
                                    <p className="text-sky-300 uppercase tracking-widest font-black text-[10px] mb-0.5">{t.sequenceInstruction}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {handSteps.map((stepText, idx) => {
                                        const isSelected = selectedHandOrder.includes(idx);
                                        const orderNum = selectedHandOrder.indexOf(idx) + 1;

                                        return (
                                            <motion.div
                                                key={idx}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => {
                                                    if (isSelected) return;
                                                    const newOrder = [...selectedHandOrder, idx];
                                                    setSelectedHandOrder(newOrder);

                                                    if (newOrder.length === 6) {
                                                        const isRight = newOrder.every((val, i) => val === moduleData.sequenceData!.correctOrder[i]);
                                                        const expSteps = language === 'id'
                                                            ? "Standar 6 Langkah Cuci Tangan WHO wajib dilaksanakan secara runtut."
                                                            : (language === 'th'
                                                                ? "มาตรฐานการล้างมือ 6 ขั้นตอนของ WHO ต้องปฏิบัติอย่างเป็นลำดับขั้นตอน"
                                                                : "WHO 6-Step Hand Hygiene must be performed sequentially.");
                                                        handleFinishSKP(
                                                            isRight,
                                                            isRight ? 100 : 50,
                                                            isRight ? 3 : 1,
                                                            expSteps
                                                        );
                                                    }
                                                }}
                                                className={`p-3.5 rounded-2xl border-4 text-xs font-bold cursor-pointer transition-all flex items-center justify-between ${
                                                    isSelected
                                                        ? 'bg-emerald-955/80 border-emerald-400 text-emerald-100 shadow-md'
                                                        : 'bg-slate-900/90 border-slate-700 hover:border-sky-300 hover:shadow-[0_4px_0_#1d4ed8] text-slate-200'
                                                }`}
                                            >
                                                <span className="line-clamp-2 pr-2 leading-relaxed">{stepText}</span>
                                                {isSelected && (
                                                    <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center border-2 border-emerald-100 shrink-0 text-[11px] shadow-sm">
                                                        {orderNum}
                                                    </span>
                                                )}
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Modal Result Feedback */}
            {showResultModal && (
                <StarRating
                    stars={stars}
                    score={score}
                    isCorrect={isCorrect}
                    explanation={explanation}
                    onNext={() => setScreen('menu')}
                />
            )}
        </div>
    );
};