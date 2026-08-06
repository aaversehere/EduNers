import { supabase } from '../lib/supabase';
import { PlayerAccount, SKPResult } from '../types/game';

export interface SKPSubmissionRecord {
    nim: string;
    username: string;
    skpId: number;
    subLevelId?: number;
    isCorrect: boolean;
    score: number;
    stars: number;
    mode: string;
    createdAt?: string;
}

/**
 * Realtime sync user profile to Supabase Database ('nurses' table)
 */
export const syncAccountToCloud = async (account: PlayerAccount): Promise<boolean> => {
    try {
        if (!account || !account.nim) return false;
        
        const { error } = await supabase
            .from('nurses')
            .upsert({
                nim: account.nim,
                username: account.username,
                avatar: account.avatar || null,
                high_score: account.highScore || 0,
                completed_skp: account.completedSKP || [],
                completed_sublevels: account.completedSubLevels || [],
                updated_at: new Date().toISOString()
            }, { onConflict: 'nim' });

        if (error) {
            console.warn('Supabase sync warning:', error.message);
            return false;
        }
        return true;
    } catch (error) {
        console.warn('Supabase sync fallback (offline/local):', error);
        return false;
    }
};

/**
 * Record every answered SKP question / exam scenario attempt live in Supabase ('skp_submissions' table)
 */
export const recordSKPSubmission = async (
    nim: string, 
    username: string, 
    result: SKPResult, 
    mode: string
): Promise<boolean> => {
    try {
        const { error } = await supabase
            .from('skp_submissions')
            .insert([{
                nim,
                username,
                skp_id: result.skpId,
                sub_level_id: result.subLevelId || 1,
                is_correct: result.isCorrect,
                score: result.score,
                stars: result.stars,
                mode,
                created_at: new Date().toISOString()
            }]);

        if (error) {
            console.warn('Supabase submission record warning:', error.message);
            return false;
        }
        return true;
    } catch (error) {
        console.warn('Supabase submission recording fallback:', error);
        return false;
    }
};

/**
 * Record IPSG Word Search Mini-Game activity results in Supabase ('game_results' table)
 */
export const recordGameSubmission = async (
    nim: string,
    username: string,
    foundWords: string[],
    totalScore: number,
    stars: number,
    timeLeft: number
): Promise<boolean> => {
    try {
        const { error } = await supabase
            .from('game_results')
            .insert([{
                nim,
                username,
                found_words: foundWords,
                total_score: totalScore,
                stars,
                time_left: timeLeft,
                created_at: new Date().toISOString()
            }]);

        if (error) {
            console.warn('Supabase game submission warning:', error.message);
            return false;
        }
        return true;
    } catch (error) {
        console.warn('Supabase game submission fallback:', error);
        return false;
    }
};

/**
 * Fetch and listen to real-time accounts across all active nurses in Supabase
 */
export const listenToRealtimeAccounts = (onUpdate: (accounts: PlayerAccount[]) => void) => {
    const fetchAccounts = async () => {
        const { data, error } = await supabase
            .from('nurses')
            .select('*')
            .order('high_score', { ascending: false })
            .limit(50);

        if (!error && data) {
            onUpdate(data.map((d) => ({
                nim: d.nim,
                username: d.username,
                avatar: d.avatar || undefined,
                highScore: d.high_score || 0,
                completedSKP: d.completed_skp || [],
                completedSubLevels: d.completed_sublevels || []
            })));
        }
    };

    fetchAccounts();

    try {
        const channel = supabase
            .channel('nurses-realtime-changes')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'nurses' }, () => {
                fetchAccounts();
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    } catch (error) {
        console.warn('Supabase realtime listener error:', error);
        return () => {};
    }
};
