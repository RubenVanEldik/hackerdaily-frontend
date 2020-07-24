import SimpleAnalytics from 'simple-analytics-vue'
import Vue from 'vue'

Vue.use(SimpleAnalytics, {
  skip: process.env.NODE_ENV !== 'production',
  domain: process.env.SIMPLE_ANALYTICS_URL
})
