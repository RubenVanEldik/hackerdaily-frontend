<template>
  <div class="min-h-screen w-screen m-auto flex flex-col sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 max-w-2xl">
    <app-bar class="px-3 sm:px-0" />
    <main class="flex-grow mb-6 px-3 sm:px-0">
      <nuxt />
    </main>
    <footer class="mb-4 text-sm text-center text-gray-600 italic">
      <a href="mailto:contact@hackerdaily.io">
        Made with ♥ in Europe
      </a>
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
      class: 'bg-gray-100 dark:bg-gray-800 font-serif'
    }
  }
}
</script>
