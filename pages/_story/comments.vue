<template>
  <fallback
    :is-loading="$apollo.loading"
    :is-empty="!story"
    loading-message="Loading comments..."
    empty-message="The comments for this story are not saved."
  >
    <comments-header :story="story" />
    <comments-all :story="story" />
  </fallback>
</template>
<script>
import commentsQuery from '~/apollo/fetchComments.gql'
import articleQuery from '~/apollo/fetchArticle.gql'

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.story)
  },
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
