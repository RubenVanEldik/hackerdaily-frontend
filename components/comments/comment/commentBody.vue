<template>
  <div
    class="prose break-words my-1"
    style="max-width: 100%"
    v-html="parsedText"
  />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    parsedText () {
      const parts = this.text.split('<p>')
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
