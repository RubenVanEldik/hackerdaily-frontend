<template>
  <div>
    <comments-header
      v-if="story || storyPreview"
      :story="story || storyPreview"
    />
    <fallback
      :is-loading="$apollo.loading"
      :is-empty="!story"
      loading-message="Loading comments..."
      empty-message="The comments for this story are not saved."
    >
      <comments-all :story="story" />
    </fallback>
  </div>
</template>
<script>
import commentsQuery from '~/apollo/fetchComments.gql'

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.story)
  },
  computed: {
    storyPreview () {
      // This is a ridiculously ugly solution, please let me know if there's a better way! (https://github.com/vuejs/vue-apollo/discussions/1075)
      return this.$apolloProvider.defaultClient.cache.data.data[`stories:${this.$route.params.story}`]
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
  },
  head () {
    return {
      title: this.story?.title
    }
  }
}
</script>
