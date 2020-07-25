<template>
  <div class="text-gray-700 text-sm">
    <span>
      {{ story.score }} {{ story.score === 1 ? 'point' : 'points' }} ·
    </span>
    <span>
      by {{ story.user.id }} ·
    </span>
    <span v-if="story.webpage && story.webpage.article">
      {{ Math.ceil(story.webpage.article.length / 220) }} minutes ·
    </span>
    <nuxt-link
      :to="`/${story.id}/comments`"
      class="hover:underline"
    >
      {{ story.descendants }} {{ story.descendants === 1 ? 'comment' : 'comments' }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    story: {
      type: Object,
      required: true
    }
  }
}
</script>
