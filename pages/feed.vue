<template>
  <div class="prose dark:prose-dark m-auto">
    <h2>We've got an RSS feed!</h2>
    <p>
      After many requests we've finally created an RSS feed!
    </p>
    <p>
      Because what 'yesterday' is depends on where you're are, we've created an RSS feed for each time zone. You can select your preferred timezone below and you'll be redirected to the correct feed.
    </p>

    <div class="flex mt-5">
      <div class="flex-grow">
        <select
          v-model="selectedTimezone"
          name="timezones"
          class="appearance-none w-full h-full px-4 rounded-l-md bg-gray-200 dark:bg-gray-800"
        >
          <option
            v-for="timezone in timezones"
            :key="timezone"
            :value="timezone"
            v-text="timezone"
          />
        </select>
      </div>
      <a
        v-if="selectedTimezone"
        :href="`/feed/${selectedTimezone.toLowerCase()}.xml`"
        class="flex-shrink-0 py-1 px-4 rounded-r-md bg-red-700"
      >
        <span class="text-sm text-white">
          Open RSS feed
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import timezonesObject from '~/node_modules/date-time-format-timezone/build/src/data/tzmap'

export default {
  data () {
    return {
      selectedTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      timezones: [...new Set(Object.values(timezonesObject))]
    }
  }
}
</script>
