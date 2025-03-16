/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF1A55',
        secondary: '#1A1A1A',
        'brand-black': '#1A1A1A',
        'brand-black-light': '#2A2A2A',
        'gray-light': '#6c757d',
      },
      spacing: {
        'semi': '15px',
        'xlarge': '48px',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        merriweather: ['Merriweather', 'serif'],
      },
      fontSize: {
        'xs': '0.85rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.25rem',
        'xl': '7rem',
      },
      backgroundImage: {
        'brand-pattern': "url('~/assets/images/em_backdrop_animation.svg')",
      },
      height: {
        '70': '70vh',
        '260': '260px',
      },
      boxShadow: {
        sm: '0 2px 4px rgba(0,0,0,0.1)',
        DEFAULT: '0 4px 6px rgba(0,0,0,0.1)',
        lg: '0 10px 15px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
} 