/** @type {import('tailwindcss').Config} */
import theme from './theme'
export default {
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...theme
    },
  },
  plugins: [],
}

