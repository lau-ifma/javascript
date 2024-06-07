/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        neue: [ "Comic Neue", 'cursive'],
        machina: ["Neue Machina", 'sans-serif']
      },
      backgroundImage: {
        'degrade-roxo': "url('./assets/gradient-roxo-canto.png')",
      },
    },
  },
  plugins: [],
}
