<template>
  <div class="text-gray-700 dark:text-gray-400 text-sm">
    <span v-text="`${story.score} ${story.score === 1 ? 'point' : 'points'} ·`" />
    <internal-link
      :to="`/${story.id}/comments`"
      :text="`${story.descendants } ${story.descendants === 1 ? 'comment' : 'comments'}`"
      class="hover:underline"
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
