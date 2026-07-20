/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3FAE6A",
        primaryDark: "#2E8A52",
        primaryLight: "#E9F7EF",
        secondary: "#181818",
        ink: "#1E1E1E",
        baseBg: "#FFFFFF",
        muted: "#6B7280",
        line: "#E5E7EB",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        pill: "200px",
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(24, 24, 24, 0.12)",
        soft: "0 4px 14px rgba(63, 174, 106, 0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(-2deg)" },
          "50%": { transform: "translateY(-14px) rotate(1deg)" },
        },
        stamp: {
          "0%": { transform: "scale(0.4)", opacity: "0" },
          "60%": { transform: "scale(1.12)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        scan: {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        stamp: "stamp 0.5s ease-out forwards",
        scan: "scan 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
