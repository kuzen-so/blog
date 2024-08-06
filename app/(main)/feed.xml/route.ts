import RSS from 'rss'

import { seo } from '~/lib/seo'
import { getLatestBlogPosts } from '~/sanity/queries'

export const revalidate = 60 * 60 // 1 hour

export async function GET() {
  const feed = new RSS({
    title: seo.title,
    description: seo.description,
    site_url: "https://www.kuzen.top/", //更新网站URL
    feed_url: "https://www.kuzen.top/feed.xml", // 更新RSS feed的URL
    language: 'zh-CN',
    image_url: "../../apple-icon.png",
    generator: 'PHP 9.0',
  })

  const data = await getLatestBlogPosts({ limit: 999 })
  if (!data) {
    return new Response('Not found', { status: 404 })
  }

  data.forEach((post) => {
    feed.item({
      title: post.title,
      guid: post._id,
      url: `${seo.url.href}blog/${post.slug}`,
      description: post.description,
      date: new Date(post.publishedAt),
      enclosure: {
        url: post.mainImage.asset.url,
      },
    })
  })

  return new Response(feed.xml(), {
    headers: {
      'content-type': 'application/xml',
    },
  })
}
