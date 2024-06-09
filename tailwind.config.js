/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        mycustomfont: ['MyCustomFont', 'sans-serif'],
      },
      screens: {
        // SH
        laptop: "1500px",
        tab: "850px",
        xtab: "1050px",
        maxtab:"1200px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'black-56': 'rgba(0, 0, 0, 0.56)',
        'black-57': 'rgba(0, 0, 0, 0.72)',
        'black-58': 'rgba(0, 0, 0, 0.88)',
      },
    },
  },
  plugins: [],
};
