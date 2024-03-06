/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { colors: {
        brown: {
          '50': '#f9f3ec',
          '100': '#e6d7c2',
          '200': '#d3ba97',
          '300': '#c09d6c',
          '400': '#ad8052',
          '500': '#996337',
          '600': '#7d4e2a',
          '700': '#61401e',
          '800': '#453111',
          '900': '#282305',
        },
      },},
  },
  plugins: [],
}