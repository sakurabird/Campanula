import Link from 'next/link'
import PageContainer from '@/components/PageContainer'
import SectionContainer from '@/components/SectionContainer'

export default function NotFound() {
  return (
    <PageContainer>
      <SectionContainer>
        <div className="text-center mt-14 md:mt-18 min-h-screen">
          <h1 className="text-6xl font-extrabold text-accent">404</h1>
          <h1 className="mt-8 text-2xl font-bold text-error">Page Not found</h1>
          <p>The page you are looking for does not exist.</p>
          <div className="mt-8">
            <Link key="home" href="/">
              <button className="px-10 btn btn-primary btn-sm">Back to Home</button>
            </Link>
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  )
}
