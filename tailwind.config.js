/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FAFAF8',
          secondary: '#F2F0EC',
          dark: '#111110',
          'dark-secondary': '#1A1918',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          muted: '#8A8A8A',
          dark: '#F0EDE8',
          'dark-muted': '#6A6862',
        },
        sage: {
          DEFAULT: '#5C7A5F',
          light: '#7A9E7D',
          '50': '#F2F6F2',
          '100': '#E0EBE1',
        },
        sand: {
          DEFAULT: '#C4A882',
          light: '#D9C4A8',
        },
        border: {
          DEFAULT: '#E4E0D8',
          dark: '#2A2826',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
