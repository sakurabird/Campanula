import siteMetadata from '@/data/siteMetadata'
import SocialIcons from './SocialIcons'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className="gap-1 py-4 mx-auto mt-12 footer footer-center bg-primary text-primary-content">
        <Link
          key="home"
          href="/"
          aria-label={siteMetadata.title}
          className="text-2xl font-bold hover-not hover:opacity-70"
        >
          {siteMetadata.title}
        </Link>
        <SocialIcons fontSize={18} />
        <p className="px-2 text-sm sm:px-4 2xl:text-base">{siteMetadata.footer.description}</p>
      </div>
    </footer>
  )
}

export default Footer
