/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0c',
        'bg-secondary': '#141418',
        'accent-primary': '#3b82f6',
        'accent-secondary': '#8b5cf6',
        'text-primary': '#f8fafc',
        'text-secondary': '#94a3b8',
      },
      fontFamily: {
        'main': ['Inter', 'sans-serif'],
        'heading': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
