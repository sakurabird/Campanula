import siteMetadata from '@/data/siteMetadata'
import { allBoards, Board } from 'contentlayer/generated'

export function getBoards(): Board[] {
  const boards: Board[] = siteMetadata.home.boards
    .map((item) => {
      const board = getBoard(item.fileName)
      return board
    })
    .filter((board) => board !== undefined && !board.draft) as Board[]
  return boards
}

export function getBoard(fileName: string): Board {
  const post = allBoards.find((item) => item._raw.sourceFileName === fileName)
  if (!post) {
    throw new Error(`Could not find site with fileName ${fileName}`)
  }
  return post
}
