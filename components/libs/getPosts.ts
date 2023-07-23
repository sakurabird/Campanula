import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

const getPosts = (): Post[] => {
  const posts = allPosts
  const filterdPosts = posts.filter((post) => post.draft !== true)
  const sortedPosts = filterdPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return sortedPosts
}

export default getPosts

export function getPost(decodedSlug: string): Post {
  const post = allPosts.find((item) => item.slug == decodedSlug)
  if (post == undefined) {
    console.error(`getPost:${decodedSlug} does not exist`)
    notFound()
  }
  return post
}

export function getMatchCategoryPosts(decodedCategory: string): Post[] {
  const posts = getPosts()

  const filteredPosts = posts.filter((post) => {
    return post.category.toLowerCase() === decodedCategory.toLowerCase()
  })

  if (filteredPosts.length === 0) {
    console.error(`getMatchCategoryPosts: category ${decodedCategory} does not exist`)
    notFound()
  }
  return filteredPosts
}

export function getMatchTagPosts(decodedTag: string): Post[] {
  const posts = getPosts()

  const lowerCasePosts = posts.map((post) => {
    const lowerCaseTags = post.tags && post.tags.map((tag) => tag.toLowerCase())
    return { ...post, tags: lowerCaseTags }
  })

  const filteredPosts = lowerCasePosts.filter((post) => {
    return post.tags && post.tags.includes(decodedTag.toLowerCase())
  })

  if (filteredPosts.length === 0) {
    console.error(`getMatchTagPosts: tag ${decodedTag} does not exist`)
    notFound()
  }
  return filteredPosts
}

export function getMatchYY_MMPosts(yy_mm: string): Post[] {
  const posts = getPosts()

  const filteredPosts = posts.filter((post) => {
    return post.archiveSlug === yy_mm
  })

  if (filteredPosts.length === 0) {
    console.error(`getMatchYY_MMPosts: yy_mm ${yy_mm} does not exist`)
    notFound()
  }
  return filteredPosts
}
