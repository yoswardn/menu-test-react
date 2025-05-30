/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cheesy-red': '#8B1C1C',
        'cheesy-brown': '#5C0E0E',
        'cheesy-brown-light': '#8B1C1C',
        'cheesy-orange': '#F97316',
        'cheesy-yellow': '#FBBF24',
      },
      animation: {
        'drip': 'drip 3s ease-in-out infinite',
      },
      keyframes: {
        drip: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      borderRadius: {
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};