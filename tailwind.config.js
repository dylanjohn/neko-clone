const { fontFamily } = require('tailwindcss/defaultTheme')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "theme.jsx",
    "./pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      // sans: [ 'IBM Plex Sans', ...fontFamily.sans],
      mono: ['Fira Code', ...fontFamily.mono],
    },
    extend: {
      colors: {
        gray: {
          0: '#fff',
          100: '#fafafa',
          // 200: '#eaeaea',
          600: '#57534E',
          950: '#09090b',
        },
      },
      typography: (theme) => ({
        lg: {
          css: [
            {
              p: {
                marginTop: em(24, 18),
                marginBottom: em(24, 18),
              },
              h2: {
                marginBottom: em(32, 30),
              },
            },
          ],
        },
        DEFAULT: {
          css: {
            // pre: false,
            // code: false
            h1: {
              fontWeight: '600',
            },
            h2: {
              fontWeight: '600',
            },
            ul: {
              color: theme('colors.gray.600'),
            },
            a: {
              color: theme('colors.blue.500'),
              fontWeight: 400,

              '&:hover': {
                  color: theme('colors.blue.700'),
              },
            },
            body: {
              color:theme('colors.gray.600'),
            },
            code: {
              color: '#86e1fc',
              '&::before': {
                content: `"" !important`,
              },
              '&::after': {
                content: `"" !important`,
              },
              fontWeight: 'normal',
            },
            pre: {
              // opacity: 0.98,
              background: theme('colors.gray.100'),
              lineHeight: 2,
            },
            // end css
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}