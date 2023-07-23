import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from '../Link'
import Image from 'next/image'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-3 bg-white bg-opacity-10 backdrop-blur md:px-8 2xl:px-12">
      <Link key="home" href="/" aria-label={siteMetadata.title}>
        <div className="flex items-center justify-between">
          {siteMetadata.header.icon && siteMetadata.header.icon != '' && (
            <div className="hover:opacity-70">
              <Image
                src={siteMetadata.header.icon}
                alt={'site icon'}
                width={24}
                height={24}
                className="w-6 h-6 mr-3 2xl:w-10 2xl:h-10 2xl:mr-5"
              />
            </div>
          )}
          {typeof siteMetadata.title === 'string' ? (
            <div className="text-2xl font-semibold md:text-3xl 2xl:text-5xl text-primary hover:opacity-70">
              {siteMetadata.title}
            </div>
          ) : (
            siteMetadata.title
          )}
        </div>
      </Link>
      <div className="flex items-center md:mr-2">
        <div className="hidden md:block">
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href} className="ml-8 font-semibold 2xl:text-base">
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
