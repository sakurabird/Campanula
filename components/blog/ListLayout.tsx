'use client'
import { useState } from 'react'
import { Post } from '@/.contentlayer/generated/types'
import getPosts from '@/components/libs/getPosts'
import PostPreview from '@/components/blog/PostPreview'
import BlogNavigation from '@/components/blog/BlogNavigation'
import { ListPagination, PaginationProps } from './ListPagination'
import { Icon } from '@iconify/react'

export interface ListLayoutProps {
  posts: Post[]
  title: string
  initialDisplayPosts?: Post[]
  pagination?: PaginationProps
}

export default function ListLayout(props: ListLayoutProps) {
  const [searchValue, setSearchValue] = useState('')
  const { title, initialDisplayPosts, pagination } = props

  const allPosts = getPosts()
  const filteredBlogPosts = allPosts.filter((post) => {
    let searchContent = ''
    searchContent += post.title
    searchContent += post.subtitle ? post.subtitle : ''
    searchContent += post.tags ? post.tags.join(' ') : ''
    searchContent += post.category
    searchContent += post.body.raw
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts && initialDisplayPosts.length > 0 && !searchValue
      ? initialDisplayPosts
      : filteredBlogPosts

  const postPreviews =
    displayPosts &&
    displayPosts.map((post) => {
      return <PostPreview key={post.slug} {...post}></PostPreview>
    })

  const searchView = (
    <div className="flex items-center w-full max-w-md my-8 rounded-md text-base-content/50 ring-1 ring-base-content/30">
      <button type="button" className="flex py-1 pl-2 leading-3">
        <Icon icon="fe:search" className="flex-none mr-3 w-6 h-6" />
      </button>
      <div className="w-full">
        <input
          aria-label="Search articles"
          type="text"
          id="search_input"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search..."
          className="w-full text-sm bg-base-100 focus:outline-none"
        />
      </div>
    </div>
  )

  return (
    <div className="blog-list">
      <div className="mt-4 text-3xl font-bold break-words whitespace-pre-wrap 2xl:text-4xl">
        Blog: {title}
      </div>
      <div className="flex flex-wrap mx-auto">
        <div className="w-full md:w-2/3">
          {searchView}
          {postPreviews}
          {pagination && pagination.totalPages > 1 && !searchValue && (
            <ListPagination
              totalPages={pagination.totalPages}
              currentPage={pagination.currentPage}
              basePath={pagination.basePath}
              {...props}
            />
          )}
        </div>
        <BlogNavigation />
      </div>
    </div>
  )
}
