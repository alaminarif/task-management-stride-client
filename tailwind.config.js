/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F3D0D7",
          secondary: "#FFEFEF",
          accent: "#F0EBE3",
          neutral: "#F6F5F2",
          "base-100": "#ffffff",
        },
      },
      "light",
    ],
  },
};
