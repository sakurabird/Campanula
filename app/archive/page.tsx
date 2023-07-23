import PageContainer from '@/components/PageContainer'
import SectionContainer from '@/components/SectionContainer'
import BlogNavigation from '@/components/blog/BlogNavigation'
import getGroupedDate from '@/components/libs/getGroupedDate'
import Link from 'next/link'

const Archive = () => {
  const groupedDates = getGroupedDate()

  const archiveView = Object.keys(groupedDates).map((yy_mm) => (
    <li
      key={yy_mm}
      className="text-lg list-disc list-inside text-base-content/80 hover:opacity-70 marker:text-sm marker:text-primary"
    >
      <Link key={yy_mm} href={`/archive/${yy_mm}`}>
        {yy_mm.replace('_', '-')} ({groupedDates[yy_mm].count})
      </Link>
    </li>
  ))

  return (
    <PageContainer>
      <SectionContainer>
        <div className="mt-4 text-3xl font-bold 2xl:text-4xl">Archive</div>
        <div className="flex flex-wrap mt-8">
          <ul className="w-full space-y-2 md:w-2/3">{archiveView}</ul>
          <BlogNavigation />
        </div>
      </SectionContainer>
    </PageContainer>
  )
}

export default Archive
