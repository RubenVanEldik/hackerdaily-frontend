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
import commentsQuery from '~/apollo/queries/fetchComments.gql'
import articleQuery from '~/apollo/queries/fetchArticle.gql'

export default {
  apollo: {
    story: {
      query: commentsQuery,
      variables () {
        return {
          id: this.$route.params.story
        }
      },
      result ({ loading }) {
        // Pre-fetch the article when the comments have been loaded
        if (!loading) {
          this.$apollo.query({
            query: articleQuery,
            variables: { id: this.$route.params.story },
            fetchPolicy: 'cache-first' // Only fetch when its not yet in the cache
          })
        }
      }
    }
  }
}
</script>
