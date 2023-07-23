'use client'
import { useState } from 'react'
import Link from '../Link'
import headerNavLinks from '@/data/headerNavLinks'
import { Icon } from '@iconify/react'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }
  return (
    <div className="mobilenav md:hidden">
      <div className="dropdown dropdown-end">
        <label tabIndex={0}>
          <button
            className="items-center hover:opacity-70"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <Icon icon="lucide:menu" className="w-7 h-7" />
          </button>
        </label>

        <ul
          tabIndex={0}
          className={`bg-white p-2 shadow dropdown-content menu text-gray-900 rounded w-52 ${
            navShow ? 'block' : 'hidden'
          }`}
        >
          <div key="home" className="p-2">
            <Link key="home" href="/" onClick={onToggleNav}>
              <li key="home">Home</li>
            </Link>
          </div>
          {headerNavLinks.map((link) => (
            <div key={link.title} className="p-2">
              <Link key={link.title} href={link.href} onClick={onToggleNav}>
                <li key={link.title}>{link.title}</li>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileNav
