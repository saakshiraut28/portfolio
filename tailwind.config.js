/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brush: ["Caveat Brush", "cursive"],
        main: ["Josefin Sans", "sans-serif"],
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-out forwards",
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
