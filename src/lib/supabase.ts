/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';

const env = (import.meta as any).env || {};

// Supabase URL & Anon Key configured for project
const supabaseUrl = env.VITE_SUPABASE_URL || 'https://duyjwnsregztlansfaew.supabase.co';
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1eWp3bnNyZWd6dGxhbnNmYWV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMTAwNzcsImV4cCI6MjEwMTU4NjA3N30.Pr8WLKhhiKfKn6e6JgH0zVWBhQVxbYJj6EC5ygH6lok';

// Initialize Supabase Client singleton
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true
    }
});

export default supabase;
