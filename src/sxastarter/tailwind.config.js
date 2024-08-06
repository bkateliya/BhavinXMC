/** @type {import('tailwindcss').Config} */
function pxToRem(px, baseFontSize = 16) {
  const rem = px / baseFontSize;
  return `${rem}rem`;
}
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

