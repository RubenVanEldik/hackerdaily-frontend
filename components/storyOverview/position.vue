<template>
  <div
    class="text-gray-600 dark:text-gray-400 w-5 mr-2 text-right leading-tight"
    v-text="`${position}.`"
  />
</template>

<script>
export default {
  props: {
    position: {
      type: Number,
      required: true
    }
  }
}
</script>
