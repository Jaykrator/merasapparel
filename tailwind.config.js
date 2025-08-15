/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // root HTML file
    './src/**/*.{html,js}', // all HTML/JS inside src
  ],
  theme: {
    extend: {
      colors: {
        accent: '#FF6F61',
        brand: '#0B1A36',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        cinzel: ['Cinzel', 'serif'],
      },
    },
  },
};
