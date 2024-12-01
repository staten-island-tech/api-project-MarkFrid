// tailwind.config.js
module.exports = {
  content: ["./index.html", "./main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poop: ['"Pixelify Sans"', "sans-serif"],
      },
      backgroundImage: {
        "background chessbaoard": "url('/public/chessboard.PNG')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          text: "#ffffff",
          primary: "#69923e",
          division: "#4e7837",
          secondary: "#4b4847",
          accent: "#2c2b29",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
