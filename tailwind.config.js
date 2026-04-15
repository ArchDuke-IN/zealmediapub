/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brutal: {
          paper: '#0A0A0A',
          red: '#D4AF37', /* Gold/Champagne Accent */
          offwhite: '#121212', /* Deep slate/grey off-black */
          black: '#F9F6F0' /* Ivory text against dark bg */
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      }
    },
  },
  plugins: [],
}