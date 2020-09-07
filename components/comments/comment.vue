<template>
  <div class="relative my-5">
    <div
      class="sticky top-0 w-6 leading-8 text-center cursor-pointer font-semibold text-gray-700 hover:text-gray-600"
      @click="toggleComment"
      v-text="showComment ? '−' : '+'"
    />
    <div
      :id="`comment-${comment.id}`"
      class="absolute -mt-8 leading-8 ml-6 text-gray-700 font-semibold"
      v-text="header"
    />
    <div
      v-show="showComment"
      class="relative prose bg-gray-100 break-words"
      style="max-width: 100%"
      v-html="parsedText"
    />
    <div
      v-show="showComment"
      class="ml-5 sm:ml-6"
    >
      <comment
        v-for="childComment in comment.comments"
        :key="childComment.id"
        :comment="childComment"
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
          const greaterThanRegex = /^((?:&gt;|&#62;)+)/
          const quotedTextRegex = /^(?:&quot;|“|”)(.+)(?:&quot;|“|”)$/

          if (greaterThanRegex.test(part)) {
            let str = ''
            if (!greaterThanRegex.test(parts[index - 1])) str = '<blockquote>'
            str += part.replace(greaterThanRegex, '')
            if (!greaterThanRegex.test(parts[index + 1])) str += '</blockquote>'
            return str
          }
          if (quotedTextRegex.test(part)) {
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
  },
  methods: {
    toggleComment () {
      this.showComment = !this.showComment

      // Scroll to the top of the comment if the header of the comment is out of the viewport
      const element = document.getElementById(`comment-${this.comment.id}`)
      if (element.getBoundingClientRect().top < 0) {
        element.scrollIntoView()
      }
    }
  }
}
</script>
