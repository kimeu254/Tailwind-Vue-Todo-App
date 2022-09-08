/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body : ['Poppins', 'sans-serif'],
        rampart : ['Rampart one', 'cursive'],
        nunito : ['Nunito', 'sans-serif'],
        barlow : ['Barlow Semi Condensed', 'sans-serif']
      },
    },
  },
  plugins: [],
}