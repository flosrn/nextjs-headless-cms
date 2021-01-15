const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        tailwindcss: "rgb(6, 182, 212)",
        gsap: "rgb(87, 168, 24)",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
