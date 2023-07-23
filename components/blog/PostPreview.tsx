import Link from 'next/link'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import { Post } from '@/.contentlayer/generated'
import getFormattedDate from '../libs/getFormattedDate'
import CategoryButton from '../CategoryButton'
import Border_1 from '../Border_1'

const PostPreview = (props: Post) => {
  const { title, subtitle, date, image, category, tags, slug, path } = props
  const postImage = image ? image : siteMetadata.ogImage

  const categoryView = category && <CategoryButton {...props} />

  const tagView =
    tags &&
    tags.map(
      (tag: string) =>
        tag && (
          <Link key={tag} href={`/tags/${tag}`}>
            <p className="px-2 text-sm font-light before:content-['#'] before:font-thin rounded-xl bg-base-content/5">
              {tag}
            </p>
          </Link>
        )
    )

  const imageView = (
    <div className="avatar">
      <div className="rounded hover:opacity-70">
        <Link key={slug} href={`/${path}`}>
          <Image src={postImage} alt={'image of article'} width={200} height={200} />
        </Link>
      </div>
    </div>
  )

  return (
    <div className="postpreview mt-4">
      <div className="flex gap-4">
        <div className="w-1/5">{imageView}</div>
        <div className="flex-col flex-wrap items-center w-4/5">
          {categoryView}
          <Link key={slug} href={`/${path}`}>
            <h2 className="text-xl font-bold mt-2">{title}</h2>
            <p className="font-light mt-2">{subtitle}</p>
          </Link>
          <div className="flex gap-2 mt-4 items-baseline">
            <p className="text-sm font-light">{getFormattedDate(date)}</p>
            <div className="flex flex-wrap gap-2 mt-1">{tagView}</div>
          </div>
        </div>
      </div>
      <Border_1 />
    </div>
  )
}

export default PostPreview
