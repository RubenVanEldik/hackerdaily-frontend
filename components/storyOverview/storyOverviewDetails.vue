<template>
  <div class="text-gray-700 dark:text-gray-400 text-sm">
    <span v-text="`${story.score} ${story.score === 1 ? 'point' : 'points'} ·`" />
    <span
      v-if="story.webpage && story.webpage.article"
      v-text="`${expectedReadingTime} ·`"
    />
    <nuxt-link
      :to="`/${story.id}/comments`"
      class="hover:underline"
      v-text="`${story.descendants } ${story.descendants === 1 ? 'comment' : 'comments'}`"
    />
  </div>
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
    expectedReadingTime () {
      const readingTime = this.story.webpage.article.expected_reading_time
      return readingTime === 1 ? `${readingTime} minute` : `${readingTime} minutes`
    }
  }
}
</script>
