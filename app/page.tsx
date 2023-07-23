import PageContainer from '@/components/PageContainer'
import SectionContainer from '@/components/SectionContainer'
import HeroType1 from '@/components/home/HeroType1'
import HeroType2 from '@/components/home/HeroType2'
import LatestPosts from '@/components/home/LatestPosts'
import List from '@/components/home/List'
import Boards from '@/components/home/Boards'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <PageContainer>
      <div className="home">
        {siteMetadata.home.hero.enable && siteMetadata.home.hero.type == '1' && <HeroType1 />}
        {siteMetadata.home.hero.enable && siteMetadata.home.hero.type == '2' && <HeroType2 />}
        <SectionContainer>
          <Boards />
          {siteMetadata.home.list.enable && <List />}
          <LatestPosts />
        </SectionContainer>
      </div>
    </PageContainer>
  )
}
