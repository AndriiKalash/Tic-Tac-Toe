/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // custom classes
    extend: {
      gridTemplateColumns: {
        'game-field': 'repeat(19, 30px)',
      },
      gridTemplateRows: {
        'game-field': 'repeat(19, 30px)',
      },
      boxShadow: {
        'heder-shadow': '0px 4px 10px 0px rgba(0, 0, 0, 0.10)',
        'circle-shadow':
          '0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)',
      },
      lineHeight: {
        tight: 1.2,
      },
    },
  },
  plugins: [],
};
