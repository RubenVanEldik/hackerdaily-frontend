<template>
  <div v-if="story.comments && story.comments.length">
    <div
      v-for="comment in sortComments(story.comments)"
      :key="comment.id"
    >
      <div class="border-t border-gray-200 my-6" />
      <comment
        :comment="comment"
        :all-comments="sortComments(comment.comments)"
      />
    </div>
  </div>
  <div
    v-else
    class="fallback-message"
  >
    This story does not (yet) have any comments.
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
  methods: {
    sortComments (comments) {
      return comments.slice().sort((a, b) => b.score - a.score)
    }
  }
}
</script>
