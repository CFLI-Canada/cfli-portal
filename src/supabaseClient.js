import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase URL or Anon Key is missing. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are configured in your Vercel Environment Variables.'
  );
}

// Fallbacks prevent build crashes if environment variables are still propagating
export const supabase = createClient(
  supabaseUrl || 'https://ifitoxccgoeofrbtzutm.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);
