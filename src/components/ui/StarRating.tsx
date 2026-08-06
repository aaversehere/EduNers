import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, XCircle, Award } from 'lucide-react';
import { useGameStore } from '../../store/useGameStore';

interface StarRatingProps {
    stars: number;
    score: number;
    isCorrect: boolean;
    explanation: string;
    onNext: () => void;
}

export const StarRating: React.FC<StarRatingProps> = ({ stars, score, isCorrect, explanation, onNext }) => {
    const { language } = useGameStore();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="w-full max-w-sm bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 border-4 border-amber-400 rounded-3xl p-6 text-center shadow-2xl relative overflow-hidden"
            >
                {/* Glow Background */}
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />

                {/* Status Icon */}
                <div className="flex justify-center mb-4">
                    {isCorrect ? (
                        <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                            <CheckCircle2 className="w-16 h-16 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
                        </motion.div>
                    ) : (
                        <XCircle className="w-16 h-16 text-rose-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]" />
                    )}
                </div>

                <h3 className={`text-xl font-black uppercase tracking-wider mb-2 ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {isCorrect
                        ? (language === 'id' ? 'Tindakan Sesuai Prosedur!' : (language === 'th' ? 'การปฏิบัติถูกต้องตามขั้นตอน!' : 'Correct Procedure Action!'))
                        : (language === 'id' ? 'Perlu Evaluasi Medis!' : (language === 'th' ? 'ต้องได้รับการประเมินทางการแพทย์!' : 'Needs Medical Evaluation!'))}
                </h3>

                {/* Bintang Skor */}
                <div className="flex justify-center gap-2 my-4">
                    {[1, 2, 3].map((index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0 }}
                            animate={{ scale: index <= stars ? 1 : 0.8 }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <Star
                                className={`w-10 h-10 ${index <= stars
                                        ? 'text-amber-400 fill-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]'
                                        : 'text-slate-700 fill-slate-800'
                                    }`}
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3 mb-4 text-xs text-slate-300 text-left max-h-36 overflow-y-auto">
                    <p className="font-bold text-cyan-400 mb-1 flex items-center gap-1">
                        <Award className="w-4 h-4 text-amber-400" /> {language === 'id' ? 'Rasionalisasi Klinis:' : (language === 'th' ? 'เหตุผลทางการแพทย์:' : 'Clinical Rationale:')}
                    </p>
                    {explanation}
                </div>

                <div className="text-sm font-bold text-amber-300 mb-6">
                    {language === 'id' ? 'Perolehan Skor Modul:' : (language === 'th' ? 'คะแนนโมดูลที่ได้รับ:' : 'Module Score Earned:')} <span className="text-lg text-white">+{score} {language === 'id' ? 'Poin' : (language === 'th' ? 'คะแนน' : 'Pts')}</span>
                </div>

                <button
                    onClick={onNext}
                    className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-xl shadow-lg transition transform active:scale-95 uppercase tracking-wide cursor-pointer"
                >
                    {language === 'id' ? 'Lanjutkan Tugas' : (language === 'th' ? 'ทำภารกิจต่อไป' : 'Continue Task')}
                </button>
            </motion.div>
        </div>
    );
};