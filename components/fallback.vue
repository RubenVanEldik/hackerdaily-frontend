<template>
  <div>
    <div
      v-if="isLoading"
      class="text-center mt-16 italic"
      v-text="loadingMessage"
    />
    <div
      v-else-if="isEmpty && isOffline"
      class="text-center mt-16 italic"
      v-text="'There is no internet connection.'"
    />
    <div
      v-else-if="isEmpty"
      class="text-center mt-16 italic"
      v-text="emptyMessage"
    />
    <slot v-else />
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    },
    loadingMessage: {
      type: String,
      required: false,
      default: null
    },
    isEmpty: {
      type: Boolean,
      required: false,
      default: false
    },
    emptyMessage: {
      type: String,
      required: false,
      default: null
    }
  },
  data () {
    return {
      isOffline: process.client && !navigator.onLine
    }
  },
  mounted () {
    window.addEventListener('online', this.toggleConnectivity)
    window.addEventListener('offline', this.toggleConnectivity)
  },
  beforeDestroy () {
    window.removeEventListener('online', this.toggleConnectivity)
    window.removeEventListener('offline', this.toggleConnectivity)
  },
  methods: {
    toggleConnectivity ({ type }) {
      if (type === 'online') this.isOnline = true
      else if (type === 'offline') this.isOnline = false
    }
  }
}
</script>
