'use client'
import * as React from 'react'
import Link from 'next/link'
import { Post } from '@/.contentlayer/generated'
import getFormattedDate from '@/components/libs/getFormattedDate'
import CategoryButton from '../CategoryButton'
import { MDXContentProps, getMDXComponent } from 'mdx-bundler/client'
import CustomLink from '../Link'
import Image from '@/components/Image'
import { Pre } from '../Pre'
import ShareIcons, { ShareIconsProps } from '../ShareIcons'
import siteMetadata from '@/data/siteMetadata'
import { Icon } from '@iconify/react'
import Border_1 from '../Border_1'

export interface PostLayoutProps {
  post: Post
  next?: Post
  prev?: Post
}

const PostLayout = (props: PostLayoutProps) => {
  const post = props.post
  const Component: React.ComponentType<MDXContentProps> = React.useMemo(
    () => getMDXComponent(post.body.code),
    [post.body.code]
  )
  const shareIconsProps: ShareIconsProps = {
    url: `${siteMetadata.siteUrl}${post.path}`,
    title: post.title,
    tags: post.tags,
  }

  const categoryView = post.category && <CategoryButton {...post} />

  const tagView = (
    <div className="flex items-center text-base-content/70">
      <Icon icon="clarity:tags-line" className="w-5 h-5" />
      {post.tags &&
        post.tags.map(
          (tag: string) =>
            tag && (
              <Link key={tag} href={`/tags/${tag}`} className="ml-2">
                <p className="px-2 text-base-content/80 before:content-['#'] before:font-thin rounded-xl bg-base-content/5">
                  {tag}
                </p>
              </Link>
            )
        )}
    </div>
  )

  const dateView = (
    <div className="flex items-center text-base-content/70">
      <Icon icon="formkit:date" className="w-4 h-4" />
      <p className="ml-2 text-sm">{getFormattedDate(post.date)}</p>
    </div>
  )

  const imageView = post.image && (
    <Image
      src={post.image}
      alt={'picture of Post'}
      width={1200}
      height={628}
      className="w-full my-4 rounded"
    />
  )

  const pagenationView = (props.next || props.prev) && (
    <>
      <div className="grid grid-cols-2 gap-4 place-content-stretch xl:gap8">
        {props.prev && (
          <div className="w-full p-4 bg-base-content/5 hover:bg-base-content/10">
            <Link href={`/${props.prev.path}`} className="hover-not">
              <div>
                <p className="text-xs text-base-content/50 2xl:text-base">« Previous</p>
                <p className="mt-2 text-sm truncate 2xl:text-base">{props.prev.title}</p>
              </div>
            </Link>
          </div>
        )}
        {!props.prev && <div className="w-full" />}

        {props.next && (
          <div className="w-full p-4 bg-base-content/5 hover:bg-base-content/10">
            <Link href={`/${props.next.path}`} className="hover-not">
              <div>
                <p className="text-xs text-right text-base-content/50 2xl:text-base">Next »</p>
                <p className="mt-2 text-sm text-right truncate 2xl:text-base">{props.next.title}</p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  )

  return (
    <div className="w-full Post md:w-2/3">
      {categoryView}
      <div className="mt-4 text-3xl font-bold">{post.title}</div>
      <Border_1 />
      {imageView}

      <article className="mt-2 prose break-words whitespace-pre-wrap max-w-none">
        <Component components={{ Image, a: CustomLink, pre: Pre }} />
      </article>
      <Border_1 />
      <div className="flex flex-wrap mb-2">{dateView}</div>
      {post.tags && post.tags.length > 0 && <div className="flex flex-wrap">{tagView}</div>}
      <ShareIcons {...shareIconsProps} />
      <Border_1 />
      {pagenationView}
      <Border_1 />
    </div>
  )
}

export default PostLayout
