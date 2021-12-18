<template>
  <span class="text-lg sm:text-base text-gray-900 dark:text-gray-100">
    <a
      v-if="story.url"
      :href="story.url"
      target="_blank"
      rel="noopener noreferrer"
      v-text="storyTitle"
    />
    <nuxt-link
      v-else
      :to="`/${story.id}/comments`"
      v-text="storyTitle"
    />
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
