/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2E5C',
          light: '#134074',
          dark: '#071F42',
          deep: '#041328',
          subtle: '#EDF2F9',
        },
        brandRed: {
          DEFAULT: '#D62828',
          hover: '#B31E1E',
          soft: '#FDECEC',
          glow: 'rgba(214, 40, 40, 0.45)',
        },
        paper: '#F4F6F9',
        ink: {
          DEFAULT: '#101828',
          soft: '#5B6577',
          muted: '#8F9CAE',
        }
      },
      fontFamily: {
        display: ['Archivo', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 35px -5px rgba(214, 40, 40, 0.35)',
        'glow-navy': '0 0 40px -5px rgba(10, 46, 92, 0.35)',
        'card-hover': '0 25px 60px -15px rgba(10, 46, 92, 0.15)',
        'premium': '0 20px 50px rgba(7, 31, 66, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
