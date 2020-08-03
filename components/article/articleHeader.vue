<template>
  <div>
    <h1 v-text="article.headline" />
    <div class="flex flex-col italic">
      <div>
        <span
          v-if="datePublished"
          v-text="datePublished"
        />
        <article-author :author="article.author" />
      </div>
      <a
        :href="article.canonical_url"
        v-text="siteName"
      />
      <nuxt-link :to="`/${$route.params.story}/comments`">
        {{ descendants }} {{ descendants === 1 ? 'comment' : 'comments' }}
      </nuxt-link>
    </div>
    <img
      v-if="article.main_image_unique"
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
    }
  }
}
</script>
