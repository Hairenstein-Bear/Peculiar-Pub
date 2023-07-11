const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        letterSpacing: {
            tightest: '-.075em',
            tighter: '-.05em',
            tight: '-.025em',
            normal: '0',
            wide: '.025em',
            wider: '.05em',
            widest: '.25em',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'red': '#f20024',
            'gray': '#808080',
            'black': '#000000',
            'white': '#ffffff',
            'purple': '#3f3cbb',
            'brown': '#413227',
            'tan': '#C29D7A',
            'metal': '#565584',
            'tahiti': '#3ab7bf',
            'silver': '#ecebff',
            'bubble-gum': '#ff77e9',
            'bermuda': '#78dcca',
          },
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                kadwa: ['Kadwa', 'serif']
            },
            minWidth: {
                '1/2': '50%',
              },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
