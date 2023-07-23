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
  }))
}

const MonthlyArchive = (props: { params: { yy_mm: string } }) => {
  const yy_mm = props.params.yy_mm
  const pageNumber = 1
  const posts = getMatchYY_MMPosts(yy_mm)

  const initialDisplayPosts = posts.slice(0, siteMetadata.blog.postPerPage * pageNumber)

  const pagination: PaginationProps = {
    currentPage: 1,
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
        <ListLayout key="archivePosts" {...param} />
      </SectionContainer>
    </PageContainer>
  )
}

export default MonthlyArchive
