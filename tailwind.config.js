/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      inherit: colors.inherit,
      transparent: colors.transparent,
      current: colors.current,
      black: colors.black,
      white: colors.white,
      gray: {
        lighter: colors.slate[500],
        light: colors.slate[600],
        DEFAULT: colors.slate[700],
        dark: colors.slate[900],
      },
      primary: {
        light: colors.orange[300],
        DEFAULT: colors.orange[500],
        dark: colors.orange[600],
      },
      secondary: {
        light: colors.blue[300],
        DEFAULT: colors.blue[500],
        dark: colors.blue[700],
      },
    },
    extend: {
      minWidth: {},
      maxWidth: {},
      minHeight: {},
      maxHeight: {}
    }
  }
}
