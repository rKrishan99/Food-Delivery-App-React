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
        'app-margin-x': '6rem',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}