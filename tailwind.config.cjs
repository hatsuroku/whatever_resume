/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'r-emphasis': '#1467A3',
        'r-title': '#105687',
      }
    },
  },
  plugins: [],
}
