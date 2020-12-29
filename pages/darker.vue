<template>
  <story-overview
    :start-date="startDate"
    :end-date="endDate"
  />
</template>

<script>
import dayjs from 'dayjs'

export default {
  computed: {
    startDate () {
      return dayjs().subtract(1, 'day').startOf('day').toISOString()
    },
    endDate () {
      return dayjs().subtract(1, 'day').endOf('day').toISOString()
    }
  },
  head: {
    bodyAttrs: {
      class: 'bg-gray-100 dark:bg-gray-900 font-serif'
    }
  }
}
</script>
