<template>
  <fallback
    :is-empty="!recursiveComments"
    empty-message="This story does not (yet) have any comments."
  >
    <div
      v-for="comment in recursiveComments"
      :key="comment.id"
    >
      <div class="border-t border-gray-200 dark:border-gray-700 my-6" />
      <comment :comment="comment" />
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

      // Sort all comments
      const allComments = this.story.comments.slice().sort((a, b) => b.score - a.score)
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
