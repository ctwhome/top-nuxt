import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.supabaseUrl || process.env.VITE_SUPABASE_URL
const SUPABASE_KEY = process.env.supabaseKey || process.env.VITE_SUPABASE_KEY

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
