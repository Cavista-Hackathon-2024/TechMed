/** @type {import('tailwindcss').Config} */
const { colours } = require('./src/core/style');
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.tsx",
    "./src/**/*.tsx"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: colours,
      fontSize: {
        title: 32
      },
    },
  },
  plugins: [],
}