import { Suspense } from 'react'
import siteMetadata from '@/data/siteMetadata'
import './css/globals.css'
import './css/prism.css'
import { Metadata } from 'next'
import { Providers } from './providers'
import Loading from '@/components/Loading'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.creator,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    type: 'website',
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    locale: siteMetadata.locale,
    images: [{ url: siteMetadata.ogImage }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteId: siteMetadata.twitterCard.siteId,
    creator: siteMetadata.twitterCard.creator,
    creatorId: siteMetadata.twitterCard.creatorId,
    images: [{ url: siteMetadata.ogImage }],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  alternates: {
    canonical: siteMetadata.canonicalUrl,
    types: {
      'application/rss+xml': '/rss.xml',
      'application/atom+xml': '/atom.xml',
    },
  },
  robots: {
    index: siteMetadata.robots.index,
    follow: siteMetadata.robots.follow,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteMetadata.language} suppressHydrationWarning>
      <head />
      <body>
        <Providers>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  )
}
