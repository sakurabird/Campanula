import Link from 'next/link'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import getPosts from '../libs/getPosts'
import { Post } from '@/.contentlayer/generated'
import getFormattedDate from '../libs/getFormattedDate'

const LatestsCardView = (props: Post) => {
  const image = props.image ? props.image : siteMetadata.ogImage

  return (
    <div className="mb-4 overflow-hidden shadow-xl card card-compact bg-base-content/5 sm:mb-0">
      <Link key={props.slug} href={`/${props.path}`} className="hover-none hover:opacity-70">
        <figure>
          <Image
            src={image}
            alt={'image of article'}
            width={400}
            height={400}
            className="object-cover w-full h-[200px] 2xl:h-[240px]"
          />
        </figure>
        <div className="card-body">
          <p className="text-xs text-base-content/50 2xl:text-base">
            {getFormattedDate(props.date)}
          </p>
          <h2 className="card-title line-clamp-3 2xl:text-2xl">{props.title}</h2>
          <p className="text-sm line-clamp-3 2xl:text-lg">{props.subtitle}</p>
        </div>
      </Link>
    </div>
  )
}

const LatestPosts = () => {
  const posts = getPosts()
  const latestPosts = posts.slice(
    0,
    siteMetadata.home.latestPosts.maxCount ? siteMetadata.home.latestPosts.maxCount : 0
  )
  const readMoreButtonTitle = siteMetadata.readMoreButtonTitle
    ? siteMetadata.readMoreButtonTitle
    : 'Read More...'

  return (
    <>
      {latestPosts.length > 0 && (
        <div className="mt-4 latestposts sm:mt-8 2xl:mt-12">
          {siteMetadata.home.latestPosts.title && (
            <div className="text-2xl font-bold text-center sm:text-4xl">
              <Link key="LatestPosts" href="/blog">
                {siteMetadata.home.latestPosts.title}
              </Link>
            </div>
          )}

          <div className="mt-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:place-content-stretch xl:gap-16 sm:mt-8 2xl:mt-12">
            {latestPosts.map((post) => (
              <LatestsCardView key={post.slug} {...post}></LatestsCardView>
            ))}
          </div>

          {posts.length > siteMetadata.home.latestPosts.maxCount && (
            <button className="mt-4 sm:mt-12 btn btn-primary 2xl:btn-lg">
              <Link key="readMore" href="/blog" className="hover-not hover:opacity-70">
                {readMoreButtonTitle}
              </Link>
            </button>
          )}
        </div>
      )}
    </>
  )
}

export default LatestPosts
