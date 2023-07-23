'use client'
import siteMetadata from '@/data/siteMetadata'
import SectionContainer from '@/components/SectionContainer'
import PageContainer from '@/components/PageContainer'
import SocialIcons from '@/components/SocialIcons'
import { allAbouts } from '@/.contentlayer/generated'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MDXContentProps, getMDXComponent } from 'mdx-bundler/client'
import { Pre } from '@/components/Pre'
import Image from '@/components/Image'
import CustomLink from '@/components/Link'
import Link from '@/components/Link'

const AboutPage = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const post = allAbouts.find((item) => item._raw.sourceFileName === siteMetadata.about.fileName)
  if (!post) {
    throw new Error(`Could not find site with fileName ${siteMetadata.about.fileName}`)
  }
  const Component: React.ComponentType<MDXContentProps> = React.useMemo(
    () => getMDXComponent(post.body.code),
    [post.body.code]
  )

  if (!mounted) {
    return null
  }

  const image = post.image ? post.image : siteMetadata.avatarImage

  const lightTheme = siteMetadata.theme.light.name ? siteMetadata.theme.light.name : 'light'
  const bgColor = resolvedTheme == lightTheme ? post.bgColorLight : post.bgColorDark

  const HeroView = () => {
    return (
      <div
        className="gap-4 p-4 mx-auto my-4 rounded-md shadow-xl sm:my-12 sm:flex bg-base-content/5"
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex items-center justify-center overflow-hidden rounded-full sm:flex-col sm:w-1/3">
          <Image
            src={image}
            alt={'picture of About'}
            width={300}
            height={300}
            className="object-cover w-56 h-56 rounded-full"
          />
        </div>
        <div className="flex-wrap mt-4 text-center sm:flex-col sm:w-2/3">
          <h1 className="text-3xl font-bold break-words whitespace-pre-wrap sm:text-4xl 2xl:text-5xl">
            {post.heroTitle}
          </h1>
          <p className="py-6 break-words whitespace-pre-wrap">{post.description}</p>
          {post.buttonEnable && (
            <button className="btn btn-primary">
              <Link
                key="aboutButton"
                href={post.buttonHref ? post.buttonHref : ''}
                className="hover-not hover:opacity-70"
              >
                {post.buttonText}
              </Link>
            </button>
          )}

          <div className="mt-8 mb-4">
            <SocialIcons fontSize={24} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <PageContainer>
      <SectionContainer>
        <HeroView />
        <article className="prose break-words whitespace-pre-wrap max-w-none">
          <Component components={{ Image, a: CustomLink, pre: Pre }} />
        </article>
      </SectionContainer>
    </PageContainer>
  )
}

export default AboutPage
