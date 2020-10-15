<template>
  <fallback
    :is-loading="loading"
    :is-empty="!stories || !stories.length"
    loading-message="Loading stories..."
    empty-message="There are no stories saved for this day."
  >
    <story-overview-item
      v-for="(story, index) in stories"
      :key="story.id"
      :story="story"
      :position="index + 1"
    />
    <nuxt-link
      to="/feedback"
      class="block bg-gray-200 rounded p-2 mt-4 text-center text-gray-700"
    >
      This is a beta, let me know what you think! 🙏
    </nuxt-link>
  </fallback>
</template>

<script>
export default {
  props: {
    stories: {
      type: Array,
      required: false,
      default: null
    },
    loading: {
      type: Boolean,
      required: true
    }
  }
}
</script>
