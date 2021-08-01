const isDev = process.env.NODE_ENV === 'development'
const useLocalSupabase = false
export default {
  // Debug local server from outside
  server: {
    host: '0' // default: localhost
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Environment variables
  publicRuntimeConfig: {
    supabaseUrl: isDev && useLocalSupabase
      ? 'http://localhost:8000'
      : process.env.NUXT_ENV_SUPABASE_URL,
    supabaseKey: isDev && useLocalSupabase
      // super-secret-jwt-token-with-at-least-32-characters-long
      ? 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTYwMzk2ODgzNCwiZXhwIjoyNTUwNjUzNjM0LCJhdWQiOiIiLCJzdWIiOiIiLCJSb2xlIjoicG9zdGdyZXMifQ.magCcozTMKNrl76Tj2dsM7XTl_YH0v0ilajzAvIlw3U'
      : process.env.NUXT_ENV_SUPABASE_KEY
  },

  // If deploying on github pages
  // http://<username>.github.io/<repository-name>.
  router: {
    // base: '/<repository-name>/'
    base: isDev ? '/' : '/nuxt/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-basis',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      'data-theme': 'light' // https://daisyui.com/docs/default-themes
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/supabase', ssr: false }
  ],
  vite: {
    optimizeDeps: {
      exclude: ['@supabase/supabase-js'], // Supabase
      include: ['cross-fetch', 'websocket'] // Supabase
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    'nuxt-vite'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
