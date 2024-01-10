/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#343A40',
        'secondary': '#868E96',
        'main': '#3B5BDB',
        'border': '#cfcfcf',
      },
    },
  },
  plugins: [],
}

