<template>
  <div>
    <div
      v-if="fallbackMessage"
      class="text-center mt-16 italic text-gray-600"
      v-text="fallbackMessage"
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
      isOffline: process.client && !navigator.onLine // Check if its run in a browser and if so check if there is an internet connection
    }
  },
  computed: {
    fallbackMessage () {
      if (this.isLoading) return this.loadingMessage
      else if (this.isEmpty && this.isOffline) return 'There is no internet connection.'
      else if (this.isEmpty) return this.emptyMessage
      return null
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
      if (type === 'online') {
        this.isOffline = false
      } else if (type === 'offline') {
        this.isOffline = true
      }
    }
  }
}
</script>
