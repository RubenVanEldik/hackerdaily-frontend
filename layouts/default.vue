<template>
  <div class="min-h-screen w-screen m-auto flex flex-col sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 max-w-2xl">
    <app-bar class="px-3 sm:px-0" />
    <main class="flex-grow mb-6 px-3 sm:px-0">
      <nuxt />
    </main>
    <footer class="flex justify-center mb-6 text-sm text-gray-500 italic">
      <nuxt-link to="/contact">
        Contact
      </nuxt-link>
      <span class="mx-3" v-text="'·'" />
      <nuxt-link to="/thankyou">
        Support us
      </nuxt-link>
      <span class="mx-3" v-text="'·'" />
      <nuxt-link to="/feed">
        RSS
      </nuxt-link>
    </footer>
  </div>
</template>

<script>
export default {
  head: {
    titleTemplate (titleChunk) {
      return (titleChunk && titleChunk !== 'HackerDaily') ? `${titleChunk} | HackerDaily` : 'HackerDaily'
    },
    bodyAttrs: {
      class: 'bg-gray-100 dark:bg-gray-900 font-serif'
    }
  }
}
</script>
