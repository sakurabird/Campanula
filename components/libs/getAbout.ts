import { allAbouts, About } from 'contentlayer/generated'

export function getAbout(fileName: string): About {
  const post = allAbouts.find((item) => item._raw.sourceFileName === fileName)
  if (!post) {
    throw new Error(`Could not find site with fileName ${fileName}`)
  }
  return post
}
