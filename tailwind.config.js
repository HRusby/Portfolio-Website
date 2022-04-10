module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'base': '#000000',
        'highlight': '#202020',
        'githubDarkBg': '#0D1117',
      },
    },
  },
  plugins: [],
}
