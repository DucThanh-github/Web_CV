/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],  theme: {
    extend: {
      colors: {
        'p-color': '#71717A',
        'dark-background-color': '#18181B',
        'dark-icon-color':'#252529',
        'dark-title-color':'#F4F4F5',
        'dark-desc-color': '#A1A1AA',
        'dark-hover-color': '#202022'
      },
      fontSize: {
        'p-style': ['1rem', {
          lineHeight: '1.75rem',
        }]
      },
      maxWidth: {
        '1/2': '50%'
      },
      keyframes: {
        navMobile: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        }
      },
      animation:{
        navMobileAnimated: 'navMobile 0.2s linear'
      }

    },
  },
  plugins: [],
}

