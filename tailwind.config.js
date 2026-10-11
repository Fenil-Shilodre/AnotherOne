/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FAF8F5',
          100: '#F6F4EF',
          200: '#EEEAE1',
          300: '#E1DCD0',
          400: '#C9C2B1',
          900: '#181715',
        },
        noir: {
          DEFAULT: '#141414',
          subtle: '#262626',
          muted: '#525252',
          faint: '#8A8A8A'
        },
        accent: {
          ochre: '#C88A2E',
          sage: '#5E6B58',
          terracotta: '#A65637',
          stone: '#78736B'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cinzel"', '"Plus Jakarta Sans"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      letterSpacing: {
        'ultra-wide': '0.18em',
        'mega-wide': '0.25em'
      },
      boxShadow: {
        'soft-lift': '0 20px 40px -15px rgba(20, 20, 20, 0.06)',
        'rug-float': '0 30px 60px -15px rgba(0, 0, 0, 0.14)',
        'subtle-border': '0 0 0 1px rgba(20, 20, 20, 0.06)'
      }
    },
  },
  plugins: [],
}
