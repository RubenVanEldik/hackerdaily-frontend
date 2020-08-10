<template>
  <div class="my-5">
    <comment-header
      :comment="comment"
      :show-comment.sync="showComment"
    />
    <comment-body
      v-if="showComment && comment.text"
      :text="comment.text"
    />
    <div v-if="showComment">
      <comment
        v-for="childComment in comment.comments"
        :key="childComment.id"
        :comment="childComment"
        class="pl-5 sm:pl-6"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Comment',
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showComment: true
    }
  }
}
</script>
