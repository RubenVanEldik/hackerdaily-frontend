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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: process.env.BACKEND_URL }
    ]
  },
  plugins: [
    { src: '~/plugins/persistCache', mode: 'client' },
    { src: '~/plugins/simpleAnalytics', mode: 'client' }
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@teamnovu/nuxt-breaky'
  ],
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/pwa'
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
    }
  }
}
