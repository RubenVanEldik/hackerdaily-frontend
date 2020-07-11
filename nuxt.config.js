import { InMemoryCache } from 'apollo-cache-inmemory'

export default {
  mode: 'universal',
  target: 'server',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  plugins: [
  ],
  components: true,
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
          return new InMemoryCache()
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
  webfontloader: {
    google: {
      families: ['Source Serif Pro:400,600,700']
    }
  }
}
