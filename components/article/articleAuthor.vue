<template>
  <span v-if="author">
    by
    <a
      v-if="author.startsWith('twitter:@')"
      :href="`https://twitter.com/${author.replace(/^twitter:@/, '')}`"
      v-text="author.replace(/^twitter:/, '')"
    />
    <span
      v-else
      v-text="author"
    />
  </span>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>
