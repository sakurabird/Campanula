'use client'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'next-share'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'

export interface ShareIconsProps {
  url: string
  title: string
  tags?: string[]
}

const ShareIcons = (props: ShareIconsProps) => {
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const facebookTag = props.tags?.[0]?.length ? `#${props.tags[0]}` : undefined

  const onCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(props.url)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="shareicons flex justify-end gap-4">
      <TwitterShareButton url={props.url} title={props.title} hashtags={props.tags}>
        <TwitterIcon size={30} round className="hover-not hover:opacity-70" />
      </TwitterShareButton>
      <FacebookShareButton url={props.url} quote={props.title} hashtag={facebookTag}>
        <FacebookIcon size={30} round className="hover-not hover:opacity-70" />
      </FacebookShareButton>

      <div>
        <Tooltip open={copied} title="Copied!" trigger="click">
          <button aria-label="Copy url" className="hover-not hover:opacity-70" onClick={onCopy}>
            <Icon icon="ph:link" className="w-8 h-8 pt-1" />
          </button>
        </Tooltip>
      </div>
    </div>
  )
}

export default ShareIcons
