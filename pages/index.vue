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
  apollo: {
    stories: {
      query,
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
