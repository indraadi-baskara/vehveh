/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: {
            4: "#7963F0",
          },
          gray: {
            1: "#F5F6F7",
            2: "#E4E6E8",
            3: "#C8CCD4",
            4: "#9A9EA7",
          },
        },
      },
    },
  },
  plugins: [],
};
