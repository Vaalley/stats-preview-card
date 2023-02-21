/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        '-2xl': { max: '1439px' },
        '-xl': { max: '1279px' },
        '-lg': { max: '1023px' },
        '-md': { max: '767px' },
        '-sm': { max: '639px' },
      },
      colors: {
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'very-desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
        'slightly-transparent-white': 'hsla(0, 0%, 100%, 0.6)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lexend': ['Lexend Deca', 'sans-serif'],
      },
    },
  },
  plugins: [],
}