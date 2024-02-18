/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        darkTheme: '#1E1E1E',
        lightTheme: '#F5F6FB'
      },
      textColor: {
        darkTheme: '#F5F6FB',
        lightTheme: '#1E1E1E'
      },
      width: {
        half: '50%'
      },
      fontFamily: {
        judson: 'Judson, serif',
        poppins: 'Poppins, serif'
      }
    }
  },
  plugins: []
}
