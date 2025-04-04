/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF4500",
          dark: "#E03E00",
          light: "#FF6A33",
        },
        secondary: {
          DEFAULT: "#1E293B",
          dark: "#0F172A",
          light: "#334155",
        },
        background: "#F8FAFC",
        surface: "#FFFFFF",
        error: "#DC2626",
        success: "#16A34A",
        warning: "#FBBF24",
        info: "#3B82F6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
