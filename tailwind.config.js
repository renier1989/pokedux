/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('../logo.png')",
        'fondo': "url('../fondo.svg')",
        'fondo2': "url('../fondo2.svg')",
        'eco-1': "url('../bg-eco-1.svg')",
        'loading': "url('../loading.svg')",
        'not-found': "url('../notfound.png')",
    },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

