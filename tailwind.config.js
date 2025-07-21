/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#f79f1A',
        secondary: '#34495e',
        tertiary: '#2c3e50',
        quaternary: '#27ae60',
        quinary: '#16a085',
        senary: '#2980b9',
        septenary: '#8e44ad',
        octonary: '#f1c40f',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}
