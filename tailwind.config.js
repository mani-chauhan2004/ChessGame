/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fade-green': 'linear-gradient(to right, transparent, #16a34a, transparent)',
        'fade-gray': 'linear-gradient(to right, transparent, #E5E7EB, transparent)',
        'fade-gray-dark': 'linear-gradient(to right, transparent, #6B7280, transparent)',
      },

      fontFamily: {
        baskervville: ['Baskervville SC', 'sans serif'],
      },
    },
  },
  plugins: [],
}

