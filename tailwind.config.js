/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9AF89F",
        secondary: "#6E9AF1",
        danger: "#FF7D70",
      },
      keyframes: {
        marqueeHorizontal: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        marqueeHorizontalReveres: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        marqueeVertical: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "marquee-horizontal": "marqueeHorizontal 10s linear infinite",
        "marquee-horizontalReverse":
          "marqueeHorizontalReveres 10s linear infinite",
        "marquee-vertical": "marqueeVertical 30s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
