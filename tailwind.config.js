/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B0F19',
        accent: '#C89B3C',
        'accent-light': '#E8C06A',
        'accent-dark': '#A07828',
        secondary: '#1F2937',
        'bg-soft': '#F9FAFB',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 4px 24px rgba(200, 155, 60, 0.25)',
        'gold-lg': '0 8px 40px rgba(200, 155, 60, 0.35)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.18)',
      },
    },
  },
  plugins: [],
};
