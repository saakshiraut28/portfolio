/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cat: ["cat", "cursive"],
        nunito: ["nunito"],
        lora: ["lora"],
        mont: ["Montserrat", "sans-serif"],
        main: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
