<template>
  <textarea
    v-model="computedValue"
    v-bind="$props"
    class="block w-full my-4 py-1 px-2 rounded-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-current"
    rows="3"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    computedValue: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('input', newValue)
      }
    }
  }
}
</script>
