export interface IPagination {
  currentPage: number
  totalPages: number
  onChange: (page: number) => void
}
