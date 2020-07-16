<template>
  <div
    v-if="storyType"
    class="bg-red-700 inline-block text-sm text-orange-100 rounded-sm px-1 mr-1"
  >
    {{ storyType }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    storyType () {
      if (this.title.startsWith('Ask HN: ')) return 'Ask HN'
      if (this.title.startsWith('Show HN: ')) return 'Show HN'
      return false
    }
  }
}
</script>
