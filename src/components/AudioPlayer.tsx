import React, { useRef, useEffect } from 'react';
import { useGameStore } from '../store/useGameStore';

export const AudioPlayer: React.FC = () => {
    const { isAudioMuted } = useGameStore();
    const audioRef = useRef<HTMLAudioElement>(null);

    // Effect for unlocking audio on first interaction (required for mobile/iOS Safari)
    useEffect(() => {
        const handleFirstInteraction = () => {
            if (audioRef.current) {
                // Prevent a micro-stutter of sound if we unlock while it's supposed to be muted
                const wasMuted = useGameStore.getState().isAudioMuted;
                if (wasMuted) {
                    audioRef.current.muted = true;
                }

                audioRef.current.play().then(() => {
                    // Mute again if store says it should be muted
                    if (useGameStore.getState().isAudioMuted) {
                        audioRef.current?.pause();
                    }
                    // Restore HTML level mute state
                    if (audioRef.current) {
                        audioRef.current.muted = false;
                    }
                }).catch(e => console.log("Audio unlock failed:", e));
            }
            // Only need to run this once
            document.removeEventListener('click', handleFirstInteraction, true);
            document.removeEventListener('touchstart', handleFirstInteraction, true);
        };

        // Use capture phase to ensure it runs even if inner elements stop propagation
        document.addEventListener('click', handleFirstInteraction, true);
        document.addEventListener('touchstart', handleFirstInteraction, { capture: true, passive: true });

        return () => {
            document.removeEventListener('click', handleFirstInteraction, true);
            document.removeEventListener('touchstart', handleFirstInteraction, true);
        };
    }, []);

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
            src="/Backsound%20Mp3.mp3" 
            loop 
        />
    );
};
