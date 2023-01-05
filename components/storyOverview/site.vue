<template>
  <span
    v-if="url"
    class="text-gray-500 text-sm"
    v-text="`(${siteName})`"
  />
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
