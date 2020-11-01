<template>
  <span>
    <icon
      :class="`mr-1 ${color}`"
      :icon="icon"
      size="sm"
    />
    <a
      v-if="href"
      :href="href"
      target="_blank"
      rel="noopener noreferrer"
      v-text="text"
    />
    <nuxt-link
      v-else-if="to"
      :to="to"
      v-text="text"
    />
    <span
      v-else
      v-text="text"
    />
  </span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: false,
      default: null
    },
    href: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    color () {
      return (this.to || this.href)
        ? 'text-red-700 dark:text-red-600'
        : 'text-gray-800 dark:text-gray-300'
    }
  }
}
</script>
