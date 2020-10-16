<template>
  <div
    v-if="storyType"
    class="bg-red-700 dark:bg-red-600 inline-block leading-normal text-orange-100 rounded-sm"
    :class="{ 'text-sm sm:text-xs h-5 sm:h-4 mr-1 px-1': !large, 'px-2': large }"
    v-text="storyType"
  />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    large: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    storyType () {
      if (this.title.startsWith('Ask HN: ')) {
        return 'Ask HN'
      } else if (this.title.startsWith('Show HN: ')) {
        return 'Show HN'
      }
      return false
    }
  }
}
</script>
