const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-glow': {
          'text-shadow': '0px 0px 8px #fcd34d',
        },
        '.text-glow-none': {
          'text-shadow': 'none',
        },
      });
    }),
  ],
}
