module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'abel': ['Abel', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif']
       },
       fontSize: {
        'custom-xl': '5rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
