/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          1:"#7DCEE7",
          2:"#52B4F8",
          3:"#2B64F5",
        },
        violet:{
          1:"#C299DB"
        }
      }
    },
  },
  plugins: [],
}