<template>
  <div class="prose dark:prose-dark m-auto">
    <h2>Open source</h2>
    <p>
      Multiple early users asked how to contribute to HackerDaily and a few even wanted to build their own version. Therefore, I decided to make everything open source.
    </p>
    <p>
      This page contains a basic overview of the technologies that are used and links to the repositories. This is the first project that I will open source, so <external-link to="mailto:contact@hackerdaily.io" text="please let me know" /> what can be improved from an OS point of view.
    </p>

    <strong>More extensive README's will be published in the coming days.</strong>

    <h3>
      <external-link to="https://github.com/RubenVanEldik/hackerdaily-frontend" text="Frontend" />
    </h3>
    <p>
      The frontend is created with <external-link to="https://nuxtjs.org/" text="Nuxt.js" /> and hosted on Netlify. It uses <external-link to="https://apollo.vuejs.org/" text="Apollo" /> to fetch and cache all data and <external-link to="https://tailwindcss.com/" text="Tailwind CSS" /> to style the pages. <external-link to="https://referral.simpleanalytics.com/hackerdaily" text="Simple Analytics" /> is used for privacy friendly analytics.
    </p>
    <p>
      The analytics can be viewed <external-link to="https://simpleanalytics.com/hackerdaily.io" text="here" />.
    </p>

    <h3>
      <external-link to="#" text="Backend (coming soon)" />
    </h3>
    <p>
      The backend is a basic <external-link to="https://hasura.io/" text="Hasura" /> engine running on Heroku. It's so basic that I have not yet version controlled it. As soon as that's done that the code will be open sourced.
    </p>

    <h3>
      <external-link to="https://github.com/RubenVanEldik/hackerdaily-importer" text="Importer" />
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
