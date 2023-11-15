import createRSSFeed from './createRSSFeed'
export default {
  ssr: false,
  target: 'server',
  loading: false,
  loadingIndicator: {
    name: 'pulse',
    color: '#b91c1c',
    background: '#f6f6ef'
  },
  components: true,
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    BACKEND_URL: `https://${process.env.BACKEND_URL}`,
    SIMPLE_ANALYTICS_URL: process.env.SIMPLE_ANALYTICS_URL
  },
  privateRuntimeConfig: {
  },
  head: {
    link: [
      { rel: 'apple-touch-startup-image', href: '/splash/light/8.png', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)' },
      { rel: 'apple-touch-startup-image', href: '/splash/light/8-plus.png', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)' },
      { rel: 'apple-touch-startup-image', href: '/splash/light/11.png', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)' },
      { rel: 'apple-touch-startup-image', href: '/splash/light/11-pro.png', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)' },
      { rel: 'apple-touch-startup-image', href: '/splash/light/11-pro-max.png', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)' },
      { rel: 'apple-touch-startup-image', href: '/splash/light/13-mini.png', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)' },
      { rel: 'apple-touch-startup-image', href: '/splash/light/13-mini.png', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 2.88)' },
      { rel: 'apple-touch-startup-image', href: '/splash/light/14.png', media: '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)' },
      { rel: 'apple-touch-startup-image', href: '/splash/light/14-max.png', media: '(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)' },
      { rel: 'apple-touch-startup-image', href: '/splash/light/15-pro.png', media: '(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3)' },
      { rel: 'apple-touch-startup-image', href: '/splash/light/15-pro-max.png', media: '(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3)' },
      { rel: 'apple-touch-startup-image', href: '/splash/dark/8.png', media: '(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)' },
      { rel: 'apple-touch-startup-image', href: '/splash/dark/8-plus.png', media: '(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)' },
      { rel: 'apple-touch-startup-image', href: '/splash/dark/11.png', media: '(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)' },
      { rel: 'apple-touch-startup-image', href: '/splash/dark/11-pro.png', media: '(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)' },
      { rel: 'apple-touch-startup-image', href: '/splash/dark/11-pro-max.png', media: '(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)' },
      { rel: 'apple-touch-startup-image', href: '/splash/dark/13-mini.png', media: '(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)' },
      { rel: 'apple-touch-startup-image', href: '/splash/dark/13-mini.png', media: '(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 2.88)' },
      { rel: 'apple-touch-startup-image', href: '/splash/dark/14.png', media: '(prefers-color-scheme: dark) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)' },
      { rel: 'apple-touch-startup-image', href: '/splash/dark/14-max.png', media: '(prefers-color-scheme: dark) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)' },
      { rel: 'apple-touch-startup-image', href: '/splash/dark/15-pro.png', media: '(prefers-color-scheme: dark) and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3)' },
      { rel: 'apple-touch-startup-image', href: '/splash/dark/15-pro-max.png', media: '(prefers-color-scheme: dark) and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3)' },  
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: `https://${process.env.BACKEND_URL}` }
    ]
  },
  plugins: [
    { src: '~/plugins/simpleAnalytics', mode: 'client' }
  ],
  buildModules: ['@nuxtjs/tailwindcss'].concat(process.env.NODE_ENV !== 'production' ? '@nuxtjs/eslint-module' : []),
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/pwa',
    '@nuxtjs/feed'
  ],
  build: {
  },
  generate: {
    fallback: true
  },
  apollo: {
    clientConfigs: {
      default: '~/apollo.config.js'
    },
    defaultOptions: {
      $query: {
        fetchPolicy: 'cache-first' // The cache doesn't work correctly when the 'cache-and-network' policy is used
      }
    }
  },
  tailwindcss: {
    exposeConfig: true
  },
  pwa: {
    meta: {
      viewport: 'width=device-width, initial-scale=1',
      theme_color: '#c53030',
      mobileAppIOS: true,
      appleStatusBarStyle: 'black'
    },
    manifest: {
      background_color: '#f6f6ef',
      display: 'standalone',
      theme_color: '#c53030'
    }
  },
  feed: createRSSFeed
}
