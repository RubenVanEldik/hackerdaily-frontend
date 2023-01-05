<template>
  <div class="text-gray-600 dark:text-gray-400 text-sm">
    <span v-text="`${story.score} ${story.score === 1 ? 'point' : 'points'} ·`" />
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
  }
}
</script>
