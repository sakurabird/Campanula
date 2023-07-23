import siteMetadata from '@/data/siteMetadata'
import Link from '../Link'

const HeroType2 = () => {
  const image = siteMetadata.home.hero.image
  const textColor = image && image != '' ? 'text-neutral-content' : 'text-neutral'

  return (
    <div className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className={`hero-overlay ${image ? `bg-opacity-60` : `bg-opacity-0`}`}>
        <div className={`text-center hero-content sm:py-12 max-w-none ${textColor}`}>
          <div className="max-w-lg 2xl:max-w-2xl">
            <h1 className="text-3xl font-bold break-words whitespace-pre-wrap sm:text-5xl 2xl:text-7xl">
              {siteMetadata.home.hero.title ? siteMetadata.home.hero.title : siteMetadata.title}
            </h1>
            <div className="mt-4 sm:mt-8 sm:text-lg break-words whitespace-pre-wrap 2xl:mt-12 2xl:text-xl">
              {siteMetadata.home.hero.description
                ? siteMetadata.home.hero.description
                : siteMetadata.description}
            </div>
            {siteMetadata.home.hero.button.enable && (
              <Link
                key="aboutButton"
                href={siteMetadata.home.hero.button.href}
                className="hover-not"
              >
                <button className="btn btn-primary mt-4 sm:mt-8 2xl:mt-12 2xl:btn-lg">
                  {siteMetadata.home.hero.button.text}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroType2
