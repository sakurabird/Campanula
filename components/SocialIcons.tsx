'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import siteMetadata from '@/data/siteMetadata'
import Link from './Link'

const SocialIcons = ({ fontSize = 22 }) => {
  const iconStyle: React.CSSProperties = { fontSize: fontSize }

  return (
    <div className="socialicons flex justify-center gap-4">
      {siteMetadata.email && (
        <Link
          key="mail"
          href={`mailto:${siteMetadata.email}`}
          className="hover-not hover:opacity-70"
        >
          <Icon icon="fluent:mail-32-filled" style={iconStyle} />
        </Link>
      )}
      {siteMetadata.github && (
        <Link key="github" href={siteMetadata.github} className="hover-not hover:opacity-70">
          <Icon icon="bi:github" style={iconStyle} />
        </Link>
      )}
      {siteMetadata.twitter && (
        <Link key="twitter" href={siteMetadata.twitter} className="hover-not hover:opacity-70">
          <Icon icon="bi:twitter" style={iconStyle} />
        </Link>
      )}
      {siteMetadata.facebook && (
        <Link key="facebook" href={siteMetadata.facebook} className="hover-not hover:opacity-70">
          <Icon icon="bi:facebook" style={iconStyle} />
        </Link>
      )}
      {siteMetadata.youtube && (
        <Link key="youtube" href={siteMetadata.youtube} className="hover-not hover:opacity-70">
          <Icon icon="bi:youtube" style={iconStyle} />
        </Link>
      )}
      {siteMetadata.linkedin && (
        <Link key="linkedin" href={siteMetadata.linkedin} className="hover-not hover:opacity-70">
          <Icon icon="bi:linkedin" style={iconStyle} />
        </Link>
      )}
    </div>
  )
}

export default SocialIcons
