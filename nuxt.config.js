/// //////////////////////////////////////////////
// Site config
// Domain where the website will be deployed
const productionUrl = 'MY-APP-DOMAIN.netlify.app'
const useLocalSupabase = false
const siteName = 'Ctw Nuxt Basis - Template'
const siteShortName = 'Nuxt Template'
const siteDescription = 'Ctw Nuxt base template with TailwindCss, content RSS, Supabase Auth, Composition API and many other goodies'
const twitterUser = '@ctwhome'
const isGithubPages = true // true if deployed to github pages
const githubRepositoryName = 'nuxt'
/// //////////////////////////////////////////////

const isDev = process.env.NODE_ENV === 'development'
export default {
  // Debug local server from outside
  server: {
    host: '0' // default: localhost
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Environment variables
  env: {
    supabaseUrl: isDev && useLocalSupabase ? 'http://localhost:8000' : process.env.VITE_SUPABASE_URL,
    supabaseKey: isDev && useLocalSupabase
    // super-secret-jwt-token-with-at-least-32-characters-long
      ? 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTYwMzk2ODgzNCwiZXhwIjoyNTUwNjUzNjM0LCJhdWQiOiIiLCJzdWIiOiIiLCJSb2xlIjoicG9zdGdyZXMifQ.magCcozTMKNrl76Tj2dsM7XTl_YH0v0ilajzAvIlw3U'
      : process.env.VITE_SUPABASE_KEY
  },

  // If deploying on github pages
  // http://<username>.github.io/<repository-name>.
  router: {
    // base: '/<repository-name>/'
    base: isDev ? '/' : isGithubPages ? `/${githubRepositoryName}/` : '/',
    linkActiveClass: 'active'
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-basis',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      // OG Social Media Cards
      { hid: 'description', name: 'description', content: siteDescription },
      { property: 'og:site_name', content: siteName },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: `https://${productionUrl}` },
      { hid: 'og:title', property: 'og:title', content: siteName },
      { hid: 'og:description', property: 'og:description', content: siteDescription },
      { hid: 'og:image', property: 'og:image', content: `https://${productionUrl}/OG-card.png` },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: twitterUser },
      { name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:url', name: 'twitter:url', content: `https://${productionUrl}` },
      { hid: 'twitter:title', name: 'twitter:title', content: siteName },
      { hid: 'twitter:description', name: 'twitter:description', content: siteDescription },
      { hid: 'twitter:image', name: 'twitter:image', content: `https://${productionUrl}/OG-card.png` }
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
    server: {
      fs: {
        strict: false
      }
    },
    optimizeDeps: {
      exclude: ['@supabase/supabase-js'], // Supabase
      include: ['cross-fetch', 'websocket'] // Supabase
    }
  },

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
    '@nuxt/content',
    '@nuxtjs/feed',
    [
      'nuxt-mq',
      {
        // use with $mq
        // Default breakpoint for SSR
        defaultBreakpoint: 'sm',
        breakpoints: {
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          '2xl': 1536
        }
      }
    ]
  ],

  generate: {
    fallback: true, // Be able to redirect webs to index when refreshing the page

    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()
      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: siteName,
      short_name: siteShortName,
      theme_color: '#333',
      description: siteDescription

    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Create a feed
  feed: [
    {
      path: '/feed.xml',
      async create (feed, args) {
        feed.options = {
          title: 'NL-RSE Blog and Events',
          link: isDev ? 'https://localhost:3000/feed.xml' : `https://${productionUrl}/feed.xml`,
          description: 'NL-RSE Blog feed!'
        }
        const { $content } = require('@nuxt/content')

        const posts = await $content('posts')
          .sortBy('date', 'desc')
          .fetch()

        // const events = await $content('events')
        //   .sortBy('date', 'desc')
        //   .fetch()

        const combinedPosts = [
          ...posts
          // ...events
        ]

        combinedPosts.forEach((post) => {
          feed.addItem({
            title: post.title,
            content: `
              <p>
                <img
                  alt="Cover image"
                  src="${post.image}"
                >
              </p>
              ${post.bodyHtml}
            `,
            id: post.title,
            link: post.path,
            img: post.image,
            date: new Date(post.date)
          })
        })
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
      data: ['some', 'info']
    }
  ]

}
