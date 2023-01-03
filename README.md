# HackerDaily frontend

This is the frontend repository for the HackerDaily site.

## Getting Started

It's possible to get a local version up and running within a few minutes.

### Prerequisites

Node.js, at least v10.13.

### Installing

Install all dependencies.

```
npm ci
```

Add a `.env` file with the environment variables.

```
NODE_ENV=development
BACKEND_URL=...
SIMPLE_ANALYTICS_URL=...
```

Start the development server.

```
npm run dev
```


## Deployment

The HackerDaily frontend is currently deployed as a single page app on Netlify. The simplest way to deploy your own version of HackerDaily is using the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/RubenVanEldik/hackerdaily-frontend)

## Built With

* [Nuxt.js](https://nuxtjs.org/) - Open source Vue framework
* [Apollo](https://apollo.vuejs.org/) - Used to fetch and cache all data from the back end
* [Tailwind CSS](https://tailwindcss.com/) - Used to easily and coherently style all pages
* [Simple Analytics](https://referral.simpleanalytics.com/hackerdaily) - Privacy friendly analytics tool

## Contributing

Coming soon.

## Authors

* **Ruben van Eldik** - [RubenVanEldik](https://github.com/RubenVanEldik)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
