/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        neue: [ "Comic Neue", 'cursive'],
        machina: ["Neue Machina", 'sans-serif']
      },
    },
  },
  plugins: [],
}
