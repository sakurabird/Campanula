import { Metadata } from 'next'
import getPosts, { getPost } from '@/components/libs/getPosts'
import SectionContainer from '@/components/SectionContainer'
import PageContainer from '@/components/PageContainer'
import BlogNavigation from '@/components/blog/BlogNavigation'
import PostLayout, { PostLayoutProps } from '@/components/blog/PostLayout'

export const generateStaticParams = async () => {
  const posts = getPosts()
  return posts.map((post) => ({
    slug: post.slug.split('/'),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata> {
  const slug = (params.slug as string[]).join('/')
  const decodedSlug = decodeURIComponent(slug)
  const post = getPost(decodedSlug)
  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()

  return {
    title: post.title,
    description: post.metadescription,
    openGraph: {
      images: [{ url: post.image ? post.image : '' }],
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      type: 'article',
    },
  }
}

const PostPage = (props: { params: { slug: string[] } }) => {
  const slug = (props.params.slug as string[]).join('/')
  const decodedSlug = decodeURIComponent(slug)
  const post = getPost(decodedSlug)
  const posts = getPosts()
  const postIndex = posts.findIndex((p) => p.slug == decodedSlug)
  const prev = posts[postIndex + 1] || null
  const next = posts[postIndex - 1] || null

  const param: PostLayoutProps = {
    post: post,
    next: next,
    prev: prev,
  }

  return (
    <PageContainer>
      <SectionContainer>
        <div className="flex flex-wrap mx-auto my-4 md:my-8">
          <PostLayout {...param} />
          <BlogNavigation />
        </div>
      </SectionContainer>
    </PageContainer>
  )
}

export default PostPage
