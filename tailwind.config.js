/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", // This will include all .html files in all subdirectories
  ],
  theme: {
    extend: {
      screens: {
        mobile: "350px",
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        primary: ["ALK Rounded Mtav Med", "serif"],
        secondary: ["ArchyEDT-Bold", "serif"],
        primaryRus: ["Overpass", "serif"],
        secondaryRus: ["Play", "serif"],
        primaryEng: ["Kanit", "serif"],
        secondaryEng: ["Ubuntu", "serif"],
      },
      colors: {
        firstRed: "#fe0036",
        firstBlue: "#1f9af8",
      },
    },
  },
  plugins: [],
};
