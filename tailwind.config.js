module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "mexuvo-red": {
          50: "#fef6f7",
          100: "#fdecef",
          200: "#fad0d8",
          300: "#f6b3c1",
          400: "#f07b92",
          500: "#E94263",
          600: "#d23b59",
          700: "#af324a",
          800: "#8c283b",
          900: "#722031",
        },
        shark: {
          50: "#f4f4f4",
          100: "#e9e9e9",
          200: "#c7c7c9",
          300: "#a5a5a8",
          400: "#626266",
          500: "#1f1f25",
          600: "#1c1c21",
          700: "#17171c",
          800: "#131316",
          900: "#0f0f12",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
