import SimpleAnalytics from 'simple-analytics-vue'
import Vue from 'vue'

export default ({ $config }) => {
  Vue.use(SimpleAnalytics, {
    skip: !$config.SIMPLE_ANALYTICS_URL || $config.NODE_ENV !== 'production',
    domain: $config.SIMPLE_ANALYTICS_URL
  })
}
