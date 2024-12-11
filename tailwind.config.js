/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        cube: {
          from: {
            transform: "scale(0) rotate(0deg) translate(-50%, -50%)",
            opacity: "1",
          },
          to: {
            transform: "scale(20) rotate(960deg) translate(-50%, -50%)",
            opacity: "0",
          },
        },
      },
      animation: {
        cube: "cube 2s ease-in-out forwards",
      },
    
    },
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