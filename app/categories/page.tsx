import PageContainer from '@/components/PageContainer'
import SectionContainer from '@/components/SectionContainer'
import BlogNavigation from '@/components/blog/BlogNavigation'
import getCategories from '@/components/libs/getCategories'
import Link from 'next/link'

const Categories = () => {
  const categories = getCategories()

  const categoriesView = categories.map((category) => (
    <li
      key={category.name}
      className="list-disc list-inside text-lg text-base-content/80 hover:opacity-70 marker:text-sm marker:text-primary"
    >
      <Link key={category.name} href={`/categories/${category.name}`}>
        {`${category.name} (${category.count})`}
      </Link>
    </li>
  ))

  return (
    <PageContainer>
      <SectionContainer>
        <div className="mt-4 text-3xl 2xl:text-4xl font-bold">Categories</div>
        <div className="flex flex-wrap mt-8">
          <ul className="w-full space-y-2 md:w-2/3">{categoriesView}</ul>
          <BlogNavigation />
        </div>
      </SectionContainer>
    </PageContainer>
  )
}

export default Categories
