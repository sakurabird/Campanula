import { Props } from './PageContainer'

export default function SectionContainer({ children }: Props) {
  return (
    <section className="max-w-3xl px-4 mx-auto xl:max-w-5xl 2xl:max-w-7xl xl:px-0">
      {children}
    </section>
  )
}
