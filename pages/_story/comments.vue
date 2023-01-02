<template>
  <div>
    <comment-list-header
      v-if="story || storyPreview"
      :story="story || storyPreview"
      :site-name="siteName"
      :is-loading="$apollo.loading"
    />
    <fallback
      :is-loading="$apollo.loading"
      :is-empty="!story"
      loading-message="Loading comments..."
      empty-message="The comments for this story are not saved."
    >
      <comment-list :story="story" />
    </fallback>
  </div>
</template>
<script>
import Url from 'url-parse'
import commentsQuery from '~/apollo/fetchComments.gql'

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.story)
  },
  computed: {
    storyPreview () {
      // This is a ridiculously ugly solution, please let me know if there's a better way! (https://github.com/vuejs/vue-apollo/discussions/1075)
      return this.$apolloProvider.defaultClient.cache.data.data[`stories:${this.$route.params.story}`]
    },
    siteName () {
      const storyUrl = this.story?.url ?? this.storyPreview?.url

      // Don't parse the URL if none is available
      if (!storyUrl) {
        return undefined
      }

      const { host } = new Url(storyUrl)
      return host.replace('www.', '') || undefined
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
    // Get the story or story preview
    const story = this.story ?? this.storyPreview

    // Don't set the header if no story is available
    if (!story) {
      return
    }

    // Set the title and description
    return {
      title: story?.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: story.title
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: story.title
        },
        {
          hid: 'description',
          name: 'description',
          content: `${story.score} points · ${this.siteName}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${story.score} points · ${this.siteName}`
        }
      ]
    }
  }
}
</script>
