<template>
  <div class="prose dark:prose-dark m-auto">
    <h2>Open source</h2>
    <p>
      A few users wanted to contribute to HackerDaily and some even wanted to make their own version. Therefore, I decided to make everything open source.
    </p>
    <p>
      This page contains a basic overview of the technologies that are used and links to the repositories. This is the first project that I open source, so <a href="mailto:contact@hackerdaily.io">please let me know</a> what can be improved from an OS point of view.
    </p>
    <strong>I will write more extensive README's in the coming days.</strong>

    <h3>
      <a href="https://github.com/RubenVanEldik/hackerdaily-frontend">Front end</a>
    </h3>
    <p>
      The front-end is a Single Page Application build with Nuxt.js and hosted on Netlify. It uses <a href="https://apollo.vuejs.org/">Apollo</a> to fetch and cache all data and <a href="https://tailwindcss.com/">Tailwind CSS</a> to style the pages. <a href="https://simpleanalytics.com/">Simple Analytics</a> is used for privacy friendly analytics.
    </p>
    <p>
      The analytics can be viewed on <a href="https://simpleanalytics.com/hackerdaily.io">this page</a>.
    </p>

    <h3>
      <a href="#">Back end</a>
    </h3>
    <p>
      The back end is a basic <a href="https://hasura.io/">Hasura</a> engine running on Heroku. It's so basic that I have not yet version controlled it. As soon as I've done that I will open source the code.
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
