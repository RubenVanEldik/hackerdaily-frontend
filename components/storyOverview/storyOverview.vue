<template>
  <div v-if="stories && stories.length">
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
  </div>
  <div
    v-else
    class="text-center text-gray-700 pt-16 italic"
    v-text="loading ? 'Loading stories...' : 'There are no stories saved for this day.'"
  />
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
