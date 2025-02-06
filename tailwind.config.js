module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light theme colors
        light: {
          primary: 'hsl(221 83% 53%)',    // Blue-600
          foreground: 'hsl(224 71% 4%)',  // Gray-900
          background: 'hsl(0 0% 100%)',   // White
          card: 'hsl(0 0% 98%)',          // Gray-50
          border: 'hsl(214 32% 91%)',     // Gray-200
          accent: 'hsl(210 40% 98%)',     // Gray-50
        },
        // Dark theme colors
        dark: {
          primary: 'hsl(217 91% 60%)',    // Blue-500
          foreground: 'hsl(0 0% 98%)',    // Gray-50
          background: 'hsl(224 71% 4%)',  // Gray-900
          card: 'hsl(224 71% 6%)',        // Custom dark
          border: 'hsl(215 28% 17%)',     // Gray-800
          accent: 'hsl(215 28% 12%)',     // Gray-900
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}