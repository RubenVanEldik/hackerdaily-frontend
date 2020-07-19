<template>
  <div class="prose">
    <h1>
      {{ story.title }}
    </h1>
    <div class="flex flex-col italic">
      <div>
        {{ story.score }} points · by {{ story.user.id }}
      </div>
      <nuxt-link
        v-if="story.webpage && story.webpage.article"
        :to="`/${$route.params.story}/article`"
      >
        xx minute read
      </nuxt-link>
      <a
        v-if="story.url"
        :href="story.url"
      >
        {{ siteName }}
      </a>
    </div>
    <commentBody
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
    }
  }
}
</script>
