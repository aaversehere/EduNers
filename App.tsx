import React from 'react';
import { useGameStore } from './store/useGameStore';
import { LoginView } from './views/LoginView';
import { LockerRoomView } from './views/LockerRoomView';
import { MainMenuView } from './views/MainMenuView';
import { GameplayView } from './views/GameplayView';
import { WordSearchView } from './views/WordSearchView';
import { ResultView } from './views/ResultView';

export const App: React.FC = () => {
    const { currentScreen } = useGameStore();

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
        <div className="min-h-screen bg-slate-950 text-slate-100 flex justify-center selection:bg-cyan-500 selection:text-slate-950 font-sans">
            {/* Mobile-First Frame Emulator (max-w-md mx-auto) */}
            <div className="w-full max-w-md bg-slate-900 shadow-[0_0_50px_rgba(8,112,184,0.3)] min-h-screen relative overflow-hidden flex flex-col justify-between">
                {renderScreen()}
            </div>
        </div>
    );
};

export default App;