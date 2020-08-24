<template>
  <div
    v-if="article"
    class="flex justify-center"
  >
    <article class="prose break-words overflow-auto">
      <article-header
        :article="article"
        :descendants="story.descendants"
      />
      <article-content :content="articleContent" />
    </article>
  </div>
  <div
    v-else-if="$apollo.loading"
    class="fallback-message"
  >
    Loading article...
  </div>
  <div
    v-else
    class="fallback-message"
  >
    We have not saved this Hacker News article.
  </div>
</template>

<script>
import articleQuery from '~/apollo/queries/fetchArticle.gql'
import commentsQuery from '~/apollo/queries/fetchComments.gql'

export default {
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
