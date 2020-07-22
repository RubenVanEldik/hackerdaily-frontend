<template>
  <div
    v-if="article"
    class="flex justify-center"
  >
    <article class="prose">
      <article-header
        :article="article"
        :descendants="story.descendants"
      />
      <article-content :content="articleContent" />
    </article>
  </div>
  <div
    v-else-if="!$apollo.loading"
    class="fallback-message"
  >
    We have not saved this Hacker News article.
  </div>
</template>

<script>
import query from '~/apollo/queries/fetchArticle.gql'

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
