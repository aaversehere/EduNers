import React from 'react';
import { useGameStore } from '../../store/useGameStore';

export const LanguageToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
    const { language, setLanguage } = useGameStore();

    return (
        <div className={`inline-flex items-center bg-slate-900/90 border-2 border-amber-300/80 rounded-full p-1 shadow-md backdrop-blur-md select-none ${className}`}>
            <button
                type="button"
                onClick={() => setLanguage('id')}
                className={`px-2.5 py-1 text-[11px] font-black rounded-full transition-all cursor-pointer flex items-center gap-1 ${
                    language === 'id'
                        ? 'bg-gradient-to-b from-amber-400 to-amber-600 text-slate-950 shadow-[0_2px_0_#b45309]'
                        : 'text-slate-300 hover:text-white'
                }`}
                title="Bahasa Indonesia"
            >
                <span>🇮🇩</span> ID
            </button>
            <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-[11px] font-black rounded-full transition-all cursor-pointer flex items-center gap-1 ${
                    language === 'en'
                        ? 'bg-gradient-to-b from-amber-400 to-amber-600 text-slate-950 shadow-[0_2px_0_#b45309]'
                        : 'text-slate-300 hover:text-white'
                }`}
                title="English"
            >
                <span>🇬🇧</span> EN
            </button>
            <button
                type="button"
                onClick={() => setLanguage('th')}
                className={`px-2.5 py-1 text-[11px] font-black rounded-full transition-all cursor-pointer flex items-center gap-1 ${
                    language === 'th'
                        ? 'bg-gradient-to-b from-amber-400 to-amber-600 text-slate-950 shadow-[0_2px_0_#b45309]'
                        : 'text-slate-300 hover:text-white'
                }`}
                title="ภาษาไทย (Thai)"
            >
                <span>🇹🇭</span> TH
            </button>
        </div>
    );
};
