import { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'
import getPosts from '@/components/libs/getPosts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemap = [
    {
      url: siteMetadata.siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteMetadata.siteUrl}about`,
      lastModified: new Date(),
    },
    {
      url: `${siteMetadata.siteUrl}blog`,
      lastModified: new Date(),
    },
  ]

  const posts = await getPosts()

  posts.forEach((post) => {
    const { path } = post
    sitemap.push({ url: `${siteMetadata.siteUrl}${path}`, lastModified: new Date() })
  })
  return sitemap
}
