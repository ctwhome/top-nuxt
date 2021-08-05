import { createClient } from '@supabase/supabase-js'
// import config from '~/nuxt.config'

// const SUPABASE_URL = config.publicRuntimeConfig.supabaseUrl
// const SUPABASE_KEY = config.publicRuntimeConfig.supabaseKey
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://uduilifzyiujjrzlwyby.supabase.co'
const SUPABASE_KEY = process.env.VITE_SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTIzNzkyMywiZXhwIjoxOTMwODEzOTIzfQ.morp5e9629xzWqRwcy1d6J3FbGbQKSwOyOAoK1URv1I'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
