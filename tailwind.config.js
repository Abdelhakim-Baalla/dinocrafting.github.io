/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
    './**/*.html',
    './*.md',
    './**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        moroccangreen: '#006233',
        moroccanred: '#C1272D',
        darkbg: '#0f0f0f',
        darkcard: '#1a1a1a',
        lightbg: '#f8f9fa',
        lightcard: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        arabic: ['Tajawal', 'Cairo', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class', // or 'media'
}
