<template>
  <div class="prose dark:prose-dark m-auto">
    <h2>Open source</h2>
    <p>
      Multiple early users asked how to contribute to HackerDaily and a few even wanted to build their own version. Therefore, I decided to make everything open source.
    </p>
    <p>
      This page contains a basic overview of the technologies that are used and links to the repositories. This is the first project that I will open source, so <a href="mailto:contact@hackerdaily.io">please let me know</a> what can be improved from an OS point of view.
    </p>

    <strong>More extensive README's will be published in the coming days.</strong>

    <h3>
      <a href="https://github.com/RubenVanEldik/hackerdaily-frontend">Frontend</a>
    </h3>
    <p>
      The frontend is created with <a href="https://nuxtjs.org/">Nuxt.js</a> and hosted on Netlify. It uses <a href="https://apollo.vuejs.org/">Apollo</a> to fetch and cache all data and <a href="https://tailwindcss.com/">Tailwind CSS</a> to style the pages. <a href="https://referral.simpleanalytics.com/hackerdaily">Simple Analytics</a> is used for privacy friendly analytics.
    </p>
    <p>
      The analytics can be viewed <a href="https://simpleanalytics.com/hackerdaily.io">here</a>.
    </p>

    <h3>
      <a href="#">Backend (coming soon)</a>
    </h3>
    <p>
      The backend is a basic <a href="https://hasura.io/">Hasura</a> engine running on Heroku. It's so basic that I have not yet version controlled it. As soon as that's done that the code will be open sourced.
    </p>

    <h3>
      <a href="https://github.com/RubenVanEldik/hackerdaily-importer">Importer</a>
    </h3>
    <p>
      The importer program checks every 20 seconds what happened on Hacker News. It fetches these changes and updates the HackerDaily database.
    </p>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Open source'
  }
}
</script>
