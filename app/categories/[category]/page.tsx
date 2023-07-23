import PageContainer from '@/components/PageContainer'
import SectionContainer from '@/components/SectionContainer'
import ListLayout, { ListLayoutProps } from '@/components/blog/ListLayout'
import { PaginationProps } from '@/components/blog/ListPagination'
import getCategories, { Category } from '@/components/libs/getCategories'
import { getMatchCategoryPosts } from '@/components/libs/getPosts'
import siteMetadata from '@/data/siteMetadata'

export const generateStaticParams = async () => {
  const categories = getCategories()
  return categories.map((category: Category) => ({
    category: category.name,
  }))
}

const CategoryList = (props: { params: { category: string } }) => {
  const decodedCategory = decodeURIComponent(props.params.category)
  const filteredPosts = getMatchCategoryPosts(decodedCategory)
  const pageNumber = 1
  const initialDisplayPosts = filteredPosts.slice(0, siteMetadata.blog.postPerPage * pageNumber)

  const pagination: PaginationProps = {
    currentPage: 1,
    totalPages: Math.ceil(filteredPosts.length / siteMetadata.blog.postPerPage),
    basePath: `/categories/${decodedCategory}/page/`,
  }

  const param: ListLayoutProps = {
    posts: filteredPosts,
    title: decodedCategory,
    initialDisplayPosts: initialDisplayPosts,
    pagination: pagination,
  }

  return (
    <PageContainer>
      <SectionContainer>
        <ListLayout key="categoryPosts" {...param} />
      </SectionContainer>
    </PageContainer>
  )
}

export default CategoryList
