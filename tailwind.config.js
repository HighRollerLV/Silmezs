module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#C0C0C0',
        customPurple: '#561336',
        customRed: '#984d64',
        customGold: '#bf9027',
        customDark: '#220e19',
      },
      animation: {
        textAnimate: 'textAnimate 3s ease infinite',
      },
      keyframes: {
        textAnimate: {
          '0%, 100%': {
            color: '#C0C0C0', // customGray
          },
          '50%': {
            color: '#bf9027', // customGold
          },
        },
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'old-standard-tt': ['Old Standard TT', 'serif'],
      },
    },
  },
  plugins: [],
};
