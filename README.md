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

The HackerDaily frontend is currently deployed as a single page app on Netlify.

To deploy to a new site simply add the environment variables and set `npm run build` as the build command.

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
