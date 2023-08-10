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
      },
      fontFamily: {
        poppins: ["Poppins", "sans"],
      },
    },
  },
  plugins: [],
};
