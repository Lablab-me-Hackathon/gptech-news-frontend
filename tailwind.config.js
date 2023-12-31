/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#DFDBDB",
        blueColor: "#0B5CA7",
        darkwhite: "#CCC6C6",
        secondbackground: "#0A0909",
        secondText: "#7C7272",
        footerbackground: "#0A0909",
        firstLogo: "#6C5744",
        secondLogo: "#DCCBCB",
        thirdLogo: "#DEDACB",
        altLogo: "#F1E6E6",
        darkPurple: "#593C79",
      },
      fontFamily: {
        poppins: ["Poppins", "sans"],
        Gugi: ["Gugi", "sans"],
        Iceland: ["Iceland", "sans"],
        Bruno: ["Bruno Ace", "sans"],
        Inter: ["Inter", "sans"],
        Syne: ["Syne", "sans"],
      },
    },
  },
  plugins: [],
};
