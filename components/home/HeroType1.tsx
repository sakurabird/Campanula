import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import SectionContainer from '../SectionContainer'
import Link from '../Link'

const HeroType1 = () => {
  const image = siteMetadata.home.hero.image

  return (
    <SectionContainer>
      <div className="home_hero sm:flex gap-4 mx-auto">
        <div className="flex-wrap flex py-4 sm:py-12 text-center sm:flex-col sm:w-1/2 justify-center items-center">
          <h1 className="text-3xl font-bold break-words whitespace-pre-wrap sm:text-5xl 2xl:text-7xl">
            {siteMetadata.home.hero.title}
          </h1>
          <p className="mt-4 sm:mt-8 sm:text-lg break-words whitespace-pre-wrap 2xl:mt-12 2xl:text-xl">
            {siteMetadata.home.hero.description}
          </p>
          {siteMetadata.home.hero.button.enable && (
            <button className="btn btn-primary mt-4 sm:mt-8 2xl:mt-12 2xl:btn-lg">
              <Link
                key="aboutButton"
                href={siteMetadata.home.hero.button.href ? siteMetadata.home.hero.button.href : ''}
                className="hover-not"
              >
                {siteMetadata.home.hero.button.text}
              </Link>
            </button>
          )}
        </div>
        <div className="flex items-center justify-center overflow-hidden sm:flex-col sm:w-1/2 p-4 sm:p-12">
          {image && image != '' && (
            <Image
              src={image}
              alt={'picture of Hero'}
              width={700}
              height={700}
              className="object-cover rounded-lg min-h-full"
            />
          )}
        </div>
      </div>
    </SectionContainer>
  )
}

export default HeroType1
