<template>
  <div class="flex items-start pb-3">
    <story-position
      class="flex-none"
      :position="position"
    />
    <div class="flex-auto">
      <div class="leading-tight">
        <story-type-badge :title="story.title" />
        <story-title :story="story" />
        <story-site :url="story.url" />
      </div>
      <story-details :story="story" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    story: {
      type: Object,
      required: true
    },
    position: {
      type: Number,
      required: true
    }
  }
}
</script>
