/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BDEB00',
        secondary: {
          100: '#1E1F25',
          200: '#2e2f37',
          900: '#131517',
        },
      },
    },
  },
  plugins: [],
};