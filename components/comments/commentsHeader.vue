<template>
  <div class="prose dark:prose-dark">
    <story-type-badge
      :title="story.title"
      class="mb-1"
      large
    />
    <h1 v-text="storyTitle" />
    <div class="flex flex-col italic">
      <icon-with-text
        :text="`${story.score} points`"
        icon="star"
      />
      <icon-with-text
        v-if="story.url"
        :text="siteName"
        :href="story.url"
        icon="globe-africa"
      />
      <icon-with-text
        v-if="story.webpage && story.webpage.article"
        :text="`${story.webpage.article.expected_reading_time} minute read`"
        :to="`/${$route.params.story}/article`"
        icon="book"
      />
    </div>
    <p
      v-if="story.text"
      class="py-2 break-words"
      v-html="story.text"
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
