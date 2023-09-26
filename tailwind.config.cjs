/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../public/assets/images/pipoca.jpg')",
        "hero-pattern2": "url('../src/assets/images/s2.png')",
      },
      colors: {
        "bg-blackSite": "#4b4148",
        "bg-FromWhiteMode" :" #443931"
      },
      boxShadow: {
        'inset': 'inset 0em 0em 4rem black',
       
      }
    },

  },
  plugins: [],
};
