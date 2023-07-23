'use client'
import Link from 'next/link'
import { Post } from '@/.contentlayer/generated'
import { Icon } from '@iconify/react'

const CategoryButton = (post: Post) => {
  return (
    <button className="flex items-center rounded-full bg-accent px-2 py-0.5 uppercase leading-normal text-accent-content hover:bg-opacity-70 hover-not">
      <Icon icon="dashicons:category" className="w-4 h-4" />
      <Link
        key={post.category}
        href={`/categories/${post.category}`}
        className="hover-not hover:bg-opacity-70"
      >
        <p className="text-xs ml-1">{post.category}</p>
      </Link>
    </button>
  )
}

export default CategoryButton
