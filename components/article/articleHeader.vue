<template>
  <div>
    <h1>
      {{ article.headline }}
    </h1>
    <div class="flex flex-col italic">
      <div>
        <span v-if="datePublished">
          {{ datePublished }},
        </span>
        <article-author :author="article.author" />
      </div>
      <nuxt-link :to="`/${$route.params.story}/comments`">
        {{ descendants }} {{ descendants === 1 ? 'Comment' : 'Comments' }}
      </nuxt-link>
      <a :href="article.canonical_url">
        {{ siteName }}
      </a>
    </div>
    <img
      v-if="mainImageNotIncludedInArticle"
      :src="article.main_image"
    >
    </img>
  </div>
</template>

<script>
import Url from 'url-parse'
import dayjs from 'dayjs'

export default {
  props: {
    article: {
      type: Object,
      required: true
    },
    descendants: {
      type: Number,
      required: true
    }
  },
  computed: {
    datePublished () {
      if (!this.article.published_at) return null
      return dayjs(this.article.published_at).format('dddd D MMMM YYYY')
    },
    siteName () {
      const { host } = new Url(this.article.canonical_url)
      return host.replace('www.', '') || undefined
    },
    mainImageNotIncludedInArticle () {
      const mainImage = this.article && this.article.main_image
      return mainImage && !this.article.html.includes(mainImage)
    }
  }
}
</script>
