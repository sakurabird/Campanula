import Link from 'next/link'

export interface PaginationProps {
  totalPages: number
  currentPage: number
  basePath: string
}

export function ListPagination(props: PaginationProps) {
  const prevPage = props.currentPage - 1 > 0
  const nextPage = props.currentPage + 1 <= props.totalPages

  const button1 = (
    <Link href={`${props.basePath}${props.currentPage - 1}`} rel="prev">
      <button className="min-w-10 min-h-10 ring-1 rounded-md ring-base-content/70 text-base-content/70">
        «
      </button>
    </Link>
  )

  const button2 = (
    <button
      className="min-w-10 min-h-10 ring-1 rounded-md ring-base-content/70 text-base-content/70 bg-base-content/10"
      disabled
    >
      «
    </button>
  )

  const button3 = (
    <button className="min-w-10 min-h-10 rounded-md text-base-content/70 ml-2 px-2" disabled>
      {props.currentPage} / {props.totalPages}
    </button>
  )

  const button4 = (
    <Link href={`${props.basePath}${props.currentPage + 1}`} rel="next">
      <button className="min-w-10 min-h-10 ring-1 rounded-md ring-base-content/70 text-base-content/70 ml-2">
        »
      </button>
    </Link>
  )

  const button5 = (
    <button
      className="min-w-10 min-h-10 ring-1 ring-base-content/70 rounded-md text-base-content/70 bg-base-content/10 ml-2"
      disabled
    >
      »
    </button>
  )

  return (
    <div className="py-6 space-y-2 md:space-y-5">
      <div className="btn-group">
        {prevPage && button1}
        {!prevPage && button2}
        {button3}
        {nextPage && button4}
        {!nextPage && button5}
      </div>
    </div>
  )
}
