/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/docs/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // purge: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],

  // darkMode: "media",
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1028px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  important: true,
  plugins: [require("@tailwindcss/typography")],
};
