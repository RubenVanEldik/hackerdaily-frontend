<template>
  <span class="text-lg sm:text-base leading-tight text-gray-900 dark:text-gray-100">
    <external-link
      v-if="story.url"
      :to="story.url"
      :text="storyTitle"
    />
    <internal-link
      v-else
      :to="`/${story.id}/comments`"
      :text="storyTitle"
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
