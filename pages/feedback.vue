<template>
  <text-page>
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
      :class="textInputClasses"
      rows="3"
      placeholder="Why do you use HackerDaily?"
    />
    <textarea
      v-model="toBeImproved"
      :class="textInputClasses"
      rows="3"
      placeholder="What can be improved?"
    />
    <input
      v-model="email"
      :class="textInputClasses"
      placeholder="Email (only necessary if you prefer a response)"
    >
    <button
      class="text-white text-sm py-1 px-3 rounded-md"
      :class="submitButtonDisabled ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-auto' : 'bg-red-700'"
      :disabled="submitButtonDisabled"
      @click="sendFeedback"
      v-text="feedbackReceived ? 'Thank you for your feedback!' : 'Send feedback'"
    />
  </text-page>
</template>

<script>
import feedbackMutation from '~/apollo/sendFeedback.gql'

export default {
  data () {
    return {
      textInputClasses: 'my-4 block w-full py-2 px-3 rounded-md bg-white dark:bg-gray-800 dark:bg-opacity-75 placeholder-gray-500 text-gray-800 dark:text-gray-200',
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
