import cache from './apollo/getCache'

export default {
  mode: 'universal',
  target: 'server',
  loading: false,
  components: true,
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    BACKEND_URL: process.env.BACKEND_URL,
    SIMPLE_ANALYTICS_URL: process.env.SIMPLE_ANALYTICS_URL
  },
  privateRuntimeConfig: {
  },
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    { src: '~/plugins/persistCache', mode: 'client' },
    { src: '~/plugins/simpleAnalytics.js', mode: 'client' }
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@teamnovu/nuxt-breaky'
  ],
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/pwa',
    'nuxt-webfontloader'
  ],
  build: {
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL,
        cache () {
          return cache
        }
      }
    },
    defaultOptions: {
      $query: {
        fetchPolicy: 'cache-and-network'
      }
    }
  },
  tailwindcss: {
    exposeConfig: true
  },
  pwa: {
    meta: {
      theme_color: '#c53030'
    },
    manifest: {
      background_color: '#f6f6ef',
      display: 'fullscreen',
      theme_color: '#c53030'
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.gstatic.com/.*.woff2',
          handler: 'cacheFirst'
        }
      ]
    }
  },
  webfontloader: {
    google: {
      families: ['Source Serif Pro:400,600,700', 'Source Code Pro:400,600']
    }
  }
}
