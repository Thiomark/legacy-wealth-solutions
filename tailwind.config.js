/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          650: '#03353A'
        },
        gold: {
          350: '#DAAC74'
        }
      }
    },
  },
  plugins: [],
}
