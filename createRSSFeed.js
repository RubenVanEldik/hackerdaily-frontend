import { request } from 'graphql-request'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import 'graphql-import-node'
import timezonesObject from './node_modules/date-time-format-timezone/build/src/data/tzmap'

// Extend dayjs with the timezone
dayjs.extend(utc)
dayjs.extend(timezone)

// Get all unique timezones and return an array with objects with both the timezone name as well as the start and end timestamps
const getTimeZones = () => {
  const timezones = [...new Set(Object.values(timezonesObject))]

  return timezones.map((name) => {
    const yesterday = dayjs.tz(dayjs(), name).subtract(1, 'day')
    return {
      name,
      start: yesterday.startOf('day').toISOString(),
      end: yesterday.endOf('day').toISOString()
    }
  })
}

// Fetch all the stories for each unique timezone
const getStoriesPerUniqueTimezone = async (timezones) => {
  const uniqueDays = timezones.reduce((all, timezone) => {
    return all.find(({ start, end }) => timezone.start === start && timezone.end === end)
      ? all
      : [...all, { start: timezone.start, end: timezone.end }]
  }, [])

  return await Promise.all(uniqueDays.map(async ({ start, end }) => {
    const query = require('./apollo/storiesWithinTimeframeQuery.gql')
    const variables = { startDate: start, endDate: end }
    return {
      ...await request(`https://${process.env.BACKEND_URL}`, query, variables),
      start,
      end
    }
  }))
}

export default async () => {
  // Get the timezones and stories
  const timezones = getTimeZones()
  const storiesPerTimezone = await getStoriesPerUniqueTimezone(timezones)

  // Create a unique feed for each timezone
  return timezones.map((timezone) => {
    // Find the stories relevant for the specific timezone
    const { stories } = storiesPerTimezone.find(({ start, end }) => start === timezone.start && end === timezone.end)

    // Return the feed object
    return {
      path: `feed/${timezone.name.toLowerCase()}.xml`,
      cacheTime: 60 * 60 * 1000,
      type: 'rss2',
      create (feed) {
        feed.options = {
          title: 'HackerDaily',
          link: process.env.FRONTEND_URL,
          description: 'A more informative and less addictive Hacker News.',
          language: 'en',
          image: `${process.env.FRONTEND_URL}/icon.png`,
          favicon: `${process.env.FRONTEND_URL}/favicon.ico`
        }
        stories.forEach((story) => {
          feed.addItem({
            id: story.id,
            title: story.title,
            link: `${process.env.FRONTEND_URL}/${story.id}/comments`
          })
        })
      }
    }
  })
}