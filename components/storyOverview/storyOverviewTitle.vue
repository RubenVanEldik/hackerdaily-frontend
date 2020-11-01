<template>
  <span class="text-lg sm:text-base text-gray-900 dark:text-gray-100">
    <span v-if="story.webpage && story.webpage.article">
      <icon
        icon="book"
        size="xs"
        class="h-4 mr-1"
      />
      <nuxt-link
        :to="`/${story.id}/article`"
        class="hover:underline"
        v-text="storyTitle"
      />
    </span>
    <a
      v-else-if="story.url"
      :href="story.url"
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
