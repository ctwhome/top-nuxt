import { createClient } from '@supabase/supabase-js'
// import config from '~/nuxt.config'

// const SUPABASE_URL = config.publicRuntimeConfig.supabaseUrl
// const SUPABASE_KEY = config.publicRuntimeConfig.supabaseKey
const SUPABASE_URL = process.env.VITE_SUPABASE_URL
const SUPABASE_KEY = process.env.VITE_SUPABASE_KEY

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
