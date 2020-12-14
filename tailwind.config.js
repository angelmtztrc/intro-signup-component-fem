module.exports = {
  purge: {
    enabled: true,
    content: ['./**/*.html']
  },
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
      },
      boxShadow: {
        primary: '0 8px 0 rgba(0, 0, 0, 0.15)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
