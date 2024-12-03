module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      green: "#4e7837",
      back: "#4b4847",
      acc: "#2c2b29",
    },
    extend: {
      fontFamily: {
        poop: ['"Pixelify Sans"', "sans-serif"],
      },
      backgroundImage: {
        "background chessbaoard": "url('/chessboard.PNG')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
