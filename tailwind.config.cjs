/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Main colors from Figma design
        primary: {
          DEFAULT: "#B3FF3B", // Lime green (main action color)
          dark: "#a1e535",
          light: "#c1ff5c",
        },
        secondary: {
          DEFAULT: "#141414", // Dark background
          dark: "#000000",
          light: "#2a2a2a",
        },
        accent: {
          purple: "#6952EB", // Purple accent
          blue: "#52C2EB", // Blue accent
          yellow: "#FFCD05", // Yellow accent
          teal: "#2BE4B0", // Teal accent
          green: "#61E865", // Green accent
        },
        neutral: {
          DEFAULT: "#F5F5F5", // Light gray background
          blue: "#A1C5D2", // Light blue
          gray: "#BAC7DA", // Gray blue
        },
        background: "#F8FAFC",
        surface: "#FFFFFF",
        error: "#DC2626",
        success: "#16A34A",
        warning: "#FFCD05",
        info: "#52C2EB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
