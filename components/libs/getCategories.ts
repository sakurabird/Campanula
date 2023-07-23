import getPosts from './getPosts'

export interface Category {
  name: string
  count: number
}

const getCategories = (): Category[] => {
  const posts = getPosts()

  const categories: Category[] = Array.from(new Set(posts.flatMap((post) => post.category))).map(
    (category) => {
      const count = posts.filter((post) => post.category == category).length
      return { name: category, count: count }
    }
  )

  const sortedCategories: Category[] = categories
    .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
    .sort((a, b) => b.count - a.count)

  return sortedCategories
}

export default getCategories
