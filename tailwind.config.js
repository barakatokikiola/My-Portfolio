/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'thistle': '#E0BBE4',
      'lavender': '#957DAD',
      'pastel-violet': '#D291BC',
      'cotton-candy': '#FEC8D8',
      'lumber': '#FFDFD3',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
  },
  plugins: [
    require('daisyui')
  ],
}