/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
    "./hooks/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "azul-principal": "#06090d",
        "azul-noturno": "#06090d",
        grafite: "#454545",
        carvao: "#1F242B",
        "cinza-claro": "#EEEEEE",
        "cinza-linha": "#C7C7C7",
        "off-white": "#F8F6F2",
        "branco-gelo": "#F7F7F5",
        "marrom-premium": "#5D2D24",
        "marrom-hover": "#472019",
        champagne: "#B99768"
      },
      fontFamily: {
        title: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Inter", "Segoe UI", "Arial", "sans-serif"],
        hero: ["Tall Films Local", "Italiana Local", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(6, 9, 13, 0.12)",
        strong: "0 24px 70px rgba(6, 9, 13, 0.24)"
      }
    }
  },
  plugins: []
};
