/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        glow: "glow 5s infinite",
      },
      keyframes: {
        glow: {
          "0%": {
            "text-shadow":
              "0 0 5px #6666ff, 0 0 10px #6666ff, 0 0 15px #6666ff",
          },
          "10%": {
            "text-shadow": "0 0 8px #0099ff",
          },
          "50%": {
            "text-shadow":
              "0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00",
          },
          "75%": {
            "text-shadow": "0 0 10px #ff3399",
          },
          "100%": {
            "text-shadow":
              "0 0 5px #6666ff, 0 0 10px #6666ff, 0 0 15px #6666ff",
          },
        },
      },
    },
  },
  plugins: [],
};
