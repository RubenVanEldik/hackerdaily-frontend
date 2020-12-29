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
    return /^(20\d{2})-(1[012]|0?[1-9])-(3[01]|[12][0-9]|0?[1-9])$/.test(params.date)
  },
  computed: {
    startDate () {
      return dayjs(this.$route.params.date).startOf('day').toISOString()
    },
    endDate () {
      return dayjs(this.$route.params.date).endOf('day').toISOString()
    }
  }
}
</script>
