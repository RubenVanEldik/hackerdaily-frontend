<template>
  <div v-if="story">
    <comments-header :story="story" />
    <comments-all :story="story" />
  </div>
  <div
    v-else-if="$apollo.loading"
    class="fallback-message"
  >
    Loading comments...
  </div>
  <div
    v-else
    class="fallback-message"
  >
    The comments for this story are not saved.
  </div>
</template>
<script>
import query from '~/apollo/queries/fetchComments.gql'

export default {
  apollo: {
    story: {
      query,
      variables () {
        return {
          id: this.$route.params.story
        }
      }
    }
  }
}
</script>
