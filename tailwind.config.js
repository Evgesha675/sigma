/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    // Встроенная логика контейнера для всех экранов
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'tablet': '960px', // Критическая точка для твоего дизайна
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'qhd': '2048px',
    },
    extend: {
      maxWidth: {
        'container': '1320px',
        'container-qhd': '1800px',
      },
      colors: {
        'sigma-blue': '#273972',
        'sigma-pink': '#E51B51',
        'sigma-orange': '#F7A735',
        'sigma-green': '#28A83E',
        'sigma-grey': '#9D9E9E',
      },
      fontFamily: {
        'gothic': ['"Century Gothic"', 'sans-serif'],
      },
      fontSize: {
        // Стандартные размеры (оставил твои)
        'xs': ['12px', '16px'],
        'sm': ['14px', '20px'],
        'base': ['16px', '24px'],
        'lg': ['18px', '28px'],
        'xl': ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '40px'],
        '5xl': ['48px', '1'],
        '6xl': ['60px', '1'],
        '7xl': ['72px', '1'],
        '8xl': ['96px', '1'],
        '9xl': ['120px', '1'],
        // "Живые" размеры для заголовков (адаптируются сами)
        'fluid-h1': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '0.9', fontWeight: '900' }],
        'fluid-h2': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1', fontWeight: '700' }],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        // Твои кастомные значения в px (через extend они дополняют Tailwind)
        '13': '52px',
        '15': '60px',
      },
      boxShadow: {
        'sigma': '0 20px 50px rgba(39, 57, 114, 0.12)',
        'sigma-pink': '0 20px 40px rgba(229, 27, 81, 0.2)',
      },
      transitionTimingFunction: {
        'sigma-out': 'cubic-bezier(0.33, 1, 0.68, 1)',
      }
    },
  },
  plugins: [],
}