<template>
  <story-overview
    :stories="stories"
    :loading="$apollo.loading || onServerSide"
  />
</template>

<script>
import dayjs from 'dayjs'
import query from '~/apollo/storiesWithinTimeframeQuery.gql'

export default {
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
        const yesterday = dayjs().subtract(1, 'day')
        return {
          startDate: yesterday.startOf('day').toISOString(),
          endDate: yesterday.endOf('day').toISOString()
        }
      }
    }
  }
}
</script>
