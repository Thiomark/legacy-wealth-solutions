/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          350: '#DAAC74'
        },
        green: {
          650: '#03353A',
          750: '#032628'
        }
      }
    },
  },
  plugins: [],
}
