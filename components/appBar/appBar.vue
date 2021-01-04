<template>
  <header class="w-full flex flex-row align-center justify-between sm:justify-start py-6 overflow-auto sm:overflow-visible text-red-700 dark:text-red-600">
    <icon
      class="mr-2 mt-1 h-5"
      icon="thumbtack"
    />
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
        : this.$route.params.weekday
    }
  },
  mounted () {
    this.interval = setInterval(() => {
      if (!dayjs().isSame(this.today, 'day')) {
        this.today = dayjs()

        if (this.$route.path === '/') {
          const dayBeforeYesterday = dayjs().subtract(2, 'day').format('dddd').toLowerCase()
          this.$router.push(`/${dayBeforeYesterday}`)
        }
      }
    }, 2000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>
