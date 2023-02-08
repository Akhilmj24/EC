// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        gryShade: "#20262E",
        blueShade: "#AEE2FF",
        secondary: "#EDA415",
        selected: "#87BCD9",
        dark: "black",
      },
      boxShadow: {
        baseShadow: "1px 3px 4px rgba(0, 0, 0, 0.14)",
      },
    },
  },
  plugins: [],
};
