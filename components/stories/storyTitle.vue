<template>
  <span class="text-gray-900 hover:underline">
    <span v-if="story.webpage && story.webpage.article">
      <story-title-icon />
      <nuxt-link :to="`/${story.id}/article`">
        {{ storyTitle }}
      </nuxt-link>
    </span>
    <a
      v-else-if="story.url"
      :href="story.url"
    >
      {{ storyTitle }}
    </a>
    <nuxt-link
      v-else
      :to="`/${story.id}/comments`"
    >
      {{ storyTitle }}
    </nuxt-link>
  </span>
</template>

<script>
export default {
  props: {
    story: {
      type: Object,
      required: true
    }
  },
  computed: {
    storyTitle () {
      return this.story.title.replace(/^(Ask|Show) HN: /, '')
    }
  }
}
</script>
