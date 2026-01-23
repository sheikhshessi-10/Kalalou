/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme (AI Support)
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#141414',
        'bg-tertiary': '#1a1a1a',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'accent': '#ffffff',
        'accent-dim': '#404040',
        'border': '#2a2a2a',
        // Light theme (Kalalou)
        'kalalou-bg': '#F7F4EF',
        'kalalou-ink': '#1C1C1C',
        'kalalou-secondary': '#6F6F6F',
        'kalalou-accent': '#B46A4C',
        'kalalou-divider': '#DDD8D0',
        'kalalou-card': '#FFFFFF',
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
        'fadeIn': 'fadeIn 0.8s ease forwards',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          'to': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

