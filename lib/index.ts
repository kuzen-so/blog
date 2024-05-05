import { env } from '~/env.mjs'

export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
        'https://www.kuzen.top'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}
