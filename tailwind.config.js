/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        show: {
          "0%": { top: "5rem", opacity: "0" },
          "25%": { top: "0rem", opacity: "1" },
          "50%": { top: "-5rem", opacity: "0" },
          "100%": { display: "none", opacity: "0" },
        },
      },
    },
    animation: {
      show: "show 2s ease-in-out forwards  ",
    },
  },
  plugins: [],
};
