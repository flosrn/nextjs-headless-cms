const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "accent-1": "#333",
        tailwindcss: "rgb(6, 182, 212)",
        gsap: "rgb(87, 168, 24)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
