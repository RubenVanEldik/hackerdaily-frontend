<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="prose dark:prose-dark">
    <story-type-badge
      :title="story.title"
      class="mb-1"
      large
    />
    <h2 v-text="storyTitle" />
    <div class="flex flex-col italic">
      <span>
        <icon
          class="mr-1 h-4 py-px"
          icon="star"
        />
        <span v-text="`${story.score} points`" />
      </span>
      <span v-if="story.url">
        <icon
          :class="`mr-1 h-4 py-px text-red-700 dark:text-red-500`"
          icon="globe"
        />
        <a
          :href="story.url"
          target="_blank"
          rel="noopener noreferrer"
          v-text="siteName"
        />
      </span>
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
