<template>
  <div class="prose">
    <story-type-badge
      :title="story.title"
      class="mb-1"
      large
    />
    <h1>
      {{ storyTitle }}
    </h1>
    <div class="flex flex-col italic font-semibold">
      <div>
        {{ story.score }} points · by {{ story.user.id }}
      </div>
      <nuxt-link
        v-if="story.webpage && story.webpage.article"
        :to="`/${$route.params.story}/article`"
      >
        {{ Math.ceil(story.webpage.article.length / 220) }} minute read
      </nuxt-link>
      <a
        v-if="story.url"
        :href="story.url"
      >
        {{ siteName }}
      </a>
    </div>
    <comment-body
      v-if="story.text"
      :text="story.text"
    />
  </div>
</template>

<script>
import Url from 'url-parse'

export default {
  props: {
    story: {
      type: Object,
      required: true
    }
  },
  computed: {
    siteName () {
      const { host } = new Url(this.story.url)
      return host.replace('www.', '') || undefined
    },
    storyTitle () {
      return this.story.title.replace(/^(Ask|Show) HN: /, '')
    }
  }
}
</script>
