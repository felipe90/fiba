import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        fiba: {
          primary: {
            50: '#FBF5F5',
            100: '#F5E6E8',
            200: '#ECCDD1',
            300: '#DEABB1',
            400: '#C87681',
            500: '#AE2012',
            600: '#9B2226',
            700: '#721B24',
            800: '#57131A',
            900: '#3D0C11',
            950: '#230508'
          },
          amber: {
            300: '#E9D8A6',
            400: '#EE9B00',
            500: '#CA6702',
            600: '#BB3E03'
          },
          obsidian: {
            400: '#94D2BD',
            500: '#0A9396',
            600: '#005F73',
            800: '#001824',
            900: '#001219'
          },
          warmIvory: {
            50: '#FDFBF7',
            100: '#F4EFEA',
            200: '#E8DFD8',
            300: '#D8CCC2'
          }
        },
        accent: {
          300: '#E9D8A6',
          400: '#EE9B00',
          500: '#CA6702',
          600: '#BB3E03'
        },
        secondary: {
          400: '#94D2BD',
          500: '#0A9396',
          600: '#005F73',
          800: '#001824',
          900: '#001219'
        },
        surface: {
          50: '#FDFBF7',
          100: '#F4EFEA',
          200: '#E8DFD8',
          300: '#D8CCC2'
        },
        text: {
          primary: '#1A1514',
          secondary: '#423B38',
          muted: '#665E59'
        }
      },
      fontFamily: {
        serif: ['Domine', 'Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        domine: ['Domine', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        'fiba': '0.75rem',
        'fiba-lg': '1rem',
        'fiba-xl': '1.5rem'
      },
      boxShadow: {
        'fiba-subtle': '0 2px 10px rgba(61, 12, 17, 0.04)',
        'fiba-card': '0 4px 20px -2px rgba(61, 12, 17, 0.08), 0 2px 6px -1px rgba(61, 12, 17, 0.04)',
        'fiba-elevated': '0 20px 30px -10px rgba(61, 12, 17, 0.15), 0 10px 15px -5px rgba(61, 12, 17, 0.08)',
        'fiba-gold': '0 4px 20px rgba(202, 103, 2, 0.25)'
      }
    }
  },
  plugins: []
} satisfies Config