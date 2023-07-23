import PageContainer from '@/components/PageContainer'
import SectionContainer from '@/components/SectionContainer'
import ListLayout, { ListLayoutProps } from '@/components/blog/ListLayout'
import { PaginationProps } from '@/components/blog/ListPagination'
import getGroupedDate from '@/components/libs/getGroupedDate'
import { getMatchYY_MMPosts } from '@/components/libs/getPosts'
import siteMetadata from '@/data/siteMetadata'

export const generateStaticParams = async () => {
  const group = getGroupedDate()
  return Object.keys(group).map((key) => ({
    yy_mm: group[key].yy_mm,
    number: Math.ceil(group[key].count / siteMetadata.blog.postPerPage).toString(),
  }))
}

const ArchivePage = (props: { params: { yy_mm: string; number: string } }) => {
  const yy_mm = props.params.yy_mm
  const pageNumber = parseInt(props.params.number)
  const posts = getMatchYY_MMPosts(yy_mm)

  const initialDisplayPosts = posts.slice(
    siteMetadata.blog.postPerPage * (pageNumber - 1),
    siteMetadata.blog.postPerPage * pageNumber
  )

  const pagination: PaginationProps = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / siteMetadata.blog.postPerPage),
    basePath: `/archive/${yy_mm}/page/`,
  }

  const param: ListLayoutProps = {
    posts: posts,
    title: yy_mm.replace('_', '-'),
    initialDisplayPosts: initialDisplayPosts,
    pagination: pagination,
  }

  return (
    <PageContainer>
      <SectionContainer>
        <ListLayout key={`${yy_mm}Posts`} {...param} />
      </SectionContainer>
    </PageContainer>
  )
}

export default ArchivePage
