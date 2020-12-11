module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-red': 'hsl(0, 100%, 74%)',
        'primary-green': 'hsl(154, 59%, 51%)',
        'accent-blue': 'hsl(248, 32%, 49%)',
        'neutral-darkblue': 'hsl(249, 10%, 26%)',
        'neutral-grayishblue': 'hsl(246, 25%, 77%)'
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
