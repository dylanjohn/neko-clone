/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "theme.jsx",
    "./pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // pre: false,
            // code: false
            a: {
              color: theme('colors.indigo.500'),
              '&:hover': {
                  color: theme('colors.indigo.700'),
              },
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
              opacity: 0.98,
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