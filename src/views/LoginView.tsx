import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Users, Trash2, LogIn, UserPlus, Home, ArrowLeft } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';
import { LanguageToggle } from '../components/ui/LanguageToggle';
import { UI_TRANSLATIONS } from '../data/translations';

interface GlossyButtonProps {
    onClick: () => void;
    label: string;
}

const GlossyButton: React.FC<GlossyButtonProps> = ({ onClick, label }) => {
    return (
        <button
            onClick={onClick}
            className="w-72 py-4 bg-gradient-to-b from-sky-400 via-sky-500 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-white font-black text-xl rounded-full border-4 border-sky-100 shadow-[0_8px_16px_rgba(30,58,138,0.6)] relative overflow-hidden transition-all duration-200 active:scale-95 active:shadow-[0_4px_8px_rgba(30,58,138,0.6)] tracking-wide flex items-center justify-center select-none cursor-pointer"
        >
            {/* Top gloss highlight */}
            <span className="absolute top-1 left-4 right-4 h-3 bg-gradient-to-b from-white/60 to-transparent rounded-full pointer-events-none" />
            {/* Bottom shadow element */}
            <span className="absolute bottom-1 left-4 right-4 h-1 bg-black/10 rounded-full pointer-events-none" />
            <span className="z-10 relative drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">{label}</span>
        </button>
    );
};

interface GlossySubmitButtonProps {
    type?: 'submit' | 'button';
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}

const GlossySubmitButton: React.FC<GlossySubmitButtonProps> = ({ type = 'submit', label, icon, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="w-full py-4 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-white font-black text-lg rounded-full border-4 border-amber-100 shadow-[0_6px_0_#b45309,0_10px_20px_rgba(0,0,0,0.35)] relative overflow-hidden transition-all duration-150 active:translate-y-1 active:shadow-[0_2px_0_#b45309,0_4px_10px_rgba(0,0,0,0.3)] uppercase tracking-wider flex items-center justify-center gap-2 select-none cursor-pointer"
        >
            <span className="absolute top-1 left-4 right-4 h-3 bg-gradient-to-b from-white/60 to-transparent rounded-full pointer-events-none" />
            <span className="absolute bottom-1 left-4 right-4 h-1 bg-black/10 rounded-full pointer-events-none" />
            <span className="z-10 relative drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] flex items-center justify-center gap-2">
                {icon}
                {label}
            </span>
        </button>
    );
};

export const LoginView: React.FC = () => {
    const [nim, setNim] = useState('');
    const [username, setUsername] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showAccountList, setShowAccountList] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const { login, signUp, savedAccounts, deleteAccount, language } = useGameStore();
    const t = UI_TRANSLATIONS[language];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!nim || !username) {
            setErrorMsg(t.nimUsernameRequired);
            return;
        }
        if (isSignUp) {
            const success = signUp(nim, username);
            if (!success) setErrorMsg(t.nimAlreadyRegistered);
        } else {
            login(nim, username);
        }
    };

    return (
        <div 
            style={{ backgroundImage: 'url("/assets/nurse_reception_bg.png")' }}
            className="h-full w-full bg-cover bg-center flex flex-col justify-between relative p-6 overflow-hidden select-none"
        >
            {/* Background overlay for subtle contrast */}
            <div className="absolute inset-0 bg-slate-950/15 pointer-events-none z-0" />

            {/* Top Bar with Home Button and Language Toggle */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20 pointer-events-auto">
                {!showForm ? (
                    <button 
                        onClick={() => {
                            setNim('');
                            setUsername('');
                            setErrorMsg('');
                            setIsSignUp(false);
                            setShowForm(false);
                        }} 
                        className="p-2 bg-white/95 rounded-2xl border-4 border-slate-200 shadow-lg text-slate-700 hover:bg-white hover:text-sky-600 active:scale-90 transition-all flex items-center justify-center w-12 h-12 cursor-pointer"
                    >
                        <Home className="w-7 h-7 stroke-[3]" />
                    </button>
                ) : <div />}
                <LanguageToggle />
            </div>

            {/* Form card or landing actions */}
            <div className="flex-1 flex flex-col items-center justify-end w-full z-10">
                <AnimatePresence mode="wait">
                    {!showForm ? (
                        <motion.div 
                            key="landing"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex flex-col items-center gap-5 mb-14 w-full"
                        >
                            <GlossyButton label={t.loginPortal} onClick={() => { setIsSignUp(false); setShowForm(true); }} />
                            <GlossyButton label={t.signUpAccount} onClick={() => { setIsSignUp(true); setShowForm(true); }} />
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="form"
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="flex-1 flex items-center justify-center w-full p-2"
                        >
                            <div className="bg-slate-900/95 border-[6px] border-sky-300 rounded-[2.5rem] p-6 shadow-[0_12px_0_#1e3a8a,0_20px_30px_rgba(0,0,0,0.45)] relative w-full max-w-md">
                                {/* Back arrow button */}
                                <button
                                    type="button"
                                    onClick={() => { setShowForm(false); setErrorMsg(''); }}
                                    className="absolute -top-5 -left-5 p-2 bg-gradient-to-b from-rose-400 via-rose-500 to-rose-600 text-white rounded-full border-4 border-rose-100 shadow-[0_6px_0_#be123c] hover:from-rose-300 hover:to-rose-500 active:translate-y-0.5 active:shadow-[0_2px_0_#be123c] transition-all z-20 flex items-center justify-center w-12 h-12 select-none cursor-pointer"
                                >
                                    <ArrowLeft className="w-6 h-6 stroke-[3.5]" />
                                </button>

                                <h2 className="text-xl font-black text-white mb-5 flex items-center justify-between border-b-4 border-slate-800 pb-3">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-sky-200 to-sky-400 drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)] font-black text-2xl tracking-wide">
                                        {isSignUp ? t.signUpAccount : t.loginPortal}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => setShowAccountList(true)}
                                        className="text-xs bg-gradient-to-b from-teal-400 to-teal-600 hover:from-teal-300 hover:to-teal-500 text-white px-3 py-2 rounded-full border-2 border-teal-100 shadow-[0_4px_0_#0f766e] active:translate-y-0.5 active:shadow-[0_2px_0_#0f766e] flex items-center gap-1 transition-all font-black select-none cursor-pointer"
                                    >
                                        <Users className="w-3.5 h-3.5" /> ({savedAccounts.length}) {t.savedAccounts.split(' ')[0]}
                                    </button>
                                </h2>

                                {errorMsg && (
                                    <div className="mb-4 p-3 bg-rose-950/90 border-4 border-rose-500/50 rounded-2xl text-rose-200 text-xs flex items-center gap-2">
                                        <ShieldAlert className="w-4 h-4 shrink-0 text-rose-400" />
                                        <span className="font-bold">{errorMsg}</span>
                                    </div>
                                )}

                                 <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-black text-amber-300 uppercase tracking-widest mb-2 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">{t.nimLabel}</label>
                                        <input
                                            type="text"
                                            value={nim}
                                            onChange={(e) => setNim(e.target.value.slice(0, 6))}
                                            maxLength={6}
                                            placeholder={t.nimPlaceholder}
                                            className="w-full px-5 py-3.5 bg-white border-4 border-slate-300 rounded-full text-black placeholder-slate-400 text-base focus:outline-none focus:border-sky-400 transition-all font-black shadow-inner"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-black text-amber-300 uppercase tracking-widest mb-2 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">{t.usernameLabel}</label>
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder={t.usernamePlaceholder}
                                            className="w-full px-5 py-3.5 bg-white border-4 border-slate-300 rounded-full text-black placeholder-slate-400 text-base focus:outline-none focus:border-sky-400 transition-all font-black shadow-inner"
                                        />
                                    </div>

                                    <div className="pt-2">
                                        <GlossySubmitButton 
                                            label={isSignUp ? t.signUpBtn : t.loginBtn} 
                                            icon={isSignUp ? <UserPlus className="w-5 h-5 stroke-[3]" /> : <LogIn className="w-5 h-5 stroke-[3]" />}
                                        />
                                    </div>
                                </form>

                                <div className="mt-5 text-center">
                                    <button
                                        type="button"
                                        onClick={() => { setIsSignUp(!isSignUp); setErrorMsg(''); }}
                                        className="text-xs text-amber-300 hover:text-amber-200 hover:underline font-black transition-all"
                                    >
                                        {isSignUp ? t.alreadyHaveAccount : t.newNurseSignUp}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Footer Info */}
            <div className="text-center text-[10px] text-slate-350 font-bold drop-shadow-[0_1px_2.5px_rgba(0,0,0,0.9)] z-10 pt-2">
                {t.footerInfo}
            </div>

            {/* Modal Daftar Akun Tersimpan */}
            <AnimatePresence>
                {showAccountList && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }} 
                            animate={{ scale: 1, opacity: 1 }} 
                            exit={{ scale: 0.8, opacity: 0 }} 
                            className="w-full max-w-md bg-slate-900 border-[6px] border-amber-300 rounded-[2.5rem] p-6 shadow-[0_12px_0_#d97706,0_20px_30px_rgba(0,0,0,0.5)] max-h-[80vh] flex flex-col relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setShowAccountList(false)}
                                className="absolute -top-5 -right-5 p-2 bg-gradient-to-b from-rose-400 via-rose-500 to-rose-600 text-white rounded-full border-4 border-rose-100 shadow-[0_6px_0_#be123c] hover:from-rose-300 hover:to-rose-500 active:translate-y-0.5 active:shadow-[0_2px_0_#be123c] transition-all z-20 flex items-center justify-center w-12 h-12 select-none cursor-pointer"
                            >
                                <span className="font-extrabold text-xl leading-none">X</span>
                            </button>

                            <h3 className="text-xl font-black text-amber-300 border-b-4 border-slate-800 pb-3 mb-4 flex items-center gap-2 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">
                                <Users className="w-6 h-6 stroke-[3]" />
                                <span>{t.savedAccounts}</span>
                            </h3>

                            <div className="space-y-3 overflow-y-auto flex-1 pr-1">
                                {savedAccounts.length === 0 ? (
                                    <p className="text-sm font-bold text-slate-400 text-center py-8">{t.noAccountsYet}</p>
                                ) : (
                                    savedAccounts.map((acc) => (
                                        <div key={acc.nim} className="flex items-center justify-between p-3.5 bg-slate-955/60 border-4 border-slate-800 rounded-2xl">
                                            <div>
                                                <p className="text-sm font-black text-sky-300">{acc.username}</p>
                                                <p className="text-xs font-bold text-slate-400 mt-0.5">NIM: {acc.nim} • {t.score}: {acc.highScore}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => { login(acc.nim, acc.username); setShowAccountList(false); }}
                                                    className="px-4 py-2 bg-gradient-to-b from-sky-400 to-blue-500 text-white text-xs font-black rounded-full border-2 border-sky-100 shadow-[0_3px_0_#1d4ed8] active:translate-y-0.5 active:shadow-[0_1px_0_#1d4ed8] transition-all cursor-pointer"
                                                >
                                                    {t.selectAccount}
                                                </button>
                                                <button
                                                    onClick={() => deleteAccount(acc.nim)}
                                                    className="p-2 bg-gradient-to-b from-rose-500 to-red-600 text-white rounded-full border-2 border-rose-100 shadow-[0_3px_0_#be123c] active:translate-y-0.5 active:shadow-[0_1px_0_#be123c] transition-all cursor-pointer"
                                                    title={language === 'id' ? 'Hapus Akun' : (language === 'th' ? 'ลบบัญชี' : 'Delete Account')}
                                                >
                                                    <Trash2 className="w-4 h-4 stroke-[3]" />
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};