/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'charcoal': '#264653',
      'saffron': '#e9c46a',
      'persian-green': '#2a9d8f',
      'sandy-brown': '#f4a261',
      'burnt-sienna': '#e76f51',
      'off-white':'#FCF6F5'
    },
  },
  plugins: [
    require('daisyui')
  ],
}