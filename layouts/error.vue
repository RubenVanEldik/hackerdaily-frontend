<template>
  <div class="text-center pt-48 sm:pt-56 md:64 text-gray-700 dark:text-gray-300">
    <div
      class="text-4xl"
      v-text="error.statusCode"
    />
    <div
      class="text-lg"
      v-text="error.message"
    />
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
