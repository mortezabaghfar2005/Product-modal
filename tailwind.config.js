/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brown": {
          100: "#ece0d1",
          300: "#dbc1ac",
          600: "#967259",
          900: "#634832"
        }

      }
    },
  },
  plugins: [],
}

