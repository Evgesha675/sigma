/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sigma-blue': '#273972',   // Из брошуры
        'sigma-pink': '#E51B51',   
        'sigma-orange': '#F7A735',
        'sigma-green': '#28A83E',
        'sigma-grey': '#9D9E9E',
      },
      fontFamily: {
        'gothic': ['"Century Gothic"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}