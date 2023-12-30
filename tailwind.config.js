/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textUnderlineOffset: {
        5: '5px',
      },
    },
  screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '760px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '640px'},
      // => @media (max-width: 639px) { ... }
      'xs': {'max': '420px'},
      '2xs': {'max': '320px'},
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

