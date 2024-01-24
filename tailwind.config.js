module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                customDarkGray: '#B9B9B9',
                customDarkerGray: '#848484',
                customGray: '#C0C0C0',
                customPurple: '#561336',
                customRed: '#984d64',
                customGold: '#bf9027',
                customDark: '#7a0707',
            },
            transitionDuration: {
                '2000': '2000ms',
            },
            fontFamily: {
                'sans': ['Montserrat', 'sans-serif'],
                'old-standard-tt': ['Old Standard TT', 'serif'],
                'tajawal': ['Tajawal', 'sans'],
                'classico': ['Classico', 'sans'],
                sevillana: ['Sevillana', 'sans'],
                'dancing-script': ['Dancing Script', 'cursive'],
            },
            zIndex: {
                '60' : '60',
            },
        },
    },
    plugins: [],
};
