/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf9',
          100: '#d1fae5',
          200: '#299179', // Verde Esmeralda claro
          500: '#246548', // Verde Institucional Base
          600: '#1B6458', // Verde Bosque
          800: '#1E4235', // Verde Oscuro
          900: '#193831', // Verde Profundo
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}