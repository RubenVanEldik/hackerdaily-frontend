<template>
  <div v-if="topLevelComments && topLevelComments.length">
    <div
      v-for="comment in topLevelComments"
      :key="comment.id"
    >
      <div class="border-t border-gray-200 my-6" />
      <comment
        :comment="comment"
        :all-comments="story.comments"
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
  computed: {
    topLevelComments () {
      return this.story && this.story.comments.filter(comment => comment.parent_comment === null)
    }
  }
}
</script>
