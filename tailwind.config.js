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
          100: '#fbfaf9',
          200: '#f5f5f5',
          // 300: '#e5e5e5',
          300: '#e8e9e9',
          400: '#d4d4d4',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#1a202c',
        },
        blue: {
          // 600: '#1A88F8',
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
              h3: {
                fontSize: em(24, 18),
                // marginTop: em(56, 30),
                // marginBottom: em(32, 30),
              },
            },
          ],
        },
        DEFAULT: {
          css: {
            // pre: false,
            // code: false,
            code: {
              backgroundColor: theme('colors.gray.200'),
              // border: '1px solid',
              // borderColor: theme('colors.gray.300'),
              paddingLeft: '6px',
              paddingRight: '6px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
              // fontSize: '80% !important',
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
              // color: theme('colors.gray.600'),
              paddingleft: '0',
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