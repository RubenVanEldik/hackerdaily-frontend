<template>
  <div class="prose dark:prose-dark m-auto">
    <h2>Feedback</h2>
    <div>
      I built this site primarily for myself, but since I shared it as a comment on HN a few people started using it. I am now trying to understand why people use the site and what can be improved.
    </div>
    <br>
    <div>
      If you have any feedback, please let me know!
    </div>
    <textarea
      v-model="whyUseIt"
      class="my-4 block w-full p-1 rounded-sm placeholder-gray-400 dark:bg-gray-700 dark:text-gray-200"
      rows="3"
      placeholder="Why do you use HackerDaily?"
    />
    <textarea
      v-model="toBeImproved"
      class="mb-4 block w-full p-1 rounded-sm placeholder-gray-400 dark:bg-gray-700 dark:text-gray-200"
      rows="3"
      placeholder="What can be improved?"
    />
    <input
      v-model="email"
      class="w-full mb-4 p-1 rounded-sm placeholder-gray-400 dark:bg-gray-700 dark:text-gray-200"
      placeholder="Email (only necessary if you prefer a response)"
    >
    <button
      class="text-white text-sm py-1 px-2 rounded-sm"
      :class="feedbackReceived ? 'bg-gray-600 cursor-auto' : 'bg-red-700 dark:bg-red-600'"
      :disabled="feedbackReceived"
      @click="sendFeedback"
      v-text="feedbackReceived ? 'Thank you for your feedback!' : 'Send feedback'"
    />
  </div>
</template>

<script>
import feedbackMutation from '~/apollo/sendFeedback.gql'

export default {
  head: {
    title: 'Feedback'
  },
  data () {
    return {
      whyUseIt: null,
      toBeImproved: null,
      email: null,
      feedbackReceived: false
    }
  },
  methods: {
    sendFeedback () {
      this.$apollo.mutate({
        mutation: feedbackMutation,
        variables: {
          whyUseIt: this.whyUseIt,
          toBeImproved: this.toBeImproved,
          email: this.email
        }
      }).then(() => {
        this.feedbackReceived = true
      })
    }
  }
}
</script>
