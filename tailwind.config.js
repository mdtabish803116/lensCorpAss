/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage:{
     home_bg: "url('./src/assets/home_bg.webp')"
    },
    extend: {},
  },
  plugins: [],
}