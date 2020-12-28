export default {
  ssr: false,
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
      { href: '/splashscreens/iphone5_splash.png', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { href: '/splashscreens/iphone6_splash.png', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { href: '/splashscreens/iphoneplus_splash.png', media: '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)', rel: 'apple-touch-startup-image' },
      { href: '/splashscreens/iphonex_splash.png', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)', rel: 'apple-touch-startup-image' },
      { href: '/splashscreens/iphonexr_splash.png', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { href: '/splashscreens/iphonexsmax_splash.png', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)', rel: 'apple-touch-startup-image' },
      { href: '/splashscreens/ipad_splash.png', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { href: '/splashscreens/ipadpro1_splash.png', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { href: '/splashscreens/ipadpro3_splash.png', media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { href: '/splashscreens/ipadpro2_splash.png', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: process.env.BACKEND_URL }
    ]
  },
  plugins: [
    { src: '~/plugins/simpleAnalytics', mode: 'client' }
  ],
  buildModules: []
    .concat(process.env.NODE_ENV === 'production' ? '@teamnovu/nuxt-breaky' : [])
    .concat(process.env.NODE_ENV === 'production' ? '@nuxtjs/fontawesome' : [])
    .concat(process.env.NODE_ENV === 'production' ? '@nuxtjs/eslint-module' : [])
    .concat(process.env.NODE_ENV === 'production' ? '@nuxtjs/tailwindcss' : []),
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/pwa'
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
      mobileAppIOS: true
    },
    manifest: {
      background_color: '#f6f6ef',
      display: 'standalone',
      theme_color: '#c53030'
    }
  },
  fontawesome: {
    component: 'Icon',
    icons: {
      solid: ['faThumbtack', 'faBook', 'faStar', 'faCalendarDay', 'faPen', 'faGlobeAfrica', 'faComments']
    }
  }
}
