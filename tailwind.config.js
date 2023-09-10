/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",

],
  theme: {
    extend: {
      colors: {
        'secondary': '#2a2a2a',
        'primary': '#575c72',
        'primary-dark': '#3a3e4f',
        'light-primary': '#989dad',
        'alternate': '#6a856f'

      }


    },
  },
  plugins: [],
}

