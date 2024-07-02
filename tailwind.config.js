/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cabin", "sans-serif"],
        arimo: ["Arimo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
