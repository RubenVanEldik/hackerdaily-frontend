<template>
  <stories
    :stories="stories"
    :loading="$apollo.loading"
  />
</template>

<script>
import dayjs from 'dayjs'
import query from '~/apollo/storiesWithinTimeframeQuery.gql'

export default {
  middleware: ({ route, redirect }) => {
    const today = dayjs().subtract(1, 'day').format('dddd')
    if (`/${today.toLowerCase()}` === route.path) redirect('/')
  },
  apollo: {
    stories: {
      query,
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
