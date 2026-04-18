
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sigma-blue': '#273971', 
        'sigma-red': '#E51B51',
      },
      fontFamily: {
        'gothic': ['"Century Gothic"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}