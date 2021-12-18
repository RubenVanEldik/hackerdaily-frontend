<template>
  <component
    :is="isActive ? 'div' : 'nuxt-link'"
    :to="link"
    class="xl text-lg sm:text-base px-2 md:px-3"
    :class="{ 'font-semibold': isActive, 'hover:underline': !isActive }"
    v-text="text"
  />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    }
  }
}
</script>
