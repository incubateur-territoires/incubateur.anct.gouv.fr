module.exports = {
  purge: [
    './src/**/*.vue'
  ],
  theme: {    
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      inset: {
        '1/2': '50%',
        '-1/2': '-50%',
        '-40': '-10rem',
        '-32': '-8rem'
      },
      colors: {
        blue: '#3b5fa9',
        green: {
          DEFAULT: '#009f79',
          relance: '#2fac66'
        },
        yellow: {
          light: '#FFF080',
          DEFAULT: '#ffe000',
          dark: '#807100',
        },
        navy: '#273475',
        black: '#212121',
      },
      fontFamily: {
        marianne: ["Marianne"]
      },
      boxShadow: {
        yellow: '#ffe000 5px 5px 0px'
      }
    },
  },
  variants: {
    backgroundColor: ['hover'],
    extend: {
      opacity: ['disabled']
    }
  },
  plugins: [],
}
