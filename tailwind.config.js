/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  // Include .tsx and .ts files for TypeScript
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-out',
        imgFadeIn: 'imgFadeIn 1s ease-out',
        textFadeIn: 'textFadeIn 1s ease-out forwards 1s',
        slideUp: 'slideUp 1s ease-out forwards ', 
        
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '50': { opacity: '0' },
          '100%': { opacity: '0' },
        },
        imgFadeIn: {
          '0%': { transform: 'translateX(-1400px)', opacity: '0' },
          '100%': { opacity: '1' },
        },
        textFadeIn: {
          
          '0%': { transform: 'translateX(0px)', opacity: '1' },
          '50%': { transform: 'translateX(200px)',opacity: '1' },
          '100%': { transform: 'translateX(0px)',opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      colors: {
        customBlue: '#405678',
        headingBlue:'#32496b',
        introText:'#202936'
      },

     
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
