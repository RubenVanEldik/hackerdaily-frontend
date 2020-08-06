/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      serif: ['"Source Serif Pro"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['"Source Code Pro"', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
    },
    extend: {
      colors: {
        gray: {
          100: '#f6f6ef',
          200: '#ddddd7',
          300: '#c4c4bf',
          400: '#acaca7',
          500: '#93938f',
          600: '#7b7b77',
          700: '#494947',
          800: '#31312f',
          900: '#181817'
        }
      }
    },
    typography: theme => ({
      default: {
        css: {
          color: theme('colors.gray.700'),
          a: {
            color: theme('colors.red.700'),
            textDecoration: 'no-underline'
          },
          'a:hover': {
            textDecoration: 'underline'
          },
          strong: {
            color: theme('colors.gray.800')
          },
          'ol > li::before': {
            color: theme('colors.gray.600')
          },
          'ul > li::before': {
            backgroundColor: theme('colors.gray.400')
          },
          hr: {
            borderColor: theme('colors.gray.300')
          },
          blockquote: {
            color: theme('colors.gray.900'),
            borderLeftColor: theme('colors.gray.300')
          },
          'blockquote p:first-of-type::before': {
            content: 'none'
          },
          'blockquote p:last-of-type::after': {
            content: 'none'
          },
          h1: {
            color: theme('colors.gray.900')
          },
          h2: {
            color: theme('colors.gray.900')
          },
          h3: {
            color: theme('colors.gray.900')
          },
          h4: {
            color: theme('colors.gray.900')
          },
          'figure figcaption': {
            color: theme('colors.gray.600'),
            fontStyle: 'italic',
            textAlign: 'center'
          },
          'figure a img': {
            margin: 'auto'
          },
          code: {
            color: theme('colors.gray.900')
          },
          pre: {
            color: theme('colors.gray.200'),
            backgroundColor: theme('colors.gray.800')
          },
          thead: {
            color: theme('colors.gray.900'),
            borderBottomColor: theme('colors.gray.400')
          },
          'tbody tr': {
            borderBottomColor: theme('colors.gray.300')
          }
        }
      }
    })
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
