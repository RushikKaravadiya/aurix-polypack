/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#061F4A',
        darkBlue: '#04183C',
        gold: '#D4A642',
        lightGold: '#DDAF4C',
        background: '#F8FAFC',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(6, 31, 74, 0.12)',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
