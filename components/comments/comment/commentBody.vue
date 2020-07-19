<template>
  <div
    class="prose break-words"
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
        .map((part, index) => {
          if (part.startsWith('&gt;')) {
            return `<blockquote>${part.replace(/^(&gt;)*/, '')}</blockquote>`
          } if (/^&quot;.*&quot;$/.test(part)) {
            return `<blockquote>${part.match(/^&quot;(.*)&quot;$/)[1]}</blockquote>`
          }
          return part
        })
        .join('<p>')
    }
  }
}
</script>
