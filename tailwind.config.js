/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",'./about.html','fields.html','team.html'],
  theme: {
    extend: {
      screens: {
        mobile: "350px",
      },
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
