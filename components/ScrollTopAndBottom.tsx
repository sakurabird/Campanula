'use client'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

const ScrollTopAndBottom = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const handleScrollToBottom = () => {
    const element = document.getElementById('page-container-bottom')
    if (!element) return
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className={`fixed right-8 bottom-8 hidden flex-col gap-3 ${show ? 'md:flex' : 'md:hidden'}`}
    >
      <button
        aria-label="Scroll To Top"
        onClick={handleScrollTop}
        className="p-2 transition-all rounded-full text-base-100 bg-base-content/40 hover:bg-base-content/30 hover-not"
      >
        <Icon icon="ph:arrow-up-bold" className="w-4 h-4" />
      </button>
      <button
        aria-label="Scroll To Comment"
        onClick={handleScrollToBottom}
        className="p-2 transition-all rounded-full text-base-100 bg-base-content/40 hover:bg-base-content/30 hover-not"
      >
        <Icon icon="ph:arrow-down-bold" className="w-4 h-4" />
      </button>
    </div>
  )
}

export default ScrollTopAndBottom
