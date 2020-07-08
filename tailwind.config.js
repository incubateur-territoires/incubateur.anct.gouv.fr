module.exports = {
  purge: [
    './src/**/*.vue'
  ],
  theme: {    
    extend: {
      colors: {
        blue: '#3b5fa9',
        green: '#009f79',
        yellow: {
          lighter: '#FFF080',
          default: '#ffe000',
          dark: '#807100',
        },
        navy: '#273475',
        black: '#212121'
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
    backgroundColor: ['hover']
  },
  plugins: [],
}
