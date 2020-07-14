<template>
  <div class="text-center pt-48 sm:pt-56 md:64">
    <div class="text-4xl">
      {{ error.statusCode }}
    </div>
    <div class="text-lg">
      {{ error.message }}
    </div>
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
