import PageContainer from '@/components/PageContainer'
import SectionContainer from '@/components/SectionContainer'
import BlogNavigation from '@/components/blog/BlogNavigation'
import getTags from '@/components/libs/getTags'
import Link from 'next/link'

const Tags = () => {
  const tags = getTags()

  const tagsView = tags.map((tag) => (
    <button key={tag.name} className="mb-6 mr-6 text-base-content/80 hover:opacity-70">
      <Link key={tag.name} href={`/tags/${tag.name}`}>
        <p className="text-lg px-4 text-base-content/80 before:content-['#'] before:font-thin rounded-xl bg-base-content/5">{`${tag.name} (${tag.count})`}</p>
      </Link>
    </button>
  ))

  return (
    <PageContainer>
      <SectionContainer>
        <div className="mt-4 text-3xl 2xl:text-4xl font-bold">Tags</div>

        <div className="flex flex-wrap mt-8">
          <div className="w-full md:w-2/3">{tagsView}</div>
          <BlogNavigation />
        </div>
      </SectionContainer>
    </PageContainer>
  )
}

export default Tags
