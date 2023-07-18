module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#F3F3F3",
        purple: "#AB47BC;",
        gray: "#828282",
        footer: "#414141",
      },

      fontFamily: {
        Nunito: ['"Nunito"', "cursive"],
        Poppin: ['"Poppins"', "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
