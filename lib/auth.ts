import { createClient } from '@supabase/supabase-js';
import { Auth } from 'supabase-auth-react';

const supabaseUrl = 'your_supabase_url';
const supabaseAnonKey = 'your_supabase_anon_key';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const signIn = async (email, password) => {
    const { user, session, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return { user, session };
};

export const signUp = async (email, password) => {
    const { user, session, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return { user, session };
};

export const signOut = async () => {
    await supabase.auth.signOut();
};

export const enableMFA = async () => {
    // Implement MFA logic here
};

export const verifyMFA = async (otp) => {
    // Implement OTP verification logic here
};

export const refreshSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    return data.session;
};