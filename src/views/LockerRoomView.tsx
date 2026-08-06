import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, UserCheck } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';
import { Gender, FemaleStyle, MaleStyle } from '../types/game';
import { Avatar } from '../components/ui/Avatar';
import { LanguageToggle } from '../components/ui/LanguageToggle';
import { UI_TRANSLATIONS } from '../data/translations';

export const LockerRoomView: React.FC = () => {
    const { currentUser, updateAvatar, language } = useGameStore();
    const t = UI_TRANSLATIONS[language];
    const [gender, setGender] = useState<Gender>(currentUser?.avatar?.gender || 'female');
    const [style, setStyle] = useState<FemaleStyle | MaleStyle>(
        currentUser?.avatar?.style || (gender === 'female' ? 'hijab' : 'non-glasses')
    );

    const handleGenderChange = (newGender: Gender) => {
        setGender(newGender);
        setStyle(newGender === 'female' ? 'hijab' : 'non-glasses');
    };

    const handleSave = () => {
        updateAvatar({ gender, style: style as any });
    };

    return (
        <div className="h-full flex flex-col justify-between p-6 bg-gradient-to-b from-slate-900 via-cyan-950 to-slate-900 text-white overflow-y-auto relative">
            {/* Language Toggle at Top Right */}
            <div className="absolute top-4 right-4 z-20">
                <LanguageToggle />
            </div>

            {/* Header */}
            <div className="text-center mt-2 shrink-0">
                <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30 mb-2">
                    <Sparkles className="w-3.5 h-3.5" /> {t.lockerTitle}
                </div>
                <h1 className="text-2xl font-black tracking-tight text-cyan-300">{t.selectGender}</h1>
            </div>

            {/* Split layout on wider screens */}
            <div className="flex-1 flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 w-full max-w-4xl mx-auto my-auto py-4 overflow-y-auto">
                {/* Live Preview Avatar */}
                <motion.div
                    key={`${gender}-${style}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 bg-slate-950/60 border-2 border-cyan-500/30 rounded-3xl relative overflow-hidden shadow-2xl min-h-[220px]"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent pointer-events-none" />
                    
                    {/* Stylized Hospital Room backdrop (vector decorations) */}
                    <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Hospital Bed silhouette */}
                            <path d="M5 85 H32 M10 85 V75 H30 V85 M12 75 L20 62 L28 75" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400" />
                            {/* Medical monitor silhouette */}
                            <rect x="8" y="45" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400" />
                            <path d="M10 51 H20" stroke="currentColor" strokeWidth="1" className="text-cyan-400" />
                            {/* IV Pole */}
                            <line x1="82" y1="20" x2="82" y2="85" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400" />
                            <path d="M78 26 Q82 20 86 26" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400" />
                            <circle cx="82" cy="36" r="3" stroke="currentColor" strokeWidth="1" className="text-cyan-400" />
                            {/* EKG wave running across background */}
                            <path d="M0 56 Q15 56 22 45 L26 75 L30 32 L34 60 L38 56 H100" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400" />
                        </svg>
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center">
                        <Avatar avatar={{ gender, style: style as any }} size="xl" showBadge />
                        <div className="mt-4 text-center">
                            <p className="text-sm font-black text-amber-300 uppercase tracking-wide">{currentUser?.username || 'Ners Baru'}</p>
                            <p className="text-[10px] text-cyan-400 font-semibold">NIM: {currentUser?.nim} • Ruang Perawatan Intensif</p>
                        </div>
                    </div>
                </motion.div>

                {/* Controls and Submit */}
                <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
                    {/* Control Selector */}
                    <div className="space-y-4 bg-slate-900/90 p-5 rounded-3xl border border-slate-800 shadow-xl flex-1 flex flex-col justify-center">
                        <div>
                            <label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">1. Pilih Gender Perawat</label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    onClick={() => handleGenderChange('female')}
                                    className={`py-2.5 rounded-xl font-bold text-xs border transition flex items-center justify-center gap-2 ${gender === 'female'
                                            ? 'bg-cyan-600 border-cyan-400 text-white shadow-lg shadow-cyan-600/30'
                                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                                        }`}
                                >
                                    Ners Wanita {gender === 'female' && <Check className="w-3.5 h-3.5 text-amber-300" />}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleGenderChange('male')}
                                    className={`py-2.5 rounded-xl font-bold text-xs border transition flex items-center justify-center gap-2 ${gender === 'male'
                                            ? 'bg-cyan-600 border-cyan-400 text-white shadow-lg shadow-cyan-600/30'
                                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                                        }`}
                                >
                                    Ners Pria {gender === 'male' && <Check className="w-3.5 h-3.5 text-amber-300" />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">2. Penampilan Atribut</label>
                            <div className="grid grid-cols-2 gap-3">
                                {gender === 'female' ? (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => setStyle('hijab')}
                                            className={`py-2.5 rounded-xl font-bold text-xs border transition flex items-center justify-center gap-2 ${style === 'hijab'
                                                    ? 'bg-amber-500 border-amber-300 text-slate-950 shadow-lg'
                                                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                                                }`}
                                        >
                                            Dengan Hijab {style === 'hijab' && <Check className="w-3.5 h-3.5 text-slate-950" />}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setStyle('non-hijab')}
                                            className={`py-2.5 rounded-xl font-bold text-xs border transition flex items-center justify-center gap-2 ${style === 'non-hijab'
                                                    ? 'bg-amber-500 border-amber-300 text-slate-950 shadow-lg'
                                                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                                                }`}
                                        >
                                            Tanpa Hijab {style === 'non-hijab' && <Check className="w-3.5 h-3.5 text-slate-950" />}
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => setStyle('glasses')}
                                            className={`py-2.5 rounded-xl font-bold text-xs border transition flex items-center justify-center gap-2 ${style === 'glasses'
                                                    ? 'bg-amber-500 border-amber-300 text-slate-950 shadow-lg'
                                                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                                                }`}
                                        >
                                            Kacamata {style === 'glasses' && <Check className="w-3.5 h-3.5 text-slate-950" />}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setStyle('non-glasses')}
                                            className={`py-2.5 rounded-xl font-bold text-xs border transition flex items-center justify-center gap-2 ${style === 'non-glasses'
                                                    ? 'bg-amber-500 border-amber-300 text-slate-950 shadow-lg'
                                                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                                                }`}
                                        >
                                            Tanpa Kacamata {style === 'non-glasses' && <Check className="w-3.5 h-3.5 text-slate-950" />}
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleSave}
                        className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black rounded-2xl shadow-xl transition transform active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wide text-sm shrink-0"
                    >
                        <UserCheck className="w-5 h-5" /> Masuk ke Lobi Rumah Sakit
                    </button>
                </div>
            </div>
        </div>
    );
};