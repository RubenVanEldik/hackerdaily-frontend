<template>
  <div
    class="text-gray-700 dark:text-gray-400 w-5 mr-2 text-right"
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
