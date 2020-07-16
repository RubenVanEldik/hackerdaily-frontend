<template>
  <div v-if="stories && stories.length">
    <story-item
      v-for="(story, index) in stories"
      :key="story.id"
      :story="story"
      :position="index + 1"
    />
  </div>
  <div
    v-else
    class="text-center text-gray-700 pt-16 italic"
  >
    {{ loading ? 'Loading stories...' : 'There are no stories saved for this day.' }}
  </div>
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
