import tailwindTypography from '@tailwindcss/typography'
import daisyui from 'daisyui'

export default {
  darkMode: false, // or 'media' or 'class'
  // mode: 'jit', // NOT WORKING WITH VITE
  // see issue https://github.com/nuxt/vite/issues/159
  plugins: [
    tailwindTypography,
    daisyui
  ],
  purge: {
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}'
    ]
  }
}
