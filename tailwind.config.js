/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'londrina-outline':["Cormorant Garamond", 'serif'],
      },
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
      
        typewriter: {
            to: {
              left: '100%',
            },
          },
        blink: {
            '0%': {
              opacity: '0',
            },
            '0.1%': {
              opacity: '1',
            },
            '50%': {
              opacity: '1',
            },
            '50.1%': {
              opacity: '0',
            },
            '100%': {
              opacity: '0',
            },
          },
        },
      
      animation: {
        cube: "cube 2s ease-in-out forwards",
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
        
       
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