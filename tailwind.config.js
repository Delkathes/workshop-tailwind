module.exports = {
    purge: ['./components/**/*.{js,jsx}', './pages/**/*.{js,jsx}'],

    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1.125rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem'
            }
        },
        extend: {
            spacing: {
                '2px': '2px',
                '3px': '3px',

                '30%': '30%',

                7.5: '1.8725rem',
                17: '4.25rem',
                18: '4.5rem',
                19: '4.75rem',

                '1/2': '50%',
                '2/3': (2 / 3) * 100 + '%',
                '3/4': (3 / 4) * 100 + '%'
            },
            keyframes: {
                // 'fade-in': {
                //     '0%': { opacity: '0' },
                //     '100%': { opacity: '1' }
                // },
                // 'fade-out': {
                //     '0%': { opacity: '1' },
                //     '100%': { opacity: '0' }
                // },
                animation: {
                    // 'fade-in': 'fade-in 1s ease-in-out forwards',
                    // 'fade-out': 'fade-out 1s ease-in-out forwards',
                    // 'fade-in-500': 'fade-in 0.5s ease-in-out forwards',
                    // 'fade-out-500': 'fade-out 0.5s ease-in-out forwards',
                    // 'fade-in-200': 'fade-in 0.2s ease-in-out forwards',
                    // 'fade-out-200': 'fade-out 0.2s ease-in-out forwards',
                    // 'fade-in-300': 'fade-in 0.3s ease-in-out forwards',
                    // 'fade-out-300': 'fade-out 0.3s ease-in-out forwards'
                },
                colors: {
                    // sky: {
                    //     100: '#f2f7fd',
                    //     200: '#c6dcf6',
                    //     300: '#9ec4f0',
                    //     400: '#72a9e8',
                    //     500: '#4a90e2',
                    //     600: '#2172cf',
                    //     700: '#185395',
                    //     800: '#0f3561',
                    //     900: '#07182c'
                    // }
                }
            }
        }
    },
    variants: {
        extend: {
            margin: ['first', 'last']
            // borderRadius: ['first', 'last'],
            // padding: ['first', 'last', 'responsive'],
            // borderWidth: ['first', 'last'],
            // backgroundColor: ['hover'],
            // borderColor: ['hover']
        }
    }
}
