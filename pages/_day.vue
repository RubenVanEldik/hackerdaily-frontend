<template>
  <stories
    :stories="stories"
    :loading="$apollo.loading || onServerSide"
  />
</template>

<script>
import dayjs from 'dayjs'
import query from '~/apollo/storiesWithinTimeframeQuery.gql'

export default {
  validate ({ params }) {
    const weekDays = Array(7).fill(null).map((_, index) => dayjs().subtract(index + 1, 'day').format('dddd').toLowerCase())
    return weekDays.includes(params.day)
  },
  middleware: ({ route, redirect }) => {
    const today = dayjs().subtract(1, 'day').format('dddd')
    if (`/${today.toLowerCase()}` === route.path) redirect('/')
  },
  computed: {
    onServerSide () {
      return !process.client
    }
  },
  apollo: {
    stories: {
      query,
      skip () {
        return this.onServerSide
      },
      variables () {
        const pageDay = this.$route.params.day

        for (let counter = 1; counter < 8; counter++) {
          const day = dayjs().subtract(counter, 'day').format('dddd').toLowerCase()

          if (day === pageDay) {
            const startDate = dayjs().subtract(counter, 'day').startOf('day').toISOString()
            const endDate = dayjs().subtract(counter, 'day').endOf('day').toISOString()
            return { startDate, endDate }
          }
        }
      }
    }
  }
}
</script>
