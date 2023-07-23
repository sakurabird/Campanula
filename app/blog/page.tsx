import PageContainer from '@/components/PageContainer'
import SectionContainer from '@/components/SectionContainer'
import ListLayout, { ListLayoutProps } from '@/components/blog/ListLayout'
import { PaginationProps } from '@/components/blog/ListPagination'
import getPosts from '@/components/libs/getPosts'
import siteMetadata from '@/data/siteMetadata'

const Blog = () => {
  const pageNumber = 1
  const posts = getPosts()
  const initialDisplayPosts = posts.slice(0, siteMetadata.blog.postPerPage * pageNumber)
  const pagination: PaginationProps = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / siteMetadata.blog.postPerPage),
    basePath: '/blog/page/',
  }

  const param: ListLayoutProps = {
    posts: posts,
    title: 'All',
    initialDisplayPosts: initialDisplayPosts,
    pagination: pagination,
  }

  return (
    <PageContainer>
      <SectionContainer>
        <ListLayout key="allPosts" {...param} />
      </SectionContainer>
    </PageContainer>
  )
}

export default Blog
