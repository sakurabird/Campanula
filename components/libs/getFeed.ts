import { Feed } from 'feed'
import siteMetadata from '@/data/siteMetadata'
import getPosts from './getPosts'

export async function getFeed(): Promise<Feed> {
  const feed = new Feed({
    title: siteMetadata.title,
    description: siteMetadata.description,
    id: siteMetadata.siteUrl,
    link: siteMetadata.siteUrl,
    language: siteMetadata.language,
    image: `${siteMetadata.siteUrl}${siteMetadata.ogImage.slice(1)}`,
    favicon: `${siteMetadata.siteUrl}favicon.ico`,
    copyright: `${siteMetadata.copyrightYear} ${siteMetadata.author}`,
    feedLinks: {
      rss2: `${siteMetadata.siteUrl}rss.xml`,
      atom: `${siteMetadata.siteUrl}atom.xml`,
    },
    author: {
      name: siteMetadata.author,
      email: siteMetadata.email,
    },
  })

  const posts = await getPosts()

  posts.forEach((post) => {
    const { title, date, subtitle, image, category, path } = post
    const itemImage = image ? `${siteMetadata.siteUrl}${image?.slice(1)}` : undefined

    feed.addItem({
      title: title,
      id: `${siteMetadata.siteUrl}${path}`,
      link: `${siteMetadata.siteUrl}${path}`,
      description: subtitle,
      date: new Date(date),
      image: itemImage,
      category: [{ name: category }],
    })
  })
  return feed
}
