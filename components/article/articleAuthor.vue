<template>
  <span v-if="author">
    by
    <a
      v-if="author.startsWith('twitter:@')"
      :href="`https://twitter.com/${author.replace(/^twitter:@/, '')}`"
    >
      {{ author.replace(/^twitter:/, '') }}
    </a>
    <span v-else>
      {{ author }}
    </span>
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
