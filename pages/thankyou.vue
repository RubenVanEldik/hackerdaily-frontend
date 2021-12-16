<template>
  <div class="prose dark:prose-dark m-auto">
    <h2>Thank you!</h2>
    <p>
      HackerDaily started out as a personal project to learn a few new technologies, but it quickly grew larger. Many people are using HackerDaily on a daily basis to get a quick overview of the best articles and HN comments per day. The site currently has had more than a <a href="https://simpleanalytics.com/hackerdaily.io">a quarter of a million pageviews!</a> 🎉
    </p>
    <p>
      My goal for HackerDaily is to make the project sustainable for the long term. Building software for the long run means we have to do two things.
    </p>
    <ol>
      <li>
        The codebase needs to be maintained so the website stays working on all devices, the database gets the correct security updates, etc.
      </li>
      <li>
        The server bills need to be paid monthly.
      </li>
    </ol>
    <p>
      I would really appreciate it if you could help me out with second point. I am still a student, and even though the server bills aren't super high, the cost of running a mirror of all Hacker News stories and comments is not nothing, especially over the long run.
    </p>
    <p>
      If you have any feedback on how to improve HackerDaily, please leave a message with the <nuxt-link to="/feedback">feedback form</nuxt-link>.
    </p>
    <a
      href="https://github.com/sponsors/RubenVanEldik"
      class="block w-full sm:w-auto mt-2 py-1 px-4 rounded-md bg-red-700 text-center"
    >
      <span class="text-sm text-white">
        Help HackerDaily become sustainable
      </span>
    </a>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Feedback'
  }
}
</script>
