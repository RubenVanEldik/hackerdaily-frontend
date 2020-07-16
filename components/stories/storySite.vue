<template>
  <span class="text-gray-600 text-sm">
    ({{ siteName }})
  </span>
</template>

<script>
import Url from 'url-parse'

export default {
  props: {
    url: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    siteName () {
      const { host } = new Url(this.url)
      return host.replace('www.', '') || undefined
    }
  }
}
</script>
