<template>
  <div class="text-gray-700 font-semibold">
    <span
      class="inline-block w-4 text-center cursor-pointer"
      @click="toggleComment"
    >
      {{ showComment ? '−' : '+' }}
    </span>
    <span>{{ comment.user_id || '[deleted]' }}</span>
    <span> · </span>
    <span>{{ comment.posted_at | relativeDate }}</span>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default {
  filters: {
    relativeDate (timestamp) {
      return dayjs(timestamp).fromNow()
    }
  },
  props: {
    comment: {
      type: Object,
      required: true
    },
    showComment: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleComment () {
      this.$emit('update:showComment', !this.showComment)
    }
  }
}
</script>
