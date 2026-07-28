/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
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
        popIn: {
          "0%": { transform: "scale(0.85) translateY(10px)", opacity: "0" },
          "100%": { transform: "scale(1) translateY(0)", opacity: "1" },
        },
        bubbleIn: {
          "0%": { transform: "translateY(8px) scale(0.98)", opacity: "0" },
          "100%": { transform: "translateY(0) scale(1)", opacity: "1" },
        },
        chipIn: {
          "0%": { transform: "translateY(6px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        stamp: "stamp 0.5s ease-out forwards",
        scan: "scan 2.4s ease-in-out infinite",
        popIn: "popIn 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        bubbleIn: "bubbleIn 0.25s ease-out forwards",
        chipIn: "chipIn 0.25s ease-out forwards",
      },
    },
  },
  plugins: [],
};