/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,hbs,js}", "./src/**/*.{html,js}"],
  darkMode: 'media',
  theme: {
    screens: {
      md: { max: "767px" },
    },
    fontFamily: {
      ibm: ['IBM Plex Sans Condensed', "sans-serif"],
    },
    colors: {
      bc: "#2c4b70",
      primary: "#FFFDFB",
      secondary: "#B46CF8",
      danger: "#1A67F8",
      lightGrey: "#C9D5EE",
    },
    extend: {},
  },
  plugins: [],
}
