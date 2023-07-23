'use client'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
  const theme = siteMetadata.theme.light.default
    ? siteMetadata.theme.light.name || 'light'
    : siteMetadata.theme.dark.name || 'dark'

  return (
    <ThemeProvider
      themes={[`${siteMetadata.theme.light.name}`, `${siteMetadata.theme.dark.name}`]}
      defaultTheme={`${theme}`}
    >
      {children}
    </ThemeProvider>
  )
}
