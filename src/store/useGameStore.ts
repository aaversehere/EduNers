import { create } from 'zustand';
import { PlayerAccount, PlayerAvatar, AppScreen, GameMode, SKPResult, Language } from '../types/game';
import { syncAccountToCloud, recordSKPSubmission } from '../services/dbService';

interface GameState {
    currentScreen: AppScreen;
    currentUser: PlayerAccount | null;
    savedAccounts: PlayerAccount[];
    selectedMode: GameMode;
    activeSKP: number | null;
    activeSubLevel: number | null;
    skpResults: SKPResult[];
    totalScore: number;
    language: Language;

    // Actions
    setScreen: (screen: AppScreen) => void;
    setLanguage: (lang: Language) => void;
    login: (nim: string, username: string) => void;
    signUp: (nim: string, username: string) => boolean;
    deleteAccount: (nim: string) => void;
    updateAvatar: (avatar: PlayerAvatar) => void;
    setGameMode: (mode: GameMode) => void;
    startSKP: (skpId: number, subLevelId: number) => void;
    submitSKPResult: (result: SKPResult) => void;
    resetGameProgress: () => void;
    logout: () => void;
    isAudioMuted: boolean;
    toggleAudio: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
    currentScreen: 'splash',
    currentUser: null,
    savedAccounts: JSON.parse(localStorage.getItem('eduners_accounts') || '[]'),
    selectedMode: 'practice',
    activeSKP: null,
    activeSubLevel: null,
    skpResults: [],
    totalScore: 0,
    language: (localStorage.getItem('eduners_lang') as Language) || 'id',
    isAudioMuted: true,

    setScreen: (screen) => set({ currentScreen: screen }),
    setLanguage: (lang) => {
        localStorage.setItem('eduners_lang', lang);
        set({ language: lang });
    },
    toggleAudio: () => set((state) => ({ isAudioMuted: !state.isAudioMuted })),

    login: (nim, username) => {
        const accounts = get().savedAccounts;
        let user = accounts.find((a) => a.nim === nim);

        if (!user) {
            user = { nim, username, highScore: 0, completedSKP: [], completedSubLevels: [] };
            const newAccounts = [...accounts, user];
            localStorage.setItem('eduners_accounts', JSON.stringify(newAccounts));
            set({ savedAccounts: newAccounts, currentUser: user });
        } else {
            if (!user.completedSubLevels) user.completedSubLevels = [];
            if (!user.completedSKP) user.completedSKP = [];
            set({ currentUser: user });
        }

        // Realtime Sync to Cloud
        syncAccountToCloud(user);

        set({ currentScreen: user.avatar ? 'menu' : 'locker' });
    },

    signUp: (nim, username) => {
        const accounts = get().savedAccounts;
        if (accounts.some((a) => a.nim === nim)) return false;

        const newUser: PlayerAccount = { nim, username, highScore: 0, completedSKP: [], completedSubLevels: [] };
        const newAccounts = [...accounts, newUser];
        localStorage.setItem('eduners_accounts', JSON.stringify(newAccounts));
        set({ savedAccounts: newAccounts, currentUser: newUser, currentScreen: 'locker' });

        // Realtime Sync to Cloud
        syncAccountToCloud(newUser);

        return true;
    },

    deleteAccount: (nim) => {
        const newAccounts = get().savedAccounts.filter((a) => a.nim !== nim);
        localStorage.setItem('eduners_accounts', JSON.stringify(newAccounts));
        set({ savedAccounts: newAccounts });
    },

    updateAvatar: (avatar) => {
        const { currentUser, savedAccounts } = get();
        if (!currentUser) return;

        const updatedUser = { ...currentUser, avatar };
        const newAccounts = savedAccounts.map((a) => (a.nim === currentUser.nim ? updatedUser : a));

        localStorage.setItem('eduners_accounts', JSON.stringify(newAccounts));
        set({ currentUser: updatedUser, savedAccounts: newAccounts, currentScreen: 'menu' });

        // Realtime Sync to Cloud
        syncAccountToCloud(updatedUser);
    },

    setGameMode: (mode) => set({ selectedMode: mode }),

    startSKP: (skpId, subLevelId) => set({ activeSKP: skpId, activeSubLevel: subLevelId, currentScreen: 'skp_game' }),

    submitSKPResult: (newResult) => {
        const { skpResults, currentUser, savedAccounts, selectedMode } = get();
        const filtered = skpResults.filter(
            (r) => !(r.skpId === newResult.skpId && r.subLevelId === newResult.subLevelId)
        );
        const updatedResults = [...filtered, newResult];
        const newTotalScore = updatedResults.reduce((acc, curr) => acc + curr.score, 0);

        if (currentUser) {
            let updatedCompletedSKP = currentUser.completedSKP || [];
            let updatedSubLevels = currentUser.completedSubLevels || [];

            if (newResult.isCorrect) {
                if (newResult.subLevelId) {
                    const subLevelStr = `${newResult.skpId}-${newResult.subLevelId}`;
                    const subLevelsSet = new Set([...updatedSubLevels, subLevelStr]);
                    updatedSubLevels = Array.from(subLevelsSet);

                    const skpIdStr = `${newResult.skpId}`;
                    const hasCompletedAllSubLevels = [1, 2].every((subId) => 
                        updatedSubLevels.includes(`${skpIdStr}-${subId}`)
                    );

                    if (hasCompletedAllSubLevels) {
                        const completedSKPSet = new Set([...updatedCompletedSKP, newResult.skpId]);
                        updatedCompletedSKP = Array.from(completedSKPSet);
                    }
                } else {
                    const completedSKPSet = new Set([...updatedCompletedSKP, newResult.skpId]);
                    updatedCompletedSKP = Array.from(completedSKPSet);
                }
            }

            const updatedUser = {
                ...currentUser,
                completedSubLevels: updatedSubLevels,
                completedSKP: updatedCompletedSKP,
                highScore: Math.max(currentUser.highScore, newTotalScore)
            };
            const newAccounts = savedAccounts.map((a) => (a.nim === currentUser.nim ? updatedUser : a));
            localStorage.setItem('eduners_accounts', JSON.stringify(newAccounts));
            set({ currentUser: updatedUser, savedAccounts: newAccounts });

            // Realtime Sync to Cloud: Sync user score & Record question submission event
            syncAccountToCloud(updatedUser);
            recordSKPSubmission(currentUser.nim, currentUser.username, newResult, selectedMode);
        }

        set({ skpResults: updatedResults, totalScore: newTotalScore });
    },

    resetGameProgress: () => set({ skpResults: [], totalScore: 0 }),

    logout: () => set({ currentUser: null, currentScreen: 'login', skpResults: [], totalScore: 0 })
}));