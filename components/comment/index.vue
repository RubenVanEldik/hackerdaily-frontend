<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="relative my-5">
    <div
      class="sticky top-0 w-6 leading-8 text-center cursor-pointer font-semibold text-gray-700 dark:text-gray-100 hover:text-gray-400"
      role="button"
      tabindex="0"
      aria-label="Minimize comment"
      @click="toggleComment"
      v-text="isCollapsed ? '+' : '−'"
    />
    <div
      :id="`comment-${comment.id}`"
      class="absolute -mt-8 leading-8 ml-6 text-gray-700 dark:text-gray-100 font-semibold"
    >
      <span v-text="`${comment.user_id || '[deleted]'} · `" />
      <a
        :href="`https://news.ycombinator.com/item?id=${comment.id}`"
        rel="noopener noreferrer"
        v-text="dayjs(comment.posted_at).fromNow()"
      />
      <span
        v-if="isCollapsed"
        v-text="`· [${comment.descendants + 1} more]`"
      />
    </div>
    <div v-show="!isCollapsed">
      <div
        class="relative prose dark:prose-dark bg-gray-100 dark:bg-gray-900 break-words max-w-none"
        v-html="parsedText"
      />
      <comment
        v-for="childComment in comment.comments"
        :key="childComment.id"
        class="ml-4 sm:ml-5"
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
      isCollapsed: !!localStorage.getItem(`${this.comment.id}_collapsed`)
    }
  },
  computed: {
    parsedText () {
      const parts = this.comment.text?.split('<p>') ?? [] // Dunno why, but /30054739/comments suddenly gave an error without the nullish coalescing
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
      this.isCollapsed = !this.isCollapsed

      if (this.isCollapsed) {
        localStorage.setItem(`${this.comment.id}_collapsed`, true)
      } else {
        localStorage.removeItem(`${this.comment.id}_collapsed`)
      }

      // Scroll to the top of the comment if the header of the comment is out of the viewport
      const element = document.getElementById(`comment-${this.comment.id}`)
      if (element.getBoundingClientRect().top < 0) {
        element.scrollIntoView()
      }
    }
  }
}
</script>
