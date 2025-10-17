export type PaginationProps = {
  currentPage: number
  totalPages: number
  onChange: (param: (prevPage: number) => number) => void
}
