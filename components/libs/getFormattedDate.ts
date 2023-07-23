import { format, parseISO } from 'date-fns'

const getFormattedDate = (props: string): string => {
  const date = parseISO(props)
  const formattedDate = format(date, 'MMM dd, yyyy')
  return formattedDate
}

export default getFormattedDate
