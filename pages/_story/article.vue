<template>
  <fallback
    class="flex justify-center"
    :is-loading="$apollo.loading"
    :is-empty="!article"
    loading-message="Loading article..."
    empty-message="The article for this story is not saved."
  >
    <article class="prose dark:prose-dark break-words overflow-auto">
      <article-header
        :article="article"
        :descendants="story && story.descendants"
      />
      <article-content :content="articleContent" />
    </article>
  </fallback>
</template>

<script>
import articleQuery from '~/apollo/fetchArticle.gql'
import commentsQuery from '~/apollo/fetchComments.gql'

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.story)
  },
  head () {
    return {
      title: this.story?.webpage?.article?.headline
    }
  },
  apollo: {
    story: {
      query: articleQuery,
      variables () {
        return {
          id: this.$route.params.story
        }
      },
      result ({ loading }) {
        // Pre-fetch the comments when the article has been loaded
        if (!loading) {
          this.$apollo.query({
            query: commentsQuery,
            variables: { id: this.$route.params.story },
            fetchPolicy: 'cache-first' // Only fetch when its not yet in the cache
          })
        }
      }
    }
  },
  computed: {
    article () {
      return this.story?.webpage?.article
    },
    articleContent () {
      return this.article?.html.replace(/<blockquote><p>["“”](.*)["“”]<\/p><\/blockquote>/g, '<blockquote><p>$1</p></blockquote>')
    }
  }
}
</script>
