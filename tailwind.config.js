/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'var(--custom-blue)',
        'custom-red': 'var(--custom-red)',
      },
      width: {
        '1000px': '1000px',
      },
    },
  },
  plugins: [],
};
