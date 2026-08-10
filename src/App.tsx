import React from 'react';
import { useGameStore } from './store/useGameStore';
import { LoginView } from './views/LoginView';
import { LockerRoomView } from './views/LockerRoomView';
import { MainMenuView } from './views/MainMenuView';
import { GameplayView } from './views/GameplayView';
import { WordSearchView } from './views/WordSearchView';
import { ResultView } from './views/ResultView';
import { AudioPlayer } from './components/AudioPlayer';
import { playClickSound } from './lib/audio';

export const App: React.FC = () => {
    const { currentScreen } = useGameStore();

    React.useEffect(() => {
        const handleGlobalClick = (e: MouseEvent) => {
            // Jika audio global dimute, jangan putar efek suara
            if (useGameStore.getState().isAudioMuted) return;

            // Cari tahu apakah elemen yang diklik adalah button atau memiliki kursor pointer
            const target = e.target as HTMLElement;
            const isButton = target.closest('button') !== null || target.closest('.cursor-pointer') !== null;
            
            if (isButton) {
                playClickSound();
            }
        };

        document.addEventListener('click', handleGlobalClick);
        return () => {
            document.removeEventListener('click', handleGlobalClick);
        };
    }, []);

    const renderScreen = () => {
        switch (currentScreen) {
            case 'login':
            case 'signup':
            case 'splash':
                return <LoginView />;
            case 'locker':
                return <LockerRoomView />;
            case 'menu':
                return <MainMenuView />;
            case 'skp_game':
                return <GameplayView />;
            case 'word_search':
                return <WordSearchView />;
            case 'result':
                return <ResultView />;
            default:
                return <LoginView />;
        }
    };

    return (
        <div className="w-screen h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950 font-sans overflow-hidden relative">
            {/* Main Application Container - Full screen on all devices */}
            <div className="w-full h-full relative overflow-hidden flex flex-col justify-between transition-all duration-300">
                {renderScreen()}
            </div>
            <AudioPlayer />
        </div>
    );
};

export default App;
