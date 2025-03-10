/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('../src/assets/header_img.png')",
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Add your custom font family here
      },
      height: {
        '500px': '500px', 
      },
      margin: {
        'app-margin-x': '8rem',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}