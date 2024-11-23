/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        primary: ["ALK Rounded Mtav Med", "serif"],
        secondary: ["ArchyEDT-Bold", "serif"],
      },
      colors: {
        firstRed: "#fe0036",
        firstBlue: "#1f9af8",
      },
    },
  },
  plugins: [],
};
