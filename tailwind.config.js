/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./content/**/*.html",
    "./layouts/**/*.html",
    "./static/**/*.{html,js}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#fafafa",
        secondary: "#959595",
        dark: "#161616",
        danger: "#FF6464",
        info: "#6464FF",
        success: "#64FF64",
      },
    },
    fontFamily: {
      colfax: "Colfax, sans-serif",
      helvetica: "Helvetica, sans",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
}
