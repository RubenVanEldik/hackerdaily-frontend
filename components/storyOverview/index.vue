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
