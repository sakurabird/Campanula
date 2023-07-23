import getPosts from './getPosts'

export interface GroupedDate {
  [key: string]: {
    yy_mm: string
    count: number
  }
}

const getGroupedDate = (): GroupedDate => {
  const posts = getPosts()
  const group: GroupedDate = posts.reduce((result, post) => {
    if (!result[post.archiveSlug]) {
      result[post.archiveSlug] = {
        yy_mm: '',
        count: 0,
      }
    }
    result[post.archiveSlug].yy_mm = post.archiveSlug
    result[post.archiveSlug].count += 1
    return result
  }, {} as GroupedDate)

  return group
}

export default getGroupedDate
