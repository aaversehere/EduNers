import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, ChevronRight } from 'lucide-react';
import { Avatar } from './Avatar';
import { PlayerAvatar } from '../../types/game';
import { useGameStore } from '../../store/useGameStore';

interface DialogBoxProps {
    speakerName: string;
    text: string;
    avatar?: PlayerAvatar;
    onComplete?: () => void;
}

export const DialogBox: React.FC<DialogBoxProps> = ({ speakerName, text, avatar, onComplete }) => {
    const { language } = useGameStore();
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        setDisplayedText('');
        setIsTyping(true);
        let currentIndex = 0;

        const timer = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText((prev) => prev + text.charAt(currentIndex));
                currentIndex++;
            } else {
                setIsTyping(false);
                clearInterval(timer);
            }
        }, 25); // Kecepatan mengetik 25ms/karakter

        return () => clearInterval(timer);
    }, [text]);

    const handleFastForward = () => {
        if (isTyping) {
            setDisplayedText(text);
            setIsTyping(false);
        } else if (onComplete) {
            onComplete();
        }
    };

    const getIndicatorText = () => {
        if (isTyping) {
            if (language === 'th') return 'คลิกเพื่อเร่งความเร็ว';
            if (language === 'en') return 'Click to speed up';
            return 'Klik untuk percepat';
        } else {
            if (language === 'th') return 'คลิกเพื่อดำเนินการต่อ';
            if (language === 'en') return 'Click to continue';
            return 'Klik untuk lanjut';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-slate-900/95 border-2 border-cyan-400 rounded-2xl p-4 shadow-2xl relative cursor-pointer select-none backdrop-blur-md"
            onClick={handleFastForward}
        >
            {/* Header Speaker & Avatar Badge */}
            <div className="flex items-center gap-3 mb-2 -mt-8">
                <div className="border-2 border-amber-400 rounded-full bg-slate-800 shadow-md">
                    <Avatar avatar={avatar || { gender: 'female', style: 'hijab' }} size="sm" />
                </div>
                <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md flex items-center gap-1 border border-cyan-300">
                    <Volume2 className="w-3 h-3 animate-pulse text-amber-300" />
                    {speakerName}
                </div>
            </div>

            {/* Dialog Text Area */}
            <div className="min-h-[60px] text-slate-100 text-sm leading-relaxed font-medium pl-2">
                {displayedText}
                {isTyping && <span className="inline-block w-2 h-4 bg-amber-400 ml-1 animate-ping" />}
            </div>

            {/* Next Indicator */}
            <div className="flex justify-end items-center mt-2 text-cyan-400 text-xs font-bold gap-1">
                <span>{getIndicatorText()}</span>
                <ChevronRight className={`w-4 h-4 ${!isTyping ? 'animate-bounce' : ''}`} />
            </div>
        </motion.div>
    );
};