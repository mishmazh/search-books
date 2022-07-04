/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "716px",
    },
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
        "search-icon": "url('assets/search-icon.png')",
      },
    },
  },
  plugins: [],
};
