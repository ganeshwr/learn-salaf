/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f5',
          100: '#dcf2e6',
          200: '#bce4d1',
          300: '#8fd0b4',
          400: '#5cb493',
          500: '#3a9b78',
          600: '#2d7c61',
          700: '#2d5a4b',
          800: '#2a4d40',
          900: '#244138',
        },
        gold: {
          50: '#fdf9f0',
          100: '#faf1dc',
          200: '#f5e2b8',
          300: '#edcc89',
          400: '#e4b558',
          500: '#dda135',
          600: '#c9a961',
          700: '#a67f1e',
          800: '#8a681c',
          900: '#71551d',
        },
        navy: {
          50: '#f4f7fa',
          100: '#e8eef4',
          200: '#cbd7e6',
          300: '#9fb6d0',
          400: '#6c90b5',
          500: '#4a729d',
          600: '#395b84',
          700: '#2f4a6b',
          800: '#2a3f5a',
          900: '#1e3a5f',
        }
      },
      fontFamily: {
        arabic: ['Noto Sans Arabic', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};