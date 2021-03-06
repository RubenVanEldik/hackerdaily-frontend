<template>
  <div class="relative my-5">
    <div
      class="sticky top-0 w-6 leading-8 text-center cursor-pointer font-semibold text-gray-700 dark:text-gray-100 hover:text-gray-400"
      role="button"
      tabindex="0"
      aria-label="Minimize comment"
      @click="toggleComment"
      v-text="showComment ? '−' : '+'"
    />
    <div
      :id="`comment-${comment.id}`"
      class="absolute -mt-8 leading-8 ml-6 text-gray-700 dark:text-gray-100 font-semibold"
    >
      <span v-text="`${comment.user_id || '[deleted]'} · `" />
      <a
        :href="`https://news.ycombinator.com/item?id=${comment.id}`"
        target="_blank"
        rel="noopener"
        v-text="dayjs(comment.posted_at).fromNow()"
      />
    </div>
    <div v-show="showComment">
      <div
        class="relative prose dark:prose-dark bg-gray-100 dark:bg-gray-800 break-words"
        style="max-width: 100%"
        v-html="parsedText"
      />
      <comment
        v-for="childComment in comment.comments"
        :key="childComment.id"
        class="ml-5 sm:ml-6"
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
          if (/^\[\d+\]/.test(part)) return part

          // Make all references in the text self superscript
          return part.replace(/ ?\[(\d+)\]/g, (fullRegex, digit) => {
            const currentReference = new RegExp('^\\[' + digit + '\\]')
            return parts.some(part => currentReference.test(part))
              ? `<sup><a href="#${this.comment.id}-ref${digit}">[${digit}]</a></sup>`
              : `<sup class="text-gray-600 dark:text-gray-500">[${digit}]</sup>`
          })
        })
        .map((part, index) => {
          if (!/^\[\d+\]/.test(part)) return part

          // Give all references at the end of a comment a grayed out reference number
          return part.replace(/^\[(\d+)\](?::| - )?(.+)/, `<span id="${this.comment.id}-ref$1"><span class="mr-1 text-gray-600 dark:text-gray-500">[$1]</span>$2</span>`)
        })
        .join('<p>')
    }
  },
  methods: {
    dayjs,
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
