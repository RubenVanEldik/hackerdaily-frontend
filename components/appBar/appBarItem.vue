<template>
  <component
    :is="isActive ? 'div' : 'nuxt-link'"
    :to="link"
    class="xl text-red-700 px-2 sm:px-3 md:px-4"
    :class="{ 'font-semibold': isActive, 'hover:underline': !isActive }"
  >
    {{ text }}
  </component>
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
