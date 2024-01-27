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
                customDark: '#6A001A',
                light: '#C0C0C0',
                DEFAULT: '#A8A8A8',
                dark: '#808080',
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
                greatVibes: ['Great Vibes', 'cursive'],
            },
            zIndex: {
                '60': '60',
            },
        },
    },
    plugins: [],
};
