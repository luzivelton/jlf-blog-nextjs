import { RadioButtonsProps } from '@/components/RadioButtons/RadioButtonsTypes'

export type PaginationProps = Omit<
  Partial<RadioButtonsProps<number>>,
  'onChange'
> & {
  currentPage: number
  totalPages: number
  onChange: (param: (prevPage: number | null) => number | null) => void
}
