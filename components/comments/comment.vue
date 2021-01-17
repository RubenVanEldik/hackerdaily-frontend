<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="relative flex my-5">
    <div
      class="self-stretch p-2 sm:mx-1 cursor-pointer opacity-25 hover:opacity-100 transition-opacity duration-150"
      role="button"
      tabindex="0"
      aria-label="Minimize comment"
      @click="toggleComment"
    >
      <div class="h-full w-1 bg-gray-300 dark:bg-gray-600 rounded-sm" />
    </div>
    <div>
      <div
        :id="`comment-${comment.id}`"
        class="text-gray-700 dark:text-gray-100 font-semibold"
      >
        <span v-text="`${comment.user_id || '[deleted]'} · `" />
        <external-link
          :to="`https://news.ycombinator.com/item?id=${comment.id}`"
          :text="dayjs(comment.posted_at).fromNow()"
        />
        <span
          v-if="!showComment"
          v-text="`· [${comment.descendants + 1} more]`"
        />
      </div>
      <div v-show="showComment">
        <div
          class="relative prose dark:prose-dark bg-gray-100 dark:bg-gray-800 break-words max-w-none"
          v-html="parsedText"
        />
        <comment
          v-for="childComment in comment.comments"
          :key="childComment.id"
          :comment="childComment"
        />
      </div>
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
