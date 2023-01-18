<template>
  <fallback
    :is-empty="!recursiveComments"
    empty-message="This story does not (yet) have any comments."
  >
    <div
      v-for="comment in recursiveComments"
      :key="comment.id"
    >
      <comment-divider />
      <comment
        :comment="comment"
        :story-user-id="story.user_id"
      />
    </div>
  </fallback>
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
    recursiveComments () {
      if (!this.story?.comments?.length) return null

      // Sort all comments and filter out any flagged comments
      const allComments = this.story.comments.slice()
        .filter(comment => comment.text !== '[flagged]')
        .sort((a, b) => b.score - a.score)

      // Find all non-top level comments
      const nestedComments = allComments.filter(comment => comment.parent_comment_id)

      // Get all descendants for a comment
      const getDescendants = id => nestedComments
        .filter(comment => comment.parent_comment_id === id)
        .map(comment => ({ ...comment, comments: getDescendants(comment.id) }))

      // Return the top level comments with all descendants
      return allComments
        .filter(comment => !comment.parent_comment_id)
        .map(comment => ({ ...comment, comments: getDescendants(comment.id) }))
    }
  }
}
</script>
