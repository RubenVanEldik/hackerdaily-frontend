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
    <textarea-input
      v-model="whyUseIt"
      placeholder="Why do you use HackerDaily?"
    />
    <textarea-input
      v-model="toBeImproved"
      placeholder="What can be improved?"
    />
    <text-input
      v-model="email"
      placeholder="Email (only necessary if you prefer a response)"
    />
    <button
      class="text-white text-sm py-1 px-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-current"
      :class="submitButtonDisabled ? 'bg-gray-600 cursor-auto' : 'bg-red-700 dark:bg-red-600'"
      :disabled="submitButtonDisabled"
      @click="sendFeedback"
      v-text="feedbackReceived ? 'Thank you for your feedback!' : 'Send feedback'"
    />
  </div>
</template>

<script>
import feedbackMutation from '~/apollo/sendFeedback.gql'

export default {
  data () {
    return {
      whyUseIt: null,
      toBeImproved: null,
      email: null,
      feedbackReceived: false
    }
  },
  computed: {
    submitButtonDisabled () {
      return (!this.whyUseIt && !this.toBeImproved) || this.feedbackReceived
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
  },
  head: {
    title: 'Feedback'
  }
}
</script>
