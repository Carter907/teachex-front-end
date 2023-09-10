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
        'light-primary': '#989dad',
        'alternate': '#6a856f'

      }


    },
  },
  plugins: [],
}

