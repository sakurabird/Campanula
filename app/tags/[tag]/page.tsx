import PageContainer from '@/components/PageContainer'
import SectionContainer from '@/components/SectionContainer'
import ListLayout, { ListLayoutProps } from '@/components/blog/ListLayout'
import { PaginationProps } from '@/components/blog/ListPagination'
import { getMatchTagPosts } from '@/components/libs/getPosts'
import getTags, { Tag } from '@/components/libs/getTags'
import siteMetadata from '@/data/siteMetadata'

export const generateStaticParams = async () => {
  const tags = getTags()
  return tags.map((tag: Tag) => ({
    tag: tag.name,
  }))
}

const TagList = (props: { params: { tag: string } }) => {
  const decodedTag = decodeURIComponent(props.params.tag)
  const filteredPosts = getMatchTagPosts(decodedTag)
  const pageNumber = 1
  const initialDisplayPosts = filteredPosts.slice(0, siteMetadata.blog.postPerPage * pageNumber)

  const pagination: PaginationProps = {
    currentPage: 1,
    totalPages: Math.ceil(filteredPosts.length / siteMetadata.blog.postPerPage),
    basePath: `/tags/${decodedTag}/page/`,
  }

  const param: ListLayoutProps = {
    posts: filteredPosts,
    title: `#${decodedTag}`,
    initialDisplayPosts: initialDisplayPosts,
    pagination: pagination,
  }

  return (
    <PageContainer>
      <SectionContainer>
        <ListLayout key="tagPosts" {...param} />
      </SectionContainer>
    </PageContainer>
  )
}

export default TagList
