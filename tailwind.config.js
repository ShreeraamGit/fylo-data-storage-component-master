module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'main': 'hsl(229, 57%, 11%)',
                'box-bg': 'hsl(228, 56%, 26%)',
                'small-box-bg': 'hsl(229, 7%, 55%)',
                'font-color': 'hsl(243, 100%, 93%)',
                'color-from': 'hsl(6, 100%, 80%)',
                'color-to': 'hsl(335, 100%, 65%)'
            },
            backgroundImage: {
                'desktop-pattern': "url('/images/bg-desktop.png')",
                'mobile-pattern': "url('/images/bg-mobile.png')",
            },
            borderRadius: {
                'none': '0',
                'sm': '0.125rem',
                DEFAULT: '0.25rem',
                DEFAULT: '4px',
                'md': '0.375rem',
                'lg': '0.5rem',
                'full': '9999px',
                'large': '120px',
            },
            fontFamily: {
                'myfont': ['Poppins']
            },
            fontSize: {
                'mysize': '14px',
            }
        },
    },
    plugins: [],
}