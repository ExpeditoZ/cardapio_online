
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neon: { pink: "#ff3ea5", purple: "#7a3cff" }
      },
      boxShadow: {
        neon: "0 0 20px rgba(255, 62, 165, 0.5), 0 0 40px rgba(122, 60, 255, 0.35)"
      },
      borderRadius: { xl2: "1.25rem" }
    },
  },
  plugins: [],
};
