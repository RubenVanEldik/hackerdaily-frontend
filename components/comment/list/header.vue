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
      <span class="flex items-center">
        <icon-user class="h-5 w-5 mr-2 py-px" />
        <span v-text="story.user_id" />
      </span>
      <span class="flex items-center">
        <icon-heart class="h-5 w-5 mr-2 py-px" />
        <span v-text="`${story.score} points`" />
      </span>
      <span
        v-if="story.url"
        class="flex items-center"
      >
        <icon-globe class="h-5 w-5 mr-2 py-px text-red-700 dark:text-red-600" />
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
