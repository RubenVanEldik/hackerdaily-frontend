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
      return this.text
        .split('<p>')
        .map((part) => {
          // Check if the paragraph is a blockquote
          const greaterThanRegex = /^((?:&gt;)*)/
          const quotedTextRegex = /^&quot;(.*)&quot;$/

          if (part.startsWith('&gt;')) {
            return `<blockquote>${part.replace(greaterThanRegex, '')}</blockquote>`
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
