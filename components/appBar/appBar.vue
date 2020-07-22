<template>
  <header class="w-full flex flex-row align-center justify-between py-6 overflow-auto sm:overflow-visible">
    <app-bar-icon />
    <app-bar-item
      v-for="day in weekDays"
      :key="day"
      :text="day"
      :link="`/${day.toLowerCase()}`"
      :is-active="day.toLowerCase() === currentPage"
    />
  </header>
</template>

<script>
import dayjs from 'dayjs'

export default {
  data () {
    return {
      today: dayjs(),
      interval: null
    }
  },
  computed: {
    weekDays () {
      return Array(7).fill(null).map((_, index) => this.today.subtract(index + 1, 'day').format('dddd'))
    },
    currentPage () {
      return this.$route.path === '/'
        ? this.today.subtract(1, 'day').format('dddd').toLowerCase()
        : this.$route.params.day
    }
  },
  mounted () {
    this.interval = setInterval(() => {
      if (!dayjs().isSame(this.today, 'day')) {
        this.today = dayjs()
      }
    }, 2000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>
