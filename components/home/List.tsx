import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import getPosts from '../libs/getPosts'
import { Post } from '@/.contentlayer/generated'
import getFormattedDate from '../libs/getFormattedDate'

const ListRow = (props: Post) => {
  return (
    <>
      <Link key={props.slug} href={`/${props.path}`}>
        <p className="leading-6 text-sm text-base-content/50 2xl:text-base">
          {getFormattedDate(props.date)}
        </p>
        <p className="leading-6 text-lg 2xl:text-2xl font-semibold truncate">{props.title}</p>
        <p className="leading-6 2xl:text-lg truncate">{props.subtitle}</p>
      </Link>
    </>
  )
}

const List = () => {
  const posts = getPosts()
  const href = siteMetadata.home.list.href
  const hrefArray = href.split('/')
  const filteredPosts =
    hrefArray[1] == 'categories'
      ? posts.filter((post) => post.category == hrefArray[2])
      : posts.filter((post) => post.tags && post.tags.includes(hrefArray[2]))
  const slicedPosts = filteredPosts.slice(
    0,
    siteMetadata.home.list.maxCount ? siteMetadata.home.list.maxCount : posts.length
  )

  return (
    <div className="list mt-4 sm:mt-8 2xl:mt-12">
      {siteMetadata.home.list.title && (
        <div className="text-2xl font-bold text-center sm:text-4xl">
          <Link key="homelist" href={siteMetadata.home.list.href} className="hover:opacity-70">
            {siteMetadata.home.list.title}
          </Link>
        </div>
      )}

      <div className="mt-2">
        {slicedPosts &&
          slicedPosts.map((post) => (
            <div key={post.slug}>
              <ListRow key={post.slug} {...post} />
              <div className="my-1 divider"></div>
            </div>
          ))}
      </div>

      <button className="mt-4 btn btn-primary 2xl:btn-lg">
        <Link
          key="homelist"
          href={siteMetadata.home.list.href}
          className="hover-not hover:opacity-70"
        >
          Read more...
        </Link>
      </button>
    </div>
  )
}

export default List
