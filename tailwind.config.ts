import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.ts',
    './stores/**/*.ts',
    './app.vue',
    './error.vue',
  ],
  // Disable unused core plugins to reduce CSS output
  corePlugins: {
    // Disable utilities we don't use
    float: false,
    clear: false,
    skew: false,
    caretColor: false,
    sepia: false,
    hueRotate: false,
    saturate: false,
    invert: false,
    brightness: false,
    contrast: false,
    backdropSepia: false,
    backdropHueRotate: false,
    backdropSaturate: false,
    backdropInvert: false,
    backdropBrightness: false,
    backdropContrast: false,
  },
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#2D5016',
          light: '#3d6b1f',
          dark: '#1e3710',
          '5':  'rgba(45,80,22,0.05)',
          '10': 'rgba(45,80,22,0.10)',
          '20': 'rgba(45,80,22,0.20)',
        },
        sage: {
          DEFAULT: '#87A96B',
          light: '#a3be8c',
          dark: '#6b8a52',
          '10': 'rgba(135,169,107,0.10)',
          '20': 'rgba(135,169,107,0.20)',
          '40': 'rgba(135,169,107,0.40)',
        },
        cream: {
          DEFAULT: '#FAF6EE',
          dark: '#F0E8D5',
          '70': 'rgba(250,246,238,0.70)',
          '80': 'rgba(250,246,238,0.80)',
        },
        earth: {
          DEFAULT: '#8B5E3C',
          light: '#a67c5b',
          '8':  'rgba(139,94,60,0.08)',
          '10': 'rgba(139,94,60,0.10)',
          '15': 'rgba(139,94,60,0.15)',
          '20': 'rgba(139,94,60,0.20)',
          '30': 'rgba(139,94,60,0.30)',
          '40': 'rgba(139,94,60,0.40)',
          '50': 'rgba(139,94,60,0.50)',
          '60': 'rgba(139,94,60,0.60)',
          '70': 'rgba(139,94,60,0.70)',
        },
        leaf: {
          DEFAULT: '#4A7C59',
          light: '#5e9e72',
          '10': 'rgba(74,124,89,0.10)',
        },
        gold: {
          DEFAULT: '#D4A017',
          light: '#e8b422',
          '20': 'rgba(212,160,23,0.20)',
        },
        charcoal: { DEFAULT: '#2C2C2C' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      // Only keep animations we actually use in templates
      animation: {
        'slide-in': 'slideIn 0.35s cubic-bezier(0.22,1,0.36,1) forwards',
        'bounce-in': 'bounceIn 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config