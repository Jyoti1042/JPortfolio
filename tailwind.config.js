/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-inset': 'inset 0 0 70px 50px black',
      },
    },
  },
  plugins: [],
}