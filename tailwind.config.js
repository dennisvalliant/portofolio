module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        hard: "8px 8px 0 0 rgba(0,0,0,1)"
      },
      borderRadius: {
        'tl-sm': "0.125rem",
        'tr-3xl': "1.5rem",
        'bl-3xl': "1.5rem",
        'br-sm': "0.125rem"
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        grayLight: "#f2f2f2",
        grayDark: "#333333"
      }
    }
  },
  plugins: []
};
