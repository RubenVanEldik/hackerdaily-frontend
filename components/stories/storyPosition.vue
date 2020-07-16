<template>
  <div class="text-gray-700 pr-2 text-right">
    {{ position }}.
  </div>
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
