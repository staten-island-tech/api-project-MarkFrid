module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
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
