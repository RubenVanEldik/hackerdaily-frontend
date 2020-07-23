import Vue from 'vue'
import { persistCache } from 'apollo-cache-persist'
import cache from '../apollo/getCache'

export default async () => {
  await persistCache({
    cache,
    debug: true,
    storage: window.localStorage,
    maxSize: false
  })

  Vue.prototype.$cacheReady = true
}
