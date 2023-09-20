/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#044B69",
        lightblue:"#4285F4",
      },
      fontFamily:{
        poppins:["Poppins"]
      }
    },
  },
  plugins: [],
}