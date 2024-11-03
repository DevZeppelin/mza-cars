/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '850px',
    },
    extend: {
      colors: {
        primary: '#000',
        liveColor: '#FF0303',
        darkColor: '#181C14',
        // darkColor: '#B20600',
        background: '#FFF',
        secundary: '#CBDCEB',
      },
      fontFamily: {
        body: ['Dosis']
      }
    },
  },

  variants: {
    borderColor: ["hover", "focus"],
    borderStyle: ['hover', 'focus'],

  },
  plugins: []
}