import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// Add error handling to ensure that the variables are defined
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase URL or Key. Please check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
