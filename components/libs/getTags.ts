import getPosts from './getPosts'

export interface Tag {
  name: string
  count: number
}

const getTags = (): Tag[] => {
  const posts = getPosts()
  const tags: Tag[] = Array.from(
    new Set(
      posts.flatMap((post) => {
        if (post.tags) {
          return post.tags
        } else {
          return []
        }
      })
    )
  ).map((tag) => {
    const count = posts.filter((post) => post.tags && tag && post.tags.includes(tag)).length
    return { name: tag, count: count }
  })

  const sortedTags: Tag[] = tags
    .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
    .sort((a, b) => b.count - a.count)

  return sortedTags
}

export default getTags
