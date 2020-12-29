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
  head: {
    titleTemplate (titleChunk) {
      return (titleChunk && titleChunk !== 'HackerDaily') ? `${titleChunk} | HackerDaily` : 'HackerDaily'
    },
    bodyAttrs: {
      class: 'bg-gray-100 dark:bg-gray-900 font-serif'
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
