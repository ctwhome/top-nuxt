import tailwindTypography from '@tailwindcss/typography'

module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  plugins: [
    tailwindTypography,
    require('daisyui')
  ]
}
