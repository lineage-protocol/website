/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primaryLight: "var(--primaryLight)",
        secondary: "var(--secondary)",
        blue: "var(--blue)",
        lightBlue: "var(--lightBlue)",
      },
      screens: {
        sm: { min: "640px" }, // large mobiles
        md: { min: "768px" }, // iPads, Tablets
        lg: { min: "1024px" }, // Small screens, laptops
        xl: { min: "1280px" }, // Desktops, large screens
        "2xl": { min: "1536px" }, // Extra large screens, TV
      },
    },
  },
  plugins: [],
};
