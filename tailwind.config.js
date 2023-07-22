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
      mono: [...fontFamily.mono],
    },
    extend: {
      colors: {
        gray: {
          0: '#fff',
          // 100: '#fafafa',
          // 100: '#fbfaf9',
          // 200: '#E8E8E8',
          600: '#57534E',
          950: '#1a202c',
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
              h1: {
                fontSize: em(40, 18),
              },
              h2: {
                marginTop: em(30, 20),
                marginBottom: em(16, 20),
              },
            },
          ],
        },
        DEFAULT: {
          css: {
            // pre: false,
            // code: false,
            code: {
              backgroundColor: theme('colors.gray.100'),
              color: theme('colors.gray.600'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
              fontSize: '85% !important',
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
              background: theme('colors.white'),
              borderColor: theme('colors.gray.200'),
              border: '1px solid',
            },
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
              color: theme('colors.black'),
              fontWeight: 400,

              '&:hover': {
                  color: theme('colors.black'),
              },
            },
            body: {
              color:theme('colors.gray.600'),
            },
            blockquote: {
              color:theme('colors.gray.600'),
            }
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