/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: {
      mytheme: {
        text: "#ffffff",
        primary: "#69923e",
        division: "#4e7837",
        secondary: "#4b4847",
        accent: "#2c2b29",
      },
    },
  },
};
