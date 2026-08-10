import React, { useRef, useEffect } from 'react';
import { useGameStore } from '../store/useGameStore';

export const AudioPlayer: React.FC = () => {
    const { isAudioMuted } = useGameStore();
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.3;
            
            if (!isAudioMuted) {
                audioRef.current.play().catch(error => {
                    console.log("Audio play failed:", error);
                });
            } else {
                audioRef.current.pause();
            }
        }
    }, [isAudioMuted]);

    return (
        <audio 
            ref={audioRef} 
            src="/Backsound Mp3.mp3" 
            loop 
        />
    );
};
