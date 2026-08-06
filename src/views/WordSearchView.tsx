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

const TARGET_WORDS = ['PATIENT', 'SAFETY', 'NURSE', 'HYGIENE', 'SURGERY'];

const QUIZ_QUESTION = {
    question: "While conducting morning rounds, a nurse observes that a 65-year-old post-operative patient has a yellow ID wristband in addition to the standard blue hospital band. What clinical safety indication does this yellow wristband represent in international nursing standards?",
    options: [
        "The patient has a confirmed severe allergy to Penicillin or other specific medications.",
        "The patient is assessed as a high risk for falling (Morse Fall Scale score > 45).",
        "The patient is scheduled for an urgent surgical procedure requiring blood transfusion.",
        "The patient requires strict respiratory isolation due to an airborne infectious disease."
    ],
    correct: 1,
    explanation: "In standard international hospital color-coding (JCI guidelines): Blue/Pink is for general identification (Male/Female), Red is for Drug Allergies, and YELLOW indicates a High Fall Risk requiring strict preventive safety measures such as bed rails up and assisted mobility."
};

export const WordSearchView: React.FC = () => {
    const { currentUser, setScreen, submitSKPResult, language } = useGameStore();
    const t = UI_TRANSLATIONS[language];
    const [timeLeft, setTimeLeft] = useState(600); // 10 menit
    const [selectedCells, setSelectedCells] = useState<string[]>([]);
    const [foundWords, setFoundWords] = useState<string[]>([]);
    const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

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
        if (selectedCells.includes(key)) {
            setSelectedCells(selectedCells.filter((c) => c !== key));
        } else {
            setSelectedCells([...selectedCells, key]);
        }
    };

    const handleMarkWord = (word: string) => {
        if (!foundWords.includes(word)) {
            setFoundWords([...foundWords, word]);
        }
    };

    const handleSubmitAll = () => {
        setIsSubmitted(true);
        const isQuizRight = quizAnswer === QUIZ_QUESTION.correct;
        const wordScore = foundWords.length * 10;
        const quizScore = isQuizRight ? 50 : 0;
        const totalLevelScore = wordScore + quizScore;
        const earnedStars = totalLevelScore >= 80 ? 3 : totalLevelScore >= 50 ? 2 : 1;

        submitSKPResult({
            skpId: 7, // Level 2 ID
            isCorrect: isQuizRight && foundWords.length >= 3,
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

            <div className="my-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-start flex-1 py-2">
                {/* SECTION 1: WORD SEARCH 10x10 */}
                <div className="bg-slate-900/90 border-2 border-amber-400/50 p-4 rounded-3xl shadow-xl md:col-span-6 lg:col-span-7 flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xs font-black uppercase text-amber-300">1. Word Grid (10x10)</h3>
                        <span className="text-[10px] text-cyan-300 font-bold">{foundWords.length} / {TARGET_WORDS.length} Kata</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                        {TARGET_WORDS.map((w) => (
                            <button
                                key={w}
                                onClick={() => handleMarkWord(w)}
                                className={`px-2 py-0.5 rounded text-[10px] font-black tracking-wider transition ${foundWords.includes(w) ? 'bg-emerald-500 text-slate-950 line-through' : 'bg-slate-800 text-slate-300 border border-slate-700'
                                    }`}
                            >
                                {w}
                            </button>
                        ))}
                    </div>

                    {/* Grid Render */}
                    <div className="grid grid-cols-10 gap-1 bg-slate-950 p-2 rounded-xl border border-slate-800 max-w-[340px] mx-auto md:max-w-none w-full">
                        {INITIAL_GRID.map((row, rIdx) =>
                            row.map((letter, cIdx) => {
                                const key = `${rIdx}-${cIdx}`;
                                const isSel = selectedCells.includes(key);
                                return (
                                    <div
                                        key={key}
                                        onClick={() => toggleCell(rIdx, cIdx)}
                                        className={`aspect-square flex items-center justify-center font-mono font-bold text-[11px] md:text-xs rounded cursor-pointer select-none transition ${isSel
                                            ? 'bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 shadow-md font-black scale-105'
                                            : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                                            }`}
                                    >
                                        {letter}
                                    </div>
                                );
                            })
                        )}
                    </div>
                    <p className="text-[8px] text-slate-400 mt-2 text-center">*Klik huruf pada grid lalu ketuk label kata di atas jika menemukan kata yang tepat.</p>
                </div>

                {/* SECTION 2: ENGLISH CLINICAL CASE QUIZ */}
                <div className="bg-slate-900/90 border-2 border-cyan-500/50 p-4 rounded-3xl shadow-xl space-y-3 md:col-span-6 lg:col-span-5 h-full flex flex-col justify-between">
                    <div>
                        <h3 className="text-xs font-black uppercase text-cyan-300 mb-2">2. English Nursing Case Study</h3>
                        <p className="text-xs text-slate-200 leading-relaxed font-semibold bg-slate-950 p-3 rounded-xl border border-slate-800">
                            {QUIZ_QUESTION.question}
                        </p>

                        <div className="space-y-2 mt-3">
                            {QUIZ_QUESTION.options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    disabled={isSubmitted}
                                    onClick={() => setQuizAnswer(idx)}
                                    className={`w-full text-left p-3 rounded-xl text-xs font-semibold transition border ${quizAnswer === idx
                                        ? 'bg-cyan-600 border-cyan-300 text-white shadow-lg font-bold'
                                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                                        }`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>

                    {isSubmitted && (
                        <div className={`p-3 rounded-xl text-xs border mt-3 ${quizAnswer === QUIZ_QUESTION.correct ? 'bg-emerald-950 border-emerald-500 text-emerald-200' : 'bg-rose-950 border-rose-500 text-rose-200'}`}>
                            <p className="font-bold mb-1 flex items-center gap-1">
                                <Award className="w-4 h-4 text-amber-400" /> Clinical Explanation:
                            </p>
                            <p className="text-[10px] leading-relaxed">{QUIZ_QUESTION.explanation}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Submit Button */}
            <div className="shrink-0 mt-4">
                {!isSubmitted ? (
                    <button
                        onClick={handleSubmitAll}
                        disabled={quizAnswer === null}
                        className={`w-full py-3.5 font-black rounded-xl text-xs uppercase tracking-wider shadow-lg transition ${quizAnswer !== null ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950' : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                            }`}
                    >
                        Submit Answers & Evaluate Level 2
                    </button>
                ) : (
                    <button
                        onClick={() => setScreen('result')}
                        className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black rounded-xl text-xs uppercase tracking-wider shadow-lg"
                    >
                        Lihat Rekap Evaluasi Keseluruhan
                    </button>
                )}
            </div>
        </div>
    );
};