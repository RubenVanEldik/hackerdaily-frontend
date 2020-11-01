<template>
  <div>
    <h1 v-text="article.headline" />
    <div class="flex flex-col italic">
      <icon-with-text
        :text="datePublished"
        icon="calendar-day"
      />
      <icon-with-text
        v-if="article.author"
        :text="`by ${article.author.replace(/^twitter:/, '')}`"
        :href="authorTwitterUrl"
        icon="pen"
      />
      <icon-with-text
        :href="article.canonical_url"
        :text="siteName"
        icon="globe-africa"
      />
      <icon-with-text
        :to="`/${$route.params.story}/comments`"
        :text="`${descendants} ${descendants === 1 ? 'comment' : 'comments'}`"
        icon="comments"
      />
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
    authorTwitterUrl () {
      return this.article.author.startsWith('twitter:@')
        ? `https://twitter.com/${this.article.author.replace(/^twitter:@/, '')}`
        : null
    },
    siteName () {
      const { host } = new Url(this.article.canonical_url)
      return host.replace('www.', '') || undefined
    }
  }
}
</script>
