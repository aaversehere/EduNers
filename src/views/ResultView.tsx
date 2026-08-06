import React from 'react';
import { motion } from 'framer-motion';
import { Award, RotateCcw, Home, CheckCircle2, XCircle, ShieldCheck } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';
import { SKP_MODULES } from '../data/skpScenarios';
import { LanguageToggle } from '../components/ui/LanguageToggle';
import { UI_TRANSLATIONS } from '../data/translations';

export const ResultView: React.FC = () => {
    const { currentUser, totalScore, skpResults, setScreen, resetGameProgress, selectedMode, language } = useGameStore();
    const t = UI_TRANSLATIONS[language];

    const getModuleStatus = (id: number) => {
        const results = skpResults.filter((r) => r.skpId === id);
        const score = results.reduce((sum, r) => sum + r.score, 0);
        const expectedCount = id === 7 ? 1 : (selectedMode === 'exam' ? 1 : 2);
        const isCorrect = results.length >= expectedCount && results.every((r) => r.isCorrect);
        return { isCorrect, score, completedCount: results.length, expectedCount };
    };

    const isPassed = totalScore >= (selectedMode === 'exam' ? 500 : 800);

    return (
        <div className="h-full flex flex-col justify-between p-5 bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white overflow-y-auto relative">
            {/* Top Right Language Toggle */}
            <div className="absolute top-4 right-4 z-20">
                <LanguageToggle />
            </div>

            {/* Top Banner */}
            <div className="text-center mt-2 shrink-0">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-block p-3 bg-gradient-to-tr from-amber-500 to-amber-400 rounded-full shadow-2xl mb-2 border-4 border-white">
                    <Award className="w-10 h-10 text-slate-950" />
                </motion.div>
                <h1 className="text-2xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-cyan-300 to-white">
                    {t.resultTitle} {selectedMode === 'exam' ? `(${language === 'id' ? 'Mode Ujian' : 'Exam Mode'})` : `(${language === 'id' ? 'Mode Latihan' : 'Practice Mode'})`}
                </h1>
                <p className="text-[10px] text-cyan-400/80 font-bold uppercase tracking-widest mt-1">
                    {currentUser?.username} • NIM: {currentUser?.nim}
                </p>
            </div>

            <div className="flex-1 flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 w-full max-w-4xl mx-auto my-auto py-4">
                {/* Score Box Card (Left side on wide screens) */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <div className="bg-slate-900/90 border-2 border-cyan-500/60 rounded-3xl p-6 text-center shadow-2xl relative overflow-hidden backdrop-blur-md w-full">
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />

                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                            {language === 'id' ? 'Total Perolehan Skor Akhir' : (language === 'th' ? 'คะแนนรวมทั้งหมดที่ได้รับ' : 'Total Score Earned')}
                        </span>
                        <div className="text-5xl font-black text-amber-400 my-2 tracking-tight">
                            {totalScore} <span className="text-lg font-bold text-slate-400">/ {selectedMode === 'exam' ? 700 : 1300}</span>
                        </div>

                        <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${isPassed ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50' : 'bg-rose-500/20 text-rose-300 border border-rose-500/50'
                            }`}>
                            {isPassed ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                            {isPassed 
                                ? (language === 'id' ? 'Kompeten Sesuai Standar JCI' : (language === 'th' ? 'ผ่านเกณฑ์มาตรฐาน JCI' : 'Competent per JCI Standards'))
                                : (language === 'id' ? 'Perlu Remedial & Pelatihan' : (language === 'th' ? 'ต้องได้รับการปรับปรุงและฝึกอบรม' : 'Needs Remedial & Training'))}
                        </div>
                    </div>
                </div>

                {/* Breakdown Rincian Per SKP (Right side on wide screens) */}
                <div className="w-full md:w-1/2 space-y-2.5 flex flex-col justify-center">
                    <h3 className="text-xs font-black uppercase tracking-widest text-cyan-300 mb-1 flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4 text-amber-400" /> 
                        <span>{language === 'id' ? 'Rincian Capaian Sasaran Keselamatan Pasien:' : (language === 'th' ? 'รายละเอียดผลการเรียนรู้ IPSG:' : 'Patient Safety Goals Achievement Details:')}</span>
                    </h3>

                    <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
                        {SKP_MODULES.map((mod) => {
                            const stat = getModuleStatus(mod.id);
                            const modTitle = language === 'th' && mod.titleTh ? mod.titleTh : (language === 'en' && mod.titleEn ? mod.titleEn : mod.title);
                            const cleanModTitle = modTitle.replace(/^SKP /, 'SKP 0').replace(/^IPSG /, 'IPSG 0');

                            return (
                                <div key={mod.id} className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between shadow-sm">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs ${stat.isCorrect ? 'bg-emerald-950 text-emerald-400 border border-emerald-600' : 'bg-slate-955 text-slate-400 border border-slate-700'
                                            }`}>
                                            {stat.isCorrect ? '✓' : stat.completedCount > 0 ? '•' : '✗'}
                                        </div>
                                        <div>
                                            <h4 className="text-[11px] font-bold text-slate-200">{cleanModTitle}</h4>
                                            <span className="text-[9px] text-slate-400">
                                                {language === 'id' ? 'Skor' : (language === 'th' ? 'คะแนน' : 'Score')}: +{stat.score} {language === 'id' ? 'Poin' : (language === 'th' ? 'คะแนน' : 'Pts')} ({stat.completedCount}/{stat.expectedCount} {language === 'id' ? 'Soal' : (language === 'th' ? 'ข้อ' : 'Questions')})
                                            </span>
                                        </div>
                                    </div>
                                    <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${stat.isCorrect ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-500/10 text-slate-400'
                                        }`}>
                                        {stat.isCorrect ? (language === 'id' ? 'Kompeten' : (language === 'th' ? 'ผ่าน' : 'Competent')) : `${stat.completedCount}/${stat.expectedCount} ${language === 'id' ? 'Selesai' : (language === 'th' ? 'เสร็จสิ้น' : 'Done')}`}
                                    </span>
                                </div>
                            );
                        })}

                        {/* Level 2 Status */}
                        <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-lg bg-amber-950 text-amber-400 border border-amber-600 flex items-center justify-center font-bold text-xs">
                                    {language === 'id' ? 'ID' : (language === 'th' ? 'TH' : 'EN')}
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-bold text-slate-200">Level 2: Medical Terminology</h4>
                                    <span className="text-[9px] text-slate-400">{language === 'id' ? 'Skor Modul' : (language === 'th' ? 'คะแนนโมดูล' : 'Module Score')}: +{getModuleStatus(7).score} {language === 'id' ? 'Poin' : (language === 'th' ? 'คะแนน' : 'Pts')}</span>
                                </div>
                            </div>
                            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-400">
                                {language === 'id' ? 'Selesai' : (language === 'th' ? 'เสร็จสิ้น' : 'Completed')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-4 shrink-0">
                <button
                    onClick={() => { resetGameProgress(); setScreen('menu'); }}
                    className="py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-bold rounded-xl text-xs uppercase tracking-wider transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                    <RotateCcw className="w-4 h-4" /> {language === 'id' ? 'Ulang' : (language === 'th' ? 'เริ่มใหม่' : 'Retry')}
                </button>
                <button
                    onClick={() => setScreen('menu')}
                    className="py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black rounded-xl text-xs uppercase tracking-wider shadow-lg transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                    <Home className="w-4 h-4" /> {t.backToMenu}
                </button>
            </div>
        </div>
    );
};