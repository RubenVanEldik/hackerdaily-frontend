<template>
  <story-overview
    :start-date="startDate"
    :end-date="endDate"
  />
</template>

<script>
import dayjs from 'dayjs'

export default {
  validate ({ params }) {
    const weekDays = [...Array(7).keys()].map(index => dayjs().subtract(index, 'day').format('dddd').toLowerCase())
    return weekDays.includes(params.weekday)
  },
  middleware: ({ route, redirect }) => {
    const yesterday = dayjs().subtract(1, 'day').format('dddd')
    if (`/${yesterday.toLowerCase()}` === route.path) redirect('/')
  },
  computed: {
    daysAgo () {
      const days = [...Array(7).keys()].map(day => day + 1)
      const pageDay = this.$route.params.weekday

      return days.find(counter => dayjs().subtract(counter, 'day').format('dddd').toLowerCase() === pageDay)
    },
    startDate () {
      return dayjs().subtract(this.daysAgo, 'day').startOf('day').toISOString()
    },
    endDate () {
      return dayjs().subtract(this.daysAgo, 'day').endOf('day').toISOString()
    }
  },
  head () {
    return {
      title: this.$route.params.weekday.charAt(0).toUpperCase() + this.$route.params.weekday.slice(1)
    }
  }
}
</script>
