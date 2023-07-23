import { ReactNode } from 'react'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer'
import ScrollTopAndBottom from './ScrollTopAndBottom'

export interface Props {
  children: ReactNode
}

export default function PageContainer({ children }: Props) {
  return (
    <div className="min-h-screen duration-1000 animate-in fade-in-25">
      <Header />
      <ScrollTopAndBottom />
      {children}
      <div id="page-container-bottom" />
      <Footer />
    </div>
  )
}
