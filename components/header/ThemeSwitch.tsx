'use client'
import siteMetadata from '@/data/siteMetadata'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Icon } from '@iconify/react'

const ThemeSwitch = () => {
  const lightTheme = siteMetadata.theme.light.name ? siteMetadata.theme.light.name : 'light'
  const darkTheme = siteMetadata.theme.dark.name ? siteMetadata.theme.dark.name : 'dark'

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    if (theme != undefined && ![lightTheme, darkTheme].includes(theme)) {
      // Even if only the dark theme has been changed, there is no way of knowing for sure, so it will be forced to switch to the light theme.
      setTheme(lightTheme)
    }
  }, [darkTheme, lightTheme, setTheme, theme])

  if (!mounted) {
    return null
  }

  const handleThemeSwitch = () => {
    const newDaisyTheme = theme === lightTheme ? darkTheme : lightTheme
    setTheme(newDaisyTheme)
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="ml-4 mr-4 sm:ml-8 hover-not hover:opacity-70"
      onClick={handleThemeSwitch}
    >
      {mounted && theme === darkTheme ? (
        <Icon icon="material-symbols:light-mode" className="w-6 h-6" />
      ) : (
        <Icon icon="ic:outline-dark-mode" className="w-6 h-6" />
      )}
    </button>
  )
}

export default ThemeSwitch
