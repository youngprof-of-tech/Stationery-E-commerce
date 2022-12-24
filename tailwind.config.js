/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#2E2E2E",
        secondary: "#535353",
        "light-blue": "#1A95BD",
        gray: "#F5F5F5"
      }
    },
  },
  plugins: [],
}
