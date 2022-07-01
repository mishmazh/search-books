/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: {
        500: "#000",
      },
      white: {
        500: "#fff",
      },
      grey: {
        500: "#f3f2f1",
      },
    },
    extend: {
      backgroundImage: {
        "header-image": "url('assets/header-image.png')",
      },
    },
  },
  plugins: [],
};
