/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blush-pink": "#E392B6",
      },
      padding: {
        "1rem": "1rem",
      },
    },
    fontFamily: {
      "text-font": ["Roboto Condensed"],
    },
    screens: {
      desktop: "1280px",
      laptop: "1024px",
      mobile: "375px",
    },
    
  },
  plugins: [],
};
