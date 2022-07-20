/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,hbs,js}", "./src/**/*.{html,js}"],
  mode: "jit",
  purge: ["./views/**/*.{js,ts,jsx,tsx,hbs}"],
  theme: {
    screens: {
      md: { max: "767px" },
    },
    fontFamily: {
      raleway: ["IBM Plex Sans Condensed", "sans-serif"],
    },
    colors: {
      bc: "#050D21",
      primary: "#FFFDFB",
      secondary: "#B46CF8",
      danger: "#1A67F8",
      lightGrey: "#C9D5EE",
    },
    extend: {},
  },
  plugins: [],
}
