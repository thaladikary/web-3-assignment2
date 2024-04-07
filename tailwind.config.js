/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      f1size : "2.625rem"
    },
    extend: {
      colors: {
        "table-color": "#1A1C28",
      },
      fontFamily: {
        "fblack" : ['F1Black','sans-serif']
      }

    },
  },
  plugins: [],
  safelist:[{pattern:/(font)-(fblack)/,}]
};
