/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  // Disable Tailwind's base styles since we're using MUI
  corePlugins: {
    preflight: false,
  },
};