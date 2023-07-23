import PageContainer from '@/components/PageContainer'
import SectionContainer from '@/components/SectionContainer'
import ListLayout, { ListLayoutProps } from '@/components/blog/ListLayout'
import { PaginationProps } from '@/components/blog/ListPagination'
import getCategories from '@/components/libs/getCategories'
import { getMatchCategoryPosts } from '@/components/libs/getPosts'
import siteMetadata from '@/data/siteMetadata'

export const generateStaticParams = async () => {
  const categories = getCategories()
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)

  const categoryParams = categories.flatMap((category) => {
    const decodedCategory = decodeURIComponent(category.name)
    const totalPosts = getMatchCategoryPosts(decodedCategory)
    range(1, Math.ceil(totalPosts.length / siteMetadata.blog.postPerPage)).map((number) => ({
      category: decodedCategory,
      number: number.toString(),
    }))
  })
  return categoryParams
}

const CategoryPage = (props: { params: { category: string; number: string } }) => {
  const decodedCategory = decodeURIComponent(props.params.category)
  const pageNumber = parseInt(props.params.number)
  const posts = getMatchCategoryPosts(decodedCategory)

  const initialDisplayPosts = posts.slice(
    siteMetadata.blog.postPerPage * (pageNumber - 1),
    siteMetadata.blog.postPerPage * pageNumber
  )

  const pagination: PaginationProps = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / siteMetadata.blog.postPerPage),
    basePath: `/categories/${decodedCategory}/page/`,
  }

  const param: ListLayoutProps = {
    posts: posts,
    title: decodedCategory,
    initialDisplayPosts: initialDisplayPosts,
    pagination: pagination,
  }

  return (
    <PageContainer>
      <SectionContainer>
        <ListLayout key={`${decodedCategory}Posts`} {...param} />
      </SectionContainer>
    </PageContainer>
  )
}

export default CategoryPage
