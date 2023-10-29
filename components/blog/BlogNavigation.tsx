'use client'
import Link from 'next/link'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import getPosts from '../libs/getPosts'
import getTags from '../libs/getTags'
import getCategories from '../libs/getCategories'
import getGroupedDate, { GroupedDate } from '../libs/getGroupedDate'
import SocialIcons from '../SocialIcons'
import { Icon } from '@iconify/react'

const BlogNavigation = () => {
  const posts = getPosts()
  const categories = getCategories()
  const tags = getTags()

  const tagMaxCount = siteMetadata.blog.sidebar.tags.maxCount
  const slicedTags = tags.slice(0, tagMaxCount ? tagMaxCount : tags.length)

  const categoryMaxCount = siteMetadata.blog.sidebar.categories.maxCount
  const slicedCategories = categories.slice(
    0,
    categoryMaxCount ? categoryMaxCount : categories.length
  )

  const latestMaxCount = siteMetadata.blog.sidebar.latestPosts.maxCount
  const latestPosts = posts.slice(0, latestMaxCount ? latestMaxCount : 0)

  const archiveMaxcount = siteMetadata.blog.sidebar.archive.maxCount
  const groupedDates = getGroupedDate()
  const slicedGroupedDates = Object.values(groupedDates)
    .slice(0, archiveMaxcount ? archiveMaxcount : 0)
    .reduce((result, current) => {
      result[current.yy_mm] = current
      return result
    }, {} as GroupedDate)
  const readMoreButtonTitle = siteMetadata.readMoreButtonTitle
    ? siteMetadata.readMoreButtonTitle
    : 'Read More...'

  const AuthorView = (
    <div className="w-full p-2 mx-auto">
      <div className="text-xl font-bold">
        <Link key="Author" href="/about">
          Author
        </Link>
        <div className="mt-0 mb-0 divider"></div>
      </div>

      <div className="flex items-center gap-4 mb-2">
        <div className="avatar">
          <div className="w-20 rounded-full hover:opacity-70">
            <Link key="about" href="/about">
              <Image
                src={siteMetadata.avatarImage}
                alt={'picture of avatar'}
                width={150}
                height={150}
                className="rounded-full"
              />
            </Link>
          </div>
        </div>
        <div className="flex-wrap">
          <Link key="about" href="/about">
            <div className="text-lg font-bold hover:opacity-70">{siteMetadata.author}</div>
            {siteMetadata.authorDescription && siteMetadata.authorDescription.length != 0 && (
              <div className="text-sm break-words whitespace-pre-wrap text-base-content/80 hover:opacity-70">
                <p>{siteMetadata.authorDescription}</p>
              </div>
            )}
          </Link>
        </div>
      </div>
      <SocialIcons fontSize={22} />
    </div>
  )

  const categoryView = (
    <div className="p-2">
      <div className="text-xl font-bold">
        <Link key="category" href="/categories">
          Categories
        </Link>
        <div className="mt-0 mb-0 divider"></div>
      </div>
      <ul className="space-y-1 leading-7">
        {slicedCategories.map((category) => (
          <li
            key={category.name}
            className="list-disc list-inside text-base-content/80 hover:opacity-70 marker:text-base-content/20 marker:text-sm"
          >
            <Link key={category.name} href={`/categories/${category.name}`}>
              {`${category.name} (${category.count})`}
            </Link>
          </li>
        ))}
      </ul>
      {categories.length > categoryMaxCount && (
        <button className="my-2 btn btn-outline btn-xs text-base-content/50">
          <Link key="readMoreCategories" href="/categories">
            {readMoreButtonTitle}
          </Link>
        </button>
      )}
    </div>
  )

  const tagView = (
    <div className="p-2">
      <div className="text-xl font-bold">
        <Link key="tags" href="/tags">
          Tags
        </Link>
        <div className="mt-0 mb-2 divider"></div>
      </div>
      <div className="flex flex-wrap">
        {slicedTags.map((tag) => (
          <button
            key={tag.name}
            className="mb-4 mr-4 leading-7 text-base-content/80 hover:opacity-70"
          >
            <Link key={tag.name} href={`/tags/${tag.name}`}>
              <p className="px-2 text-base-content/80 before:content-['#'] before:font-thin rounded-xl bg-base-content/5">{`${tag.name} (${tag.count})`}</p>
            </Link>
          </button>
        ))}
      </div>
      {tags.length > tagMaxCount && (
        <button className="my-2 btn btn-outline btn-xs text-base-content/50">
          <Link key="readMoreTags" href="/tags">
            {readMoreButtonTitle}
          </Link>
        </button>
      )}
    </div>
  )

  const latestPostsView = (
    <div className="p-2">
      <div className="text-xl font-bold">
        <Link key="latestPosts" href="/blog">
          Latest Posts
        </Link>
        <div className="mt-0 mb-0 divider"></div>
      </div>
      <ul>
        {latestPosts.map((post) => (
          <div key={post.slug} className="text-base-content/80 hover:opacity-70">
            <li className="py-1.5 border-b-0.5 border-dashed border-base-content/30">
              <Link href={`/${post.path}`} key={post.slug}>
                {post.title}
              </Link>
            </li>
          </div>
        ))}
      </ul>
      {posts.length > latestMaxCount && (
        <button className="my-2 btn btn-outline btn-xs text-base-content/50">
          <Link key="readMoreLatest" href="/blog">
            {readMoreButtonTitle}
          </Link>
        </button>
      )}
    </div>
  )

  const archiveView = (
    <div className="p-2">
      <div className="text-xl font-bold">
        <Link key="Archive" href="/archive">
          Archive
        </Link>
        <div className="mt-0 mb-0 divider"></div>
      </div>
      <ul className="space-y-1.5">
        {Object.keys(slicedGroupedDates).map((yy_mm) => (
          <li
            key={yy_mm}
            className="list-disc list-inside text-base-content/80 hover:opacity-70 marker:text-base-content/20 marker:text-sm"
          >
            <Link key={yy_mm} href={`/archive/${yy_mm}`}>
              {yy_mm.replace('_', '-')} ({slicedGroupedDates[yy_mm].count})
            </Link>
          </li>
        ))}
      </ul>
      {Object.keys(groupedDates).length > archiveMaxcount && (
        <button className="my-2 btn btn-outline btn-xs text-base-content/50">
          <Link key="readMoreArchive" href="/archive">
            {readMoreButtonTitle}
          </Link>
        </button>
      )}
    </div>
  )

  const rssView = (
    <>
      <div className="mt-0 mb-0 divider"></div>
      <div className="flex flex-wrap items-center">
        <button className="my-2 mr-2 text-base-content/80">
          <Link key="rss" href="/rss.xml">
            <Icon icon="tabler:rss" className="w-6 h-6" />
          </Link>
        </button>
        <Link key="rss" href="/rss.xml">
          <p className="text-sm">RSS</p>
        </Link>
      </div>
    </>
  )

  return (
    <div className="w-full sm:px-4 blognavigation md:w-1/3 lg:mt-0">
      <div className="mt-6 border-2 rounded md:mt-0 md:border-0">
        {AuthorView}
        {categoryView}
        {tagView}
        {latestPostsView}
        {archiveView}
        {rssView}
      </div>
    </div>
  )
}

export default BlogNavigation
