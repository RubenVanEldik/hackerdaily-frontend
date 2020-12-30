import { InMemoryCache } from 'apollo-cache-inmemory'

export default ({ $config }) => {
  return {
    httpEndpoint: `https://${$config.BACKEND_URL}`,
    cache: new InMemoryCache()
  }
}
