/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F6EF7',
        'primary-dark': '#3a55d4',
        accent: '#a855f7',
        dark: '#05050f',
        'dark-card': '#0d0d1f',
      },
    },
  },
  plugins: [],
};
