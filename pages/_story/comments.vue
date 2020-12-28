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

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.story)
  },
  head () {
    return {
      title: this.story?.title
    }
  },
  apollo: {
    story: {
      query: commentsQuery,
      variables () {
        return {
          id: this.$route.params.story
        }
      }
    }
  }
}
</script>
