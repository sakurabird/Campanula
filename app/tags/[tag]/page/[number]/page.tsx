import PageContainer from '@/components/PageContainer'
import SectionContainer from '@/components/SectionContainer'
import ListLayout, { ListLayoutProps } from '@/components/blog/ListLayout'
import { PaginationProps } from '@/components/blog/ListPagination'
import { getMatchTagPosts } from '@/components/libs/getPosts'
import getTags from '@/components/libs/getTags'
import siteMetadata from '@/data/siteMetadata'

export const generateStaticParams = async () => {
  const tags = await getTags()
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)

  const tagParams = tags.flatMap((tag) => {
    const decodedTag = decodeURIComponent(tag.name)
    const totalPosts = getMatchTagPosts(decodedTag)
    range(1, Math.ceil(totalPosts.length / siteMetadata.blog.postPerPage)).map((number) => ({
      tag: decodedTag,
      number: number.toString(),
    }))
  })
  return tagParams
}

const TagPage = async (props: { params: { tag: string; number: string } }) => {
  const decodedTag = decodeURIComponent(props.params.tag)
  const pageNumber = parseInt(props.params.number)
  const posts = getMatchTagPosts(decodedTag)

  const tags = await getTags()
  const title = tags.filter((tagName) => {
    return tagName.name.toLowerCase() == decodedTag.toLowerCase() && tagName.name
  })

  const initialDisplayPosts = posts.slice(
    siteMetadata.blog.postPerPage * (pageNumber - 1),
    siteMetadata.blog.postPerPage * pageNumber
  )
  const pagination: PaginationProps = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / siteMetadata.blog.postPerPage),
    basePath: `/tags/${decodedTag}/page/`,
  }

  const param: ListLayoutProps = {
    posts: posts,
    title: `#${title[0].name}`,
    initialDisplayPosts: initialDisplayPosts,
    pagination: pagination,
  }

  return (
    <PageContainer>
      <SectionContainer>
        <ListLayout key={`${decodedTag}Posts`} {...param} />
      </SectionContainer>
    </PageContainer>
  )
}

export default TagPage
