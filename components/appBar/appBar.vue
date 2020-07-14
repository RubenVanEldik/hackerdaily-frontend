<template>
  <div class="w-full flex flex-row align-center justify-between py-6 overflow-auto sm:overflow-visible">
    <app-bar-icon />
    <app-bar-item
      v-for="day in weekDays"
      :key="day"
      :text="day"
      :link="`/${day.toLowerCase()}`"
      :is-active="day.toLowerCase() === currentPage"
    />
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  computed: {
    weekDays () {
      return Array(7).fill(null).map((_, index) => dayjs().subtract(index + 1, 'day').format('dddd'))
    },
    currentPage () {
      return this.$route.path === '/'
        ? dayjs().subtract(1, 'day').format('dddd').toLowerCase()
        : this.$route.params.day
    }
  }
}
</script>
