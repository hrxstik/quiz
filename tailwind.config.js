/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'var(--custom-blue)',
        'custom-red': 'var(--custom-red)',
      },
    },
  },
  plugins: [],
};
