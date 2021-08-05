import tailwindTypography from '@tailwindcss/typography'
import daisyui from 'daisyui'

export default {
  darkMode: false, // or 'media' or 'class'
  // mode: 'jit', // NOT WORKING WITH VITE issue link -> https://github.com/
  // nuxt/vite/issues/159
  // see issue https://github.com/nuxt/vite/issues/159
  plugins: [
    tailwindTypography,
    daisyui
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'content/**/*.md',
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}'
    ]
  }
}
