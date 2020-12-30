<template>
  <fallback
    :is-loading="$apollo.loading"
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
      class="block bg-gray-200 dark:bg-gray-700 rounded p-2 mt-4 text-center text-gray-700 dark:text-gray-300"
    >
      This is a beta, let me know what you think! 🙏
    </nuxt-link>
  </fallback>
</template>

<script>
import query from '~/apollo/storiesWithinTimeframeQuery.gql'

export default {
  props: {
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    }
  },
  apollo: {
    stories: {
      query,
      variables () {
        return {
          startDate: this.startDate,
          endDate: this.endDate
        }
      }
    }
  }
}
</script>
