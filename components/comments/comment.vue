<template>
  <div class="my-5">
    <div class="text-gray-700 font-semibold">
      <span
        class="inline-block w-4 text-center cursor-pointer"
        @click="() => showComment = !showComment"
        v-text="showComment ? '−' : '+'"
      />
      <span v-text="header" />
    </div>
    <div
      v-if="showComment && comment.text"
      class="prose break-words my-1"
      style="max-width: 100%"
      v-html="parsedText"
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
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

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
  },
  computed: {
    header () {
      return `${this.comment.user_id || '[deleted]'} · ${dayjs(this.comment.posted_at).fromNow()}`
    },
    parsedText () {
      const parts = this.comment.text.split('<p>')
      return parts
        .map((part, index) => {
          // Check if the paragraph is a blockquote
          const greaterThanRegex = /^((?:&gt;)*)/
          const quotedTextRegex = /^&quot;(.*)&quot;$/

          if (part.startsWith('&gt;')) {
            let str = ''
            if (!parts[index - 1]?.startsWith('&gt;')) str += '<blockquote>'
            str += part.replace(greaterThanRegex, '')
            if (!parts[index + 1]?.startsWith('&gt;')) str += '</blockquote>'
            return str
          } if (quotedTextRegex.test(part)) {
            return `<blockquote>${part.match(quotedTextRegex)[1]}</blockquote>`
          }
          return part
        })
        .map((part) => {
          // Make all references superscript
          const referenceRegex = /(\[\d+\])/g

          if (referenceRegex.test(part)) {
            return part.replace(referenceRegex, '<sup>$1</sup>')
          }
          return part
        })
        .join('<p>')
    }
  }
}
</script>
