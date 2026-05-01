/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/**/*.md',
    './*.html',
    './**/*.html',
    './*.md',
    '!./node_modules/**',
  ],
  safelist: [
    // Solid backgrounds for dynamic categories/buttons (with variants)
    { pattern: /bg-(red|blue|purple|yellow|cyan|orange|indigo|green|pink|emerald)-(400|500|600|700)/, variants: ['hover'] },
    { pattern: /bg-moroccangreen/, variants: ['hover'] },
    { pattern: /bg-(red|blue|purple|yellow|cyan|orange|indigo|green|pink|emerald)-(400|500|600|700)\/(10|20|30)/ },
    { pattern: /bg-moroccangreen\/(10|20|30)/ },
    // Text colors (with hover, group-hover variants)
    { pattern: /text-(red|blue|purple|yellow|cyan|orange|indigo|green|pink|emerald)-(300|400|500|600)/, variants: ['hover', 'group-hover'] },
    { pattern: /text-moroccangreen/, variants: ['hover', 'group-hover'] },
    // Borders (with hover variant)
    { pattern: /border-(red|blue|purple|yellow|cyan|orange|indigo|green|pink|emerald)-(400|500|600|700)\/(10|20|30|50)/, variants: ['hover'] },
    { pattern: /border-moroccangreen\/(10|20|30|50)/, variants: ['hover'] },
    // From / via / to gradients
    { pattern: /from-(red|blue|purple|yellow|cyan|orange|indigo|green|pink|emerald)-(400|500|600|700)\/(10|20|30)/ },
    { pattern: /from-moroccangreen\/(10|20|30)/ },
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
  darkMode: 'class',
}
