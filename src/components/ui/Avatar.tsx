import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { PlayerAvatar } from '../../types/game';

interface AvatarProps {
    avatar?: PlayerAvatar;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    showBadge?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({ avatar, size = 'md', showBadge = false }) => {
    const sizeClasses = {
        sm: 'w-12 h-12',
        md: 'w-20 h-20',
        lg: 'w-32 h-32',
        xl: 'w-48 h-48',
    };

    const isFemale = avatar?.gender === 'female';
    const isHijab = isFemale && avatar?.style === 'hijab';
    const hasGlasses = !isFemale && avatar?.style === 'glasses';

    return (
        <div className={`relative flex items-center justify-center rounded-full border-4 border-amber-400 bg-gradient-to-b from-slate-900 to-slate-950 shadow-lg ${sizeClasses[size]} overflow-hidden`}>
            {/* SVG Illustration Canvas */}
            <svg
                viewBox="0 0 100 100"
                className="w-full h-full select-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Background Glow */}
                <circle cx="50" cy="50" r="46" fill="url(#bg-grad)" />

                {/* Hospital/Clinic backdrop elements (subtle vector details) */}
                <line x1="10" y1="58" x2="90" y2="58" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1" />
                <path d="M50 22 V38 M42 30 H58" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="4" strokeLinecap="round" />
                <path d="M15 48 H32 L36 38 L40 54 L44 42 L48 48 H85" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                {/* Base Shadow under neck */}
                <ellipse cx="50" cy="72" rx="14" ry="5" fill="black" fillOpacity="0.2" />

                {/* Body/Uniform (Teal for Female, Blue for Male) */}
                <path
                    d="M26 88 C26 74, 74 74, 74 88"
                    fill={isFemale ? "#0d9488" : "#2563eb"}
                    stroke="#0f172a"
                    strokeWidth="2.5"
                />
                
                {/* Scrub V-Neck Collar */}
                <path d="M42 74 L50 84 L58 74 Z" fill="#ffe4e6" stroke="#0f172a" strokeWidth="1.5" /> {/* Neck skin area */}
                <path d="M38 74 L50 86 M62 74 L50 86" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />

                {/* Stethoscope */}
                <path d="M34 74 C34 82, 66 82, 66 74" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                <circle cx="50" cy="82" r="3" fill="#475569" stroke="#1e293b" strokeWidth="1.5" />

                {/* Neck */}
                <rect x="44" y="64" width="12" height="10" rx="2" fill="#ffedd5" stroke="#0f172a" strokeWidth="2.5" />

                {/* Head Base (Face) */}
                <circle cx="50" cy="48" r="18" fill="#ffedd5" stroke="#0f172a" strokeWidth="2.5" />

                {/* Face details: Cute Anime Eyes & Smile & Blush */}
                {!isHijab && (
                    <>
                        {/* Left Eye */}
                        <ellipse cx="44" cy="46" rx="2.5" ry="3.5" fill="#0f172a" />
                        <circle cx="43" cy="44.5" r="0.8" fill="#ffffff" />
                        
                        {/* Right Eye */}
                        <ellipse cx="56" cy="46" rx="2.5" ry="3.5" fill="#0f172a" />
                        <circle cx="55" cy="44.5" r="0.8" fill="#ffffff" />
                        
                        {/* Cute Smile */}
                        <path d="M46 54 Q50 57 54 54" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" fill="none" />
                        
                        {/* Blush Cheeks */}
                        <ellipse cx="39" cy="50" rx="3.2" ry="1.8" fill="#f43f5e" fillOpacity="0.45" />
                        <ellipse cx="61" cy="50" rx="3.2" ry="1.8" fill="#f43f5e" fillOpacity="0.45" />
                    </>
                )}

                {/* GENDER SPECIFIC VISUALS */}
                
                {/* 1. MALE HAIR */}
                {!isFemale && (
                    <>
                        {/* Spiky Male Hair */}
                        <path
                            d="M32 40 C30 26, 42 18, 50 20 C58 18, 70 26, 68 40 C70 38, 66 32, 58 31 C52 30, 48 30, 42 31 C34 32, 30 38, 32 40 Z"
                            fill="#1e293b"
                            stroke="#0f172a"
                            strokeWidth="2.5"
                        />
                        {/* Sideburns */}
                        <path d="M32 40 L34 45 L36 43 Z" fill="#1e293b" />
                        <path d="M68 40 L66 45 L64 43 Z" fill="#1e293b" />
                        {/* Hair Highlight */}
                        <path d="M42 24 C45 22, 47 22, 49 23" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
                    </>
                )}

                {/* 2. MALE GLASSES */}
                {hasGlasses && (
                    <>
                        {/* Glasses frame */}
                        <circle cx="43" cy="46" r="6" stroke="#0f172a" strokeWidth="2.5" fill="none" />
                        <circle cx="57" cy="46" r="6" stroke="#0f172a" strokeWidth="2.5" fill="none" />
                        <line x1="49" y1="46" x2="51" y2="46" stroke="#0f172a" strokeWidth="2.5" />
                        <line x1="37" y1="46" x2="39" y2="46" stroke="#0f172a" strokeWidth="2" />
                        <line x1="61" y1="46" x2="63" y2="46" stroke="#0f172a" strokeWidth="2" />
                    </>
                )}

                {/* 3. FEMALE NON-HIJAB HAIR & CAP */}
                {isFemale && !isHijab && (
                    <>
                        {/* Hair Sides */}
                        <path
                            d="M32 42 C30 32, 36 25, 50 26 C64 25, 70 32, 68 42 C70 48, 68 55, 68 59 C66 54, 66 44, 64 42 C62 40, 58 41, 50 41 C42 41, 38 40, 36 42 C34 44, 34 54, 32 59 C32 55, 30 48, 32 42 Z"
                            fill="#78350f"
                            stroke="#0f172a"
                            strokeWidth="2.5"
                        />
                        {/* Hair Highlight */}
                        <path d="M40 30 C43 28, 46 28, 48 29" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" />
                        {/* Nurse Cap */}
                        <path
                            d="M38 26 L62 26 L58 15 L42 15 Z"
                            fill="#ffffff"
                            stroke="#0f172a"
                            strokeWidth="2"
                            strokeLinejoin="round"
                        />
                        {/* Red Cross on Cap */}
                        <path d="M50 17 L50 23 M47 20 L53 20" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
                    </>
                )}

                {/* 4. FEMALE HIJAB */}
                {isHijab && (
                    <>
                        {/* Outer Hijab Wrap */}
                        <path
                            d="M30 45 C30 22, 70 22, 70 45 C70 63, 66 74, 61 80 C55 84, 45 84, 39 80 C34 74, 30 63, 30 45 Z"
                            fill="#f1f5f9"
                            stroke="#0f172a"
                            strokeWidth="2.5"
                        />
                        {/* Inner Hijab Cap/Band */}
                        <path
                            d="M39 33 C42 27, 58 27, 61 33 Z"
                            fill="#0d9488"
                            stroke="#0f172a"
                            strokeWidth="1.5"
                        />
                        {/* Face Cutout to show skin */}
                        <path
                            d="M35 45 C35 34, 65 34, 65 45 C65 56, 61 64, 50 64 C39 64, 35 56, 35 45 Z"
                            fill="#ffedd5"
                            stroke="#0f172a"
                            strokeWidth="2.5"
                        />
                        {/* Re-render face details over the hijab cutout with anime style */}
                        {/* Left Eye */}
                        <ellipse cx="44" cy="44" rx="2.5" ry="3.5" fill="#0f172a" />
                        <circle cx="43" cy="42.5" r="0.8" fill="#ffffff" />
                        
                        {/* Right Eye */}
                        <ellipse cx="56" cy="44" rx="2.5" ry="3.5" fill="#0f172a" />
                        <circle cx="55" cy="42.5" r="0.8" fill="#ffffff" />
                        
                        {/* Smile */}
                        <path d="M46 52 Q50 55 54 52" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" fill="none" />
                        
                        {/* Blush Cheeks */}
                        <ellipse cx="39" cy="48" rx="3.2" ry="1.8" fill="#f43f5e" fillOpacity="0.45" />
                        <ellipse cx="61" cy="48" rx="3.2" ry="1.8" fill="#f43f5e" fillOpacity="0.45" />
                    </>
                )}

                {/* Background Gradient Defs */}
                <defs>
                    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0891b2" />
                        <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Badge overlay */}
            {showBadge && (
                <div className="absolute bottom-1 right-1 bg-amber-400 text-slate-950 p-1 rounded-full shadow-md border border-white z-20">
                    <ShieldCheck className="w-4 h-4" />
                </div>
            )}
        </div>
    );
};