/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/public/fondo.svg')",
        'logo2': "url('/public/fondo2.svg')",
        'eco-1': "url('/public/bg-eco-1.svg')",
    },
    },
  },
  plugins: [],
}

