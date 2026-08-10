import React, { useState, useEffect } from 'react';
import { ArrowLeft, Timer, Award } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';
import { LanguageToggle } from '../components/ui/LanguageToggle';
import { UI_TRANSLATIONS } from '../data/translations';
import { recordGameSubmission } from '../services/dbService';

const INITIAL_GRID = [
    ['I', 'D', 'E', 'N', 'T', 'I', 'F', 'I', 'C', 'A'],
    ['C', 'O', 'M', 'M', 'U', 'N', 'I', 'C', 'A', 'T'],
    ['P', 'A', 'T', 'I', 'E', 'N', 'T', 'S', 'S', 'A'],
    ['H', 'Y', 'G', 'I', 'E', 'N', 'E', 'N', 'A', 'F'],
    ['S', 'U', 'R', 'G', 'E', 'R', 'Y', 'U', 'F', 'E'],
    ['N', 'U', 'R', 'S', 'E', 'R', 'S', 'R', 'E', 'T'],
    ['M', 'E', 'D', 'I', 'C', 'A', 'T', 'I', 'O', 'Y'],
    ['H', 'A', 'Z', 'A', 'R', 'D', 'S', 'S', 'K', 'O'],
    ['S', 'A', 'F', 'E', 'T', 'Y', 'G', 'O', 'A', 'L'],
    ['C', 'L', 'I', 'N', 'I', 'C', 'A', 'L', 'S', 'S'],
];

const CASE_STUDY_QUESTIONS = [
    {
        word: 'PATIENT',
        id: "Individu utama yang menerima perawatan medis dan menjadi fokus keselamatan di rumah sakit disebut sebagai...",
        en: "The primary individual receiving medical care and the focus of safety in the hospital is referred to as a...",
        th: "บุคคลหลักที่ได้รับการรักษาทางการแพทย์และเป็นจุดเน้นด้านความปลอดภัยในโรงพยาบาลเรียกว่า..."
    },
    {
        word: 'SAFETY',
        id: "Memasang pagar tempat tidur untuk mencegah pasien berisiko tinggi jatuh adalah bagian dari prosedur keamanan atau...",
        en: "Raising the bed rails to prevent a high-risk patient from falling is part of the procedure for...",
        th: "การยกราวกั้นเตียงขึ้นเพื่อป้องกันไม่ให้ผู้ป่วยที่มีความเสี่ยงสูงหกล้มเป็นส่วนหนึ่งของขั้นตอนการรักษาความ..."
    },
    {
        word: 'NURSE',
        id: "Tenaga medis profesional yang bertugas merawat dan memantau kondisi vital pasien setiap hari adalah...",
        en: "The professional medical staff responsible for caring for and monitoring the patient's vital conditions daily is a...",
        th: "บุคลากรทางการแพทย์มืออาชีพที่รับผิดชอบในการดูแลและติดตามอาการสำคัญของผู้ป่วยทุกวันคือ..."
    },
    {
        word: 'HYGIENE',
        id: "Tindakan mencuci tangan sebelum dan sesudah menyentuh pasien adalah prosedur wajib untuk menjaga...",
        en: "The act of washing hands before and after touching a patient is a mandatory procedure to maintain...",
        th: "การล้างมือก่อนและหลังสัมผัสผู้ป่วยเป็นขั้นตอนบังคับเพื่อรักษา..."
    },
    {
        word: 'SURGERY',
        id: "Prosedur operatif medis yang dilakukan oleh dokter di dalam ruang operasi (OK) disebut...",
        en: "A medical operative procedure performed by doctors in the operating room (OR) is called...",
        th: "ขั้นตอนการผ่าตัดทางการแพทย์ที่ดำเนินการโดยแพทย์ในห้องผ่าตัด (OR) เรียกว่า..."
    }
];

export const WordSearchView: React.FC = () => {
    const { currentUser, setScreen, submitSKPResult, language } = useGameStore();
    const t = UI_TRANSLATIONS[language];
    const [timeLeft, setTimeLeft] = useState(600); // 10 menit
    const [selectedCells, setSelectedCells] = useState<string[]>([]);
    const [foundWords, setFoundWords] = useState<string[]>([]);
    const [isGameComplete, setIsGameComplete] = useState(false);
    const [foundCells, setFoundCells] = useState<string[]>([]);
    const [errorCells, setErrorCells] = useState<string[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const toggleCell = (row: number, col: number) => {
        const key = `${row}-${col}`;
        
        // Prevent toggling already found cells or if it's currently showing an error
        if (foundCells.includes(key) || errorCells.length > 0) return;

        let newSelected = [...selectedCells];
        if (newSelected.includes(key)) {
            newSelected = newSelected.filter((c) => c !== key);
        } else {
            newSelected.push(key);
        }
        
        setSelectedCells(newSelected);

        // Check if selected cells form any of the target words
        checkWordMatch(newSelected);
    };

    const checkWordMatch = (currentSelected: string[]) => {
        if (currentSelected.length === 0) return;
        if (currentQuestionIndex >= CASE_STUDY_QUESTIONS.length) return;

        // Sort coordinates for easier matching regardless of click order
        const sortedSelected = [...currentSelected].sort();
        
        const currentQuestion = CASE_STUDY_QUESTIONS[currentQuestionIndex];
        const word = currentQuestion.word;

        if (foundWords.includes(word)) return;
        
        let isMatch = false;

        // Check horizontal match in the grid
        for (let r = 0; r < INITIAL_GRID.length; r++) {
            const rowStr = INITIAL_GRID[r].join('');
            const colIdx = rowStr.indexOf(word);
            
            if (colIdx !== -1) {
                const expectedCoords: string[] = [];
                for (let i = 0; i < word.length; i++) {
                    expectedCoords.push(`${r}-${colIdx + i}`);
                }
                
                const sortedExpected = expectedCoords.sort();
                
                if (sortedSelected.length === sortedExpected.length && 
                    sortedSelected.every((val, index) => val === sortedExpected[index])) {
                    
                    // Match found!
                    isMatch = true;
                    setFoundWords(prev => [...prev, word]);
                    setFoundCells(prev => [...prev, ...expectedCoords]);
                    setSelectedCells([]);
                    setCurrentQuestionIndex(prev => prev + 1);
                    return; // Exit early
                }
            }
        }

        // UX FIX: If they selected the same number of cells as the target word but it didn't match,
        // it means they selected the wrong cells. We give them a "Wrong" visual feedback.
        if (!isMatch && currentSelected.length === word.length) {
            setErrorCells([...currentSelected]);
            setTimeout(() => {
                setErrorCells([]);
                setSelectedCells([]);
            }, 600); // clear after 600ms
        }
    };

    const handleSubmitAll = () => {
        setIsGameComplete(true);
        const wordScore = foundWords.length * 20; // 5 kata = 100
        const totalLevelScore = wordScore;
        const earnedStars = totalLevelScore >= 80 ? 3 : totalLevelScore >= 50 ? 2 : 1;

        submitSKPResult({
            skpId: 7, // Level 2 ID
            isCorrect: foundWords.length === CASE_STUDY_QUESTIONS.length,
            score: totalLevelScore,
            stars: earnedStars
        });

        if (currentUser) {
            recordGameSubmission(
                currentUser.nim,
                currentUser.username,
                foundWords,
                totalLevelScore,
                earnedStars,
                timeLeft
            );
        }
    };

    const allWordsFound = foundWords.length === CASE_STUDY_QUESTIONS.length;

    return (
        <div className="h-full flex flex-col justify-between p-4 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 text-white overflow-y-auto">
            {/* Header & Timer */}
            <div className="flex items-center justify-between bg-slate-900/90 border border-slate-700 p-3 rounded-2xl sticky top-0 z-20 shrink-0">
                <button onClick={() => setScreen('menu')} className="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-cyan-300 text-xs font-bold flex items-center gap-1">
                    <ArrowLeft className="w-4 h-4" /> {t.menuNav}
                </button>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 bg-rose-950/80 border border-rose-500/50 px-3 py-1 rounded-full text-rose-300 font-mono font-bold text-xs">
                        <Timer className="w-4 h-4 animate-pulse text-amber-400" />
                        {formatTime(timeLeft)}
                    </div>
                    <LanguageToggle />
                </div>
            </div>

            {/* Case Study Banner */}
            <div className="bg-slate-900/90 border border-cyan-500/50 p-4 rounded-3xl shadow-xl mt-4 shrink-0 mx-auto w-full max-w-4xl transition-all duration-500">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xs font-black uppercase text-cyan-300 flex items-center gap-1.5">
                        <Award className="w-4 h-4" />
                        {language === 'id' ? 'Soal Studi Kasus' : (language === 'th' ? 'คำถามกรณีศึกษา' : 'Case Study Question')}
                    </h3>
                    <span className="text-[10px] font-bold bg-slate-950 px-2 py-1 rounded-lg border border-slate-800 text-cyan-300">
                        {Math.min(currentQuestionIndex + 1, CASE_STUDY_QUESTIONS.length)} / {CASE_STUDY_QUESTIONS.length}
                    </span>
                </div>
                
                <p className="text-sm md:text-base text-slate-200 leading-relaxed font-semibold bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-inner min-h-[80px]">
                    {currentQuestionIndex < CASE_STUDY_QUESTIONS.length 
                        ? CASE_STUDY_QUESTIONS[currentQuestionIndex][language as 'id' | 'en' | 'th']
                        : (language === 'id' ? 'Luar biasa! Anda telah menyelesaikan semua soal.' : (language === 'th' ? 'ยอดเยี่ยม! คุณตอบคำถามทั้งหมดแล้ว' : 'Excellent! You have completed all questions.'))}
                </p>
            </div>

            <div className="my-4 flex flex-col items-center justify-center flex-1 py-2 w-full">
                {/* SECTION 1: WORD SEARCH 10x10 */}
                <div className="bg-slate-900/90 border-2 border-amber-400/50 p-5 rounded-3xl shadow-xl flex flex-col items-center w-full max-w-2xl">
                    <div className="flex w-full justify-between items-center mb-4">
                        <h3 className="text-xs md:text-sm font-black uppercase text-amber-300">
                             {language === 'id' ? 'Pencarian Kata' : (language === 'th' ? 'ค้นหาคำศัพท์' : 'Word Grid')} (10x10)
                        </h3>
                        <span className="text-[10px] md:text-xs text-cyan-300 font-bold bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 shadow-inner">
                            {foundWords.length} / {CASE_STUDY_QUESTIONS.length} {language === 'id' ? 'Kata Ditemukan' : (language === 'th' ? 'พบคำ' : 'Words Found')}
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-5 w-full bg-slate-950/50 p-2 rounded-xl">
                        {CASE_STUDY_QUESTIONS.map((q, idx) => {
                            const isFound = foundWords.includes(q.word);
                            const isCurrent = idx === currentQuestionIndex;
                            return (
                                <div
                                    key={q.word}
                                    className={`px-3 py-1.5 rounded text-[10px] md:text-xs font-black tracking-wider transition-all duration-300 ${
                                        isFound 
                                            ? 'bg-emerald-500 text-slate-950 shadow-md scale-105' 
                                            : isCurrent
                                                ? 'bg-cyan-600/80 text-white border border-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]'
                                                : 'bg-slate-800 text-slate-500 border border-slate-700 opacity-50'
                                        }`}
                                >
                                    {isFound ? q.word : '? ? ? ? ?'}
                                </div>
                            );
                        })}
                    </div>

                    {/* Grid Render */}
                    <div className="grid grid-cols-10 gap-1.5 bg-slate-950 p-3 rounded-2xl border border-slate-800 max-w-[340px] mx-auto md:max-w-none shadow-inner w-full relative overflow-hidden">
                        {INITIAL_GRID.map((row, rIdx) =>
                            row.map((letter, cIdx) => {
                                const key = `${rIdx}-${cIdx}`;
                                const isSel = selectedCells.includes(key);
                                const isFound = foundCells.includes(key);
                                const isErr = errorCells.includes(key);
                                return (
                                    <div
                                        key={key}
                                        onClick={() => toggleCell(rIdx, cIdx)}
                                        className={`aspect-square flex items-center justify-center font-mono font-bold text-xs md:text-sm rounded cursor-pointer select-none transition-all duration-200 ${
                                            isFound 
                                                ? 'bg-emerald-500 text-slate-950 font-black shadow-md scale-105 z-10'
                                                : isErr
                                                    ? 'bg-rose-600 text-white font-black shadow-[0_0_15px_rgba(225,29,72,0.6)] scale-110 z-10 ring-2 ring-rose-400'
                                                    : isSel
                                                        ? 'bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 shadow-md font-black scale-110 z-10 ring-2 ring-white/50'
                                                        : 'bg-slate-900 text-slate-300 hover:bg-slate-700 hover:scale-105'
                                            }`}
                                    >
                                        {letter}
                                    </div>
                                );
                            })
                        )}
                    </div>
                    <p className="text-[10px] text-slate-400 mt-4 text-center">
                        *{language === 'id' ? 'Tebak jawaban dari soal di atas (dalam bahasa Inggris), lalu cari dan ketuk huruf-hurufnya di grid.' : (language === 'th' ? 'เดาคำตอบของคำถามด้านบน (เป็นภาษาอังกฤษ) จากนั้นค้นหาและแตะตัวอักษรในตาราง' : 'Guess the answer to the question above (in English), then find and tap the letters in the grid.')}
                    </p>
                </div>
            </div>

            {/* Submit Button */}
            <div className="shrink-0 mt-2 max-w-4xl mx-auto w-full">
                {!isGameComplete ? (
                    <button
                        onClick={handleSubmitAll}
                        disabled={!allWordsFound}
                        className={`w-full py-4 font-black rounded-xl text-xs md:text-sm uppercase tracking-wider shadow-lg transition-all duration-300 ${allWordsFound ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:scale-[1.01] hover:shadow-amber-500/50' : 'bg-slate-800 text-slate-600 cursor-not-allowed'
                            }`}
                    >
                        {allWordsFound 
                            ? (language === 'id' ? 'Selesai & Kumpulkan!' : (language === 'th' ? 'ส่งคำตอบ!' : 'Finish & Submit!'))
                            : (language === 'id' ? 'Temukan semua 5 kata untuk melanjutkan' : (language === 'th' ? 'ค้นหาครบ 5 คำเพื่อดำเนินการต่อ' : 'Find all 5 words to continue'))}
                    </button>
                ) : (
                    <button
                        onClick={() => setScreen('result')}
                        className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black rounded-xl text-xs md:text-sm uppercase tracking-wider shadow-lg hover:scale-[1.01] transition-all duration-300"
                    >
                        {language === 'id' ? 'Lihat Rekap Evaluasi' : (language === 'th' ? 'ดูบทสรุปการประเมิน' : 'View Evaluation Summary')}
                    </button>
                )}
            </div>
        </div>
    );
};