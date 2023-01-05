<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="prose dark:prose-dark max-w-none">
    <story-type-badge
      :title="story.title"
      class="mb-1"
      large
    />
    <h2 v-text="storyTitle" />
    <div class="flex flex-col italic pl-2 sm:pl-3">
      <span>
        <icon
          class="mr-1 h-4 py-px"
          icon="star"
        />
        <span v-text="`${story.score} points`" />
      </span>
      <span v-if="story.url">
        <icon
          :class="`mr-1 h-4 py-px text-red-700 dark:text-red-600`"
          icon="globe"
        />
        <a
          :href="story.url"
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
    <comment-divider v-if="isLoading" />
  </div>
</template>

<script>
export default {
  props: {
    story: {
      type: Object,
      required: true
    },
    siteName: {
      type: String,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    storyTitle () {
      return this.story.title.replace(/^(Ask|Show|Tell) HN: /, '')
    }
  }
}
</script>
