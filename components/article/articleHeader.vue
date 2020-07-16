<template>
  <div>
    <h1>
      {{ article.headline }}
    </h1>
    <em>
      <span v-if="datePublished">
        {{ datePublished }}
      </span>
      <span v-if="article.author">
        by {{ article.author }}
      </span>
    </em>
    <img
      v-if="mainImageNotIncludedInArticle"
      :src="article.main_image"
    >
    </img>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    datePublished () {
      if (!this.article.published_at) return null
      return dayjs(this.article.published_at).format('dddd D MMMM YYYY')
    },
    mainImageNotIncludedInArticle () {
      const mainImage = this.article && this.article.main_image
      return mainImage && !this.article.html.includes(mainImage)
    }
  }
}
</script>
