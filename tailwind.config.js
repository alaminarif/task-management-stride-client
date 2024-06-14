/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#029944",
          secondary: "#749503",
          accent: "#F9FAFA",
          neutral: "#3D474D",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },
};
