'use client'
import { Board } from '@/.contentlayer/generated/types'
import { getBoards } from '../libs/getBoard'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import { MDXContentProps, getMDXComponent } from 'mdx-bundler/client'
import Image from '@/components/Image'
import { Pre } from '@/components/Pre'
import CustomLink from '@/components/Link'

const Boards = () => {
  const boards: Board[] = getBoards()
  const lightTheme = siteMetadata.theme.light.name ? siteMetadata.theme.light.name : 'light'
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const BoardView = (props: Board) => {
    const Component: React.ComponentType<MDXContentProps> = React.useMemo(
      () => getMDXComponent(props.body.code),
      [props.body.code]
    )
    const bgColor = resolvedTheme == lightTheme ? props.bgColorLight : props.bgColorDark

    return (
      <div className="mt-4 board sm:mt-8 2xl:mt-12">
        {props.title && (
          <div className="text-2xl font-bold text-center sm:text-4xl">{props.title}</div>
        )}
        <div
          className="mt-4 rounded-lg shadow-xl sm:mt-8 2xl:mt-12 bg-base-content/5 shadow-base/5"
          style={{ backgroundColor: `${bgColor}` }}
        >
          <div className="p-4 text-center sm:p-8 2xl:p-12">
            <article className="prose break-words whitespace-pre-wrap max-w-none">
              <Component components={{ Image, a: CustomLink, pre: Pre }} />
            </article>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {boards.map((board) => (
        <BoardView key={board._id} {...board} />
      ))}
    </>
  )
}

export default Boards
