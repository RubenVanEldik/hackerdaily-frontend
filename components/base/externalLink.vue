<template>
  <a
    :href="to"
    :target="target"
    :rel="rel"
    class="rounded-sm focus:outline-none focus:ring-1 focus:ring-current"
  >
    <!-- Slot has to be on the same line to not cause unexpected extra spaces -->
    <slot>{{ text }}</slot>
  </a>
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
    },
    target: {
      type: String,
      required: false,
      default: '_blank'
    },
    rel: {
      type: String,
      required: false,
      default: 'noopener noreferrer'
    }
  }
}
</script>
