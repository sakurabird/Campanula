import PageContainer from '@/components/PageContainer'
import SectionContainer from '@/components/SectionContainer'
import ListLayout, { ListLayoutProps } from '@/components/blog/ListLayout'
import { PaginationProps } from '@/components/blog/ListPagination'
import getPosts from '@/components/libs/getPosts'
import siteMetadata from '@/data/siteMetadata'

export const generateStaticParams = async () => {
  const totalPosts = getPosts()
  const totalPages = Math.ceil(totalPosts.length / siteMetadata.blog.postPerPage)
  const params: number[] = Array.from(Array(totalPages), (_, i) => i + 1)
  return params
}

const BlogPage = (props: { params: { number: string } }) => {
  const pageNumber = parseInt(props.params.number)
  const posts = getPosts()
  const initialDisplayPosts = posts.slice(
    siteMetadata.blog.postPerPage * (pageNumber - 1),
    siteMetadata.blog.postPerPage * pageNumber
  )
  const pagination: PaginationProps = {
    currentPage: pageNumber,
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

export default BlogPage
