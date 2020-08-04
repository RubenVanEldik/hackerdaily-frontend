<template>
  <div v-if="topLevelComments && topLevelComments.length">
    <div
      v-for="comment in topLevelComments"
      :key="comment.id"
    >
      <div class="border-t border-gray-200 my-6" />
      <comment
        :comment="comment"
        :all-comments="orderedComments"
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
    orderedComments () {
      return this.story.comments
        .map((comment) => {
          const descendants = this.story.comments
            .reduce((commentChain, comment) => {
              const parentComment = comment.parent_comment_id
              return parentComment && commentChain.includes(parentComment)
                ? [...commentChain, comment.id]
                : commentChain
            }, [comment.id])
            .length - 1

          return { ...comment, descendants }
        })
        .sort((a, b) => b.descendants - a.descendants)
    },
    topLevelComments () {
      return this.story && this.orderedComments.filter(comment => comment.parent_comment_id === null)
    }
  }
}
</script>
