import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BookOpen, Award, LogOut, Play, CheckCircle2, UserCog, Cloud } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';
import { SKP_MODULES } from '../data/skpScenarios';
import { EXAM_SKP_MODULES } from '../data/examScenarios';
import { Avatar } from '../components/ui/Avatar';
import { LanguageToggle } from '../components/ui/LanguageToggle';
import { UI_TRANSLATIONS } from '../data/translations';

export const MainMenuView: React.FC = () => {
    const { currentUser, selectedMode, setGameMode, startSKP, setScreen, logout, totalScore, language } = useGameStore();
    const t = UI_TRANSLATIONS[language];
    const [selectedSKPForLevels, setSelectedSKPForLevels] = useState<number | null>(null);

    return (
        <div 
            style={{ backgroundImage: 'url("/assets/hospital_menu_bg.png")' }}
            className="h-full w-full bg-cover bg-center flex flex-col justify-between p-5 text-white relative overflow-y-auto select-none"
        >
            {/* Background overlay for subtle contrast */}
            <div className="absolute inset-0 bg-slate-950/20 pointer-events-none z-0" />

            {/* Top Bar Player Status & Language Toggle */}
            <div className="flex items-center justify-between bg-slate-900/90 border-[4px] border-sky-300 p-3.5 rounded-[1.5rem] shadow-[0_6px_0_#1e3a8a,0_10px_20px_rgba(0,0,0,0.3)] sticky top-0 z-20 shrink-0 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <div onClick={() => setScreen('locker')} className="cursor-pointer transition transform hover:scale-105" title="Ganti Avatar">
                        <Avatar avatar={currentUser?.avatar} size="sm" />
                    </div>
                    <div>
                        <div className="flex items-center gap-1.5">
                            <h2 className="text-sm font-black text-amber-300 uppercase tracking-wider drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">{currentUser?.username}</h2>
                            <UserCog onClick={() => setScreen('locker')} className="w-3.5 h-3.5 text-slate-300 cursor-pointer hover:text-white" />
                        </div>
                        <p className="text-[11px] text-sky-200 font-bold mt-0.5 flex items-center gap-2">
                            <span>NIM: {currentUser?.nim} • {t.score}: <span className="text-amber-400 font-black">{totalScore}</span></span>
                            <span className="inline-flex items-center gap-1 text-[9px] bg-emerald-950/90 border border-emerald-500/60 text-emerald-300 px-2 py-0.5 rounded-full font-black shadow-sm">
                                <Cloud className="w-2.5 h-2.5 text-cyan-300 animate-pulse" /> Supabase Live
                            </span>
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <button
                        onClick={logout}
                        className="px-3.5 py-2 bg-gradient-to-b from-rose-400 via-rose-500 to-rose-600 text-white rounded-full border-[3px] border-rose-100 shadow-[0_4px_0_#be123c] active:translate-y-0.5 active:shadow-[0_1px_0_#be123c] transition-all flex items-center gap-1 text-[11px] font-black select-none cursor-pointer"
                        title={t.logout}
                    >
                        <LogOut className="w-3.5 h-3.5 stroke-[3.5]" />
                        <span>{t.logout.toUpperCase()}</span>
                    </button>
                </div>
            </div>

            {/* Mode Selector */}
            <div className="my-4 w-full max-w-xl mx-auto shrink-0 z-10">
                <div className="bg-slate-950/80 p-2 rounded-[1.2rem] border-4 border-slate-800 flex justify-between gap-2 shadow-inner">
                    <button
                        onClick={() => setGameMode('practice')}
                        className={`flex-1 py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 border-4 select-none cursor-pointer ${
                            selectedMode === 'practice'
                                ? 'bg-gradient-to-b from-sky-400 to-blue-600 text-white border-sky-100 shadow-[0_4px_0_#1d4ed8]'
                                : 'bg-slate-900 text-slate-400 border-slate-850 hover:text-white'
                        }`}
                    >
                        <BookOpen className="w-4 h-4 text-amber-300 stroke-[3]" />
                        <span>{t.practiceModeTitle}</span>
                    </button>
                    <button
                        onClick={() => setGameMode('exam')}
                        className={`flex-1 py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 border-4 select-none cursor-pointer ${
                            selectedMode === 'exam'
                                ? 'bg-gradient-to-b from-amber-400 to-amber-600 text-slate-950 border-amber-100 shadow-[0_4px_0_#b45309]'
                                : 'bg-slate-900 text-slate-400 border-slate-855 hover:text-white'
                        }`}
                    >
                        <Award className="w-4 h-4 text-slate-950 stroke-[3]" />
                        <span>{t.examModeTitle}</span>
                    </button>
                </div>
                <p className="text-[10px] text-center text-slate-200 mt-2 font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {selectedMode === 'practice'
                        ? (language === 'id' ? '*Mode Latihan memberikan umpan balik klinis dan rasionalisasi langsung.' : '*Practice Mode provides direct clinical feedback and rationale.')
                        : (language === 'id' ? '*Mode Ujian mengakumulasi skor tanpa bantuan untuk sertifikasi akhir.' : '*Exam Mode accumulates scores without guidance for final certification.')}
                </p>
            </div>

            {/* Level Navigation Cards */}
            <div className="space-y-4 my-auto flex-1 flex flex-col justify-center py-2 z-10">
                <div className="flex items-center justify-between shrink-0">
                    <h3 className="text-xs font-black uppercase tracking-widest text-amber-300 flex items-center gap-1.5 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
                        <ShieldCheck className="w-4 h-4 text-amber-400 stroke-[3]" />
                        <span>Level 1: 6 {language === 'id' ? 'Sasaran Keselamatan Pasien (SKP)' : 'International Patient Safety Goals (IPSG)'}</span>
                    </h3>
                    <span className="text-[10px] font-black bg-cyan-950/90 px-3 py-1 rounded-full border-2 border-cyan-500/50 text-cyan-300 shadow-md">
                        {currentUser?.completedSKP?.filter((id) => id >= 1 && id <= 6).length || 0} / 6 {language === 'id' ? 'Selesai' : 'Completed'}
                    </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {(selectedMode === 'exam' ? EXAM_SKP_MODULES : SKP_MODULES).map((mod) => {
                        const isDone = currentUser?.completedSKP?.includes(mod.id);
                        const displayTitle = language === 'th' && mod.titleTh ? mod.titleTh : (language === 'en' && mod.titleEn ? mod.titleEn : mod.title);
                        const displaySubtitle = language === 'th' && mod.subtitleTh ? mod.subtitleTh : (language === 'en' && mod.subtitleEn ? mod.subtitleEn : mod.subtitle);
                        const cleanTitle = displayTitle.replace(/^SKP \d+: /, '').replace(/^IPSG \d+: /, '');
                        const cleanSubtitle = displaySubtitle.split('-')[0].trim();

                        return (
                            <motion.div
                                key={mod.id}
                                whileHover={{ scale: 1.04, y: -3 }}
                                whileTap={{ scale: 0.96 }}
                                onClick={() => setSelectedSKPForLevels(mod.id)}
                                className={`p-3.5 rounded-2xl border-[4px] transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[125px] select-none ${
                                    isDone
                                        ? 'bg-gradient-to-b from-emerald-500 via-emerald-600 to-emerald-800 border-emerald-200 text-white shadow-[0_6px_0_#047857,0_10px_20px_rgba(16,185,129,0.35)]'
                                        : selectedMode === 'exam'
                                        ? 'bg-gradient-to-b from-amber-900 via-slate-900 to-amber-950 border-amber-500/60 hover:border-amber-300 text-amber-100 shadow-[0_6px_0_#78350f,0_8px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_0_#b45309]'
                                        : 'bg-gradient-to-b from-sky-500 via-blue-600 to-slate-900 border-sky-200 hover:border-white text-slate-100 shadow-[0_6px_0_#1d4ed8,0_10px_20px_rgba(2,132,199,0.4)] hover:shadow-[0_8px_0_#0284c7,0_12px_24px_rgba(56,189,248,0.6)]'
                                }`}
                            >
                                {/* Top gloss reflection */}
                                <span className="absolute top-1 left-3 right-3 h-2 bg-gradient-to-b from-white/40 to-transparent rounded-full pointer-events-none z-10" />

                                {/* Background Number Watermark */}
                                <span className={`absolute -bottom-3 -right-2 text-6xl font-black pointer-events-none select-none z-0 ${
                                    isDone ? 'text-emerald-300/20' : selectedMode === 'exam' ? 'text-amber-400/20' : 'text-sky-200/20'
                                }`}>
                                    0{mod.id}
                                </span>

                                <div className="z-10 relative">
                                    <div className="flex items-center justify-between mb-1.5">
                                        <span className={`text-[9px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full border shadow-sm ${
                                            isDone 
                                                ? 'bg-emerald-950 border-emerald-300 text-emerald-100' 
                                                : selectedMode === 'exam'
                                                ? 'bg-amber-950/90 border-amber-300 text-amber-300'
                                                : 'bg-slate-955/90 border-sky-300 text-cyan-200'
                                        }`}>
                                            {selectedMode === 'exam' ? `EXAM 0${mod.id}` : (language === 'id' ? `SKP 0${mod.id}` : `IPSG 0${mod.id}`)}
                                        </span>
                                        {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-100 shrink-0 stroke-[3.5] drop-shadow-md" />}
                                    </div>
                                    <h4 className="text-[12px] font-black text-white leading-tight mt-1 line-clamp-2 drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.8)]">
                                        {cleanTitle}
                                    </h4>
                                </div>

                                <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/20 z-10">
                                    <span className="text-[10px] text-sky-100 font-extrabold truncate max-w-[75px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                        {cleanSubtitle}
                                    </span>
                                    <div className="w-5.5 h-5.5 rounded-full bg-white/25 flex items-center justify-center border border-white/40 shadow-md">
                                        <Play className="w-2.5 h-2.5 text-white fill-white" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Level 2 & Final Evaluation Link - side-by-side on md and up */}
                <div className="mt-5 pt-4 border-t border-slate-800/50 grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch shrink-0">
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-widest text-amber-300 mb-2.5 flex items-center gap-1.5 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">
                            <BookOpen className="w-4 h-4 text-amber-400 stroke-[3]" />
                            <span>Level 2: Medical Terminology</span>
                        </h3>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setScreen('word_search')}
                            className="w-full p-4 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 border-[4px] border-amber-200 rounded-[1.8rem] cursor-pointer flex items-center justify-between shadow-[0_8px_0_#b45309,0_10px_20px_rgba(0,0,0,0.3)] relative overflow-hidden h-[105px] select-none"
                        >
                            {/* Top gloss highlight */}
                            <span className="absolute top-1 left-4 right-4 h-3 bg-gradient-to-b from-white/50 to-transparent rounded-full pointer-events-none" />
                            
                            <div className="flex-1 min-w-0 pr-2 z-10">
                                <span className="text-[10px] font-black bg-slate-950 text-amber-300 px-3 py-1 rounded-full border border-amber-300 uppercase tracking-widest">
                                    Mini Game
                                </span>
                                <h4 className="text-sm font-black text-white mt-2 truncate drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">{t.wordSearchGameTitle}</h4>
                                <p className="text-[10px] text-slate-100 font-bold mt-0.5 line-clamp-1 opacity-90">{t.wordSearchGameDesc}</p>
                            </div>
                            <div className="p-3 bg-white text-amber-600 rounded-2xl font-black shrink-0 border-2 border-amber-200 shadow-md">
                                <Play className="w-4 h-4 fill-amber-500 text-amber-500" />
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col justify-end">
                        <h3 className="text-xs font-black uppercase tracking-widest text-cyan-300 mb-2.5 flex items-center gap-1.5 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">
                            <Award className="w-4 h-4 text-cyan-400 stroke-[3]" />
                            <span>{language === 'id' ? 'Sertifikasi Akhir' : (language === 'th' ? 'การรับรองขั้นสุดท้าย' : 'Final Certification')}</span>
                        </h3>
                        <button
                            onClick={() => setScreen('result')}
                            className="w-full h-[105px] p-4 bg-gradient-to-b from-teal-400 via-teal-500 to-cyan-600 hover:from-teal-350 hover:to-cyan-500 border-[4px] border-teal-100 text-white font-black rounded-[1.8rem] shadow-[0_8px_0_#0f766e,0_10px_20px_rgba(0,0,0,0.3)] transition-all flex flex-col items-center justify-center gap-1.5 text-xs uppercase tracking-wider relative overflow-hidden active:translate-y-1 active:shadow-[0_0f766e] cursor-pointer"
                        >
                            {/* Top gloss highlight */}
                            <span className="absolute top-1 left-4 right-4 h-3 bg-gradient-to-b from-white/45 to-transparent rounded-full pointer-events-none" />
                            <Award className="w-7 h-7 text-amber-300 animate-bounce drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.5)]" /> 
                            <span className="text-sm font-black drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.6)]">{t.evalCompetency}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Pop-up Pemilihan Tingkat Kasus (Sub-Level) */}
            {selectedSKPForLevels !== null && (() => {
                const activeModules = selectedMode === 'exam' ? EXAM_SKP_MODULES : SKP_MODULES;
                const activeMod = activeModules.find((m) => m.id === selectedSKPForLevels);
                if (!activeMod) return null;

                const displayPopUpTitle = language === 'th' && activeMod.titleTh ? activeMod.titleTh : (language === 'en' && activeMod.titleEn ? activeMod.titleEn : activeMod.title);

                return (
                    <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-slate-900/95 border-[6px] border-amber-300 rounded-[2.5rem] p-6 shadow-[0_12px_0_#b45309,0_20px_40px_rgba(0,0,0,0.5)] w-full max-w-md relative flex flex-col backdrop-blur-md text-white"
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedSKPForLevels(null)}
                                className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-b from-rose-400 via-rose-500 to-rose-600 text-white rounded-full border-4 border-rose-100 shadow-[0_4px_0_#be123c] active:translate-y-0.5 active:shadow-[0_1px_0_#be123c] transition-all flex items-center justify-center font-black text-lg select-none cursor-pointer z-50 animate-bounce"
                            >
                                X
                            </button>

                            <div className="text-center mb-6">
                                <span className="text-[10px] font-black text-amber-300 uppercase tracking-widest bg-amber-400/20 px-3 py-1 rounded-full border border-amber-300">
                                    {selectedMode === 'exam' ? t.selectExamTitle : t.selectCaseTitle}
                                </span>
                                <h3 className="text-lg font-black text-white mt-3 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">
                                    {displayPopUpTitle}
                                </h3>
                                <p className="text-[11px] text-slate-300 font-bold mt-1">
                                    {selectedMode === 'exam' ? t.selectExamSubtitle : t.selectCaseSubtitle}
                                </p>
                            </div>

                            <div className="space-y-4">
                                {activeMod.subLevels.map((level) => {
                                    const subLevelStr = `${activeMod.id}-${level.id}`;
                                    const isSubDone = currentUser?.completedSubLevels?.includes(subLevelStr);
                                    const displayLevelTitle = language === 'th' && level.titleTh ? level.titleTh : (language === 'en' && level.titleEn ? level.titleEn : level.title);
                                    const displayLevelSubtitle = language === 'th' && level.subtitleTh ? level.subtitleTh : (language === 'en' && level.subtitleEn ? level.subtitleEn : level.subtitle);

                                    return (
                                        <motion.div
                                            key={level.id}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => {
                                                startSKP(activeMod.id, level.id);
                                                setSelectedSKPForLevels(null);
                                            }}
                                            className={`p-4 rounded-2xl border-4 cursor-pointer relative overflow-hidden flex items-center justify-between transition-all select-none ${
                                                selectedMode === 'exam'
                                                    ? 'bg-gradient-to-b from-amber-400 to-amber-600 border-amber-100 shadow-[0_5px_0_#b45309]'
                                                    : level.id === 1
                                                    ? 'bg-gradient-to-b from-sky-400 to-sky-600 border-sky-100 shadow-[0_5px_0_#0284c7]'
                                                    : 'bg-gradient-to-b from-amber-400 to-amber-500 border-amber-100 shadow-[0_5px_0_#d97706]'
                                            }`}
                                        >
                                            {/* Top gloss */}
                                            <span className="absolute top-1 left-4 right-4 h-2 bg-gradient-to-b from-white/45 to-transparent rounded-full pointer-events-none" />

                                            <div className="flex-1 pr-4 text-slate-950 animate-pulse-none">
                                                <h4 className="text-sm font-black drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.4)]">
                                                    {displayLevelTitle}
                                                </h4>
                                                <p className="text-[10px] font-bold mt-0.5 leading-snug">
                                                    {displayLevelSubtitle}
                                                </p>
                                            </div>

                                            <div className="shrink-0 flex items-center gap-2">
                                                {isSubDone ? (
                                                    <span className="bg-emerald-500 text-slate-950 p-1.5 rounded-full border border-emerald-100 shadow-md">
                                                        <CheckCircle2 className="w-4 h-4 stroke-[3.5]" />
                                                    </span>
                                                ) : (
                                                    <span className="bg-white/20 p-2 rounded-full border border-white/30 text-slate-950 font-black text-[10px]">
                                                        {t.startBtn}
                                                    </span>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                );
            })()}
        </div>
    );
};