<template>
  <nuxt-link
    :to="to"
    class="rounded-sm focus:outline-none focus:ring-1 focus:ring-current"
  >
    <!-- Slot has to be on the same line to not cause unexpected extra spaces -->
    <slot>{{ text }}</slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
