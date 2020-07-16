<template>
  <div
    v-if="article"
    class="flex justify-center"
  >
    <article class="prose">
      <article-header :article="article" />
      <article-content :content="article.html" />
    </article>
  </div>
  <div
    v-else-if="!$apollo.loading"
    class="text-center pt-12 italic"
  >
    We have not saved this Hacker News article.
  </div>
</template>

<script>
import query from '~/apollo/fetchArticle.gql'

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
    }
  }
}
</script>
