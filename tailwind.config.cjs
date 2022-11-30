/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nasalization: ["Nasalization"],
        montserrat: [""],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
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
