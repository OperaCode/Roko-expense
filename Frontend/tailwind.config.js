/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        fontFamily: {
          headerFont: ['Merriweather', 'serif'],
          bodyFont: ['Inter', 'sans-serif'],
        },
        colors: {
          bgColor: '#5D6DCA',
        },
        screens: {
          'xs': '400px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        }
      },
  },
  plugins: [],
}