<template>
  <fallback
    :is-loading="$apollo.loading"
    :is-empty="!stories || !stories.length"
    loading-message="Loading stories..."
    empty-message="There are no stories saved for this day."
  >
    <div
      v-if="showMessage"
      class="flex w-full mt-1 mb-5 px-5 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 bg-opacity-75 dark:bg-opacity-75"
    >
      <!-- eslint-disable vue/no-v-html -->
      <div
        class="text-gray-700 dark:text-gray-300"
        v-html="message"
      />
      <!-- eslint-enable vue/no-v-html -->
      <div class="-mt-4 -mr-6">
        <button
          class="block h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 leading-none"
          @click="hideMessage"
        >
          ×
        </button>
      </div>
    </div>
    <story-overview-item
      v-for="(story, index) in stories"
      :key="story.id"
      :story="story"
      :position="index + 1"
    />
  </fallback>
</template>

<script>
import query from '~/apollo/storiesWithinTimeframeQuery.gql'

export default {
  props: {
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    }
  },
  apollo: {
    stories: {
      query,
      variables () {
        return {
          startDate: this.startDate,
          endDate: this.endDate
        }
      }
    }
  },
  data () {
    return {
      message: ''
    }
  },
  computed: {
    showMessage () {
      if (!this.message) {
        return false
      }

      // Only show the message if the hide_message key in local storage is not the same as the current message
      return localStorage.getItem('hide_message') !== this.message
    }
  },
  methods: {
    hideMessage () {
      // Set the hide_message key in local storage to the current message
      localStorage.setItem('hide_message', this.message)
      // Remove the message for now
      this.message = null
    }
  }
}
</script>
