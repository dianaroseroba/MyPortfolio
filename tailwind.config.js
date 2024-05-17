/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto','sans-serif'],
      },
      colors: {
        'personalBlue':{
          '50': '#8ECAE6',
          '100': '#209EBB',
          '150': '#023047',
        },

        'colorLetter': '#FC8500',
        'colorText': '#F2F9FD'

      }
    },
  },
  plugins: [],
}

