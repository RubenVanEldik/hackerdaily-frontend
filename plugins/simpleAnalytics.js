import SimpleAnalytics from 'simple-analytics-vue'
import Vue from 'vue'

export default (context) => {
  Vue.use(SimpleAnalytics, {
    skip: context.$config.NODE_ENV !== 'production',
    domain: context.$config.SIMPLE_ANALYTICS_URL
  })
}
