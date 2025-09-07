/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,jsx}',
      './components/**/*.{js,jsx}',
      './ui/**/*.{js,jsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          playfair: ['"Playfair Display"', 'serif'],
        },
      },
    },
    plugins: [],
  }
  