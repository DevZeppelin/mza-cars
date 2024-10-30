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
        primary: '#131842',
        secundary: '#E68369',
        lowContrast: '#ECCEAE',
        background: '#EAE4DD',
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