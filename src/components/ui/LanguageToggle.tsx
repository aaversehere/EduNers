import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useGameStore } from '../../store/useGameStore';

export const LanguageToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
    const { language, setLanguage, isAudioMuted, toggleAudio } = useGameStore();

    return (
        <div className={`inline-flex items-center gap-1.5 ${className}`}>
            {/* Audio Toggle */}
            <button
                type="button"
                onClick={toggleAudio}
                className="bg-slate-900/90 border-2 border-amber-300/80 rounded-full p-1.5 shadow-md backdrop-blur-md text-amber-300 hover:text-white transition-all cursor-pointer flex items-center justify-center"
                title={isAudioMuted ? "Putar Musik" : "Matikan Musik"}
            >
                {isAudioMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            {/* Language Toggle */}
            <div className="inline-flex items-center bg-slate-900/90 border-2 border-amber-300/80 rounded-full p-1 shadow-md backdrop-blur-md select-none">
                <button
                    type="button"
                    onClick={() => setLanguage('id')}
                    className={`px-2 py-0.5 text-[10px] font-black rounded-full transition-all cursor-pointer ${
                        language === 'id'
                            ? 'bg-gradient-to-b from-amber-400 to-amber-600 text-slate-950 shadow-[0_2px_0_#b45309]'
                            : 'text-slate-300 hover:text-white'
                    }`}
                    title="Bahasa Indonesia"
                >
                    ID
                </button>
                <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-0.5 text-[10px] font-black rounded-full transition-all cursor-pointer ${
                        language === 'en'
                            ? 'bg-gradient-to-b from-amber-400 to-amber-600 text-slate-950 shadow-[0_2px_0_#b45309]'
                            : 'text-slate-300 hover:text-white'
                    }`}
                    title="English"
                >
                    EN
                </button>
                <button
                    type="button"
                    onClick={() => setLanguage('th')}
                    className={`px-2 py-0.5 text-[10px] font-black rounded-full transition-all cursor-pointer ${
                        language === 'th'
                            ? 'bg-gradient-to-b from-amber-400 to-amber-600 text-slate-950 shadow-[0_2px_0_#b45309]'
                            : 'text-slate-300 hover:text-white'
                    }`}
                    title="ภาษาไทย (Thai)"
                >
                    TH
                </button>
            </div>
        </div>
    );
};
