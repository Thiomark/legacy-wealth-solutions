/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          250: '#F1CC8E',
          350: '#DAAC74',
          450: '#C89361'
        },
        green: {
          650: '#03353A',
          750: '#032628'
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif']
      },
    },
  },
  plugins: [],
}
