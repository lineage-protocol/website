/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Slider: ["Slider"],
        Lexend:["Lexend"]
      
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        'music-rgba': 'rgba(29, 33, 35, 0.3)',
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
  plugins: [require("tailwind-gradient-mask-image")],
};
