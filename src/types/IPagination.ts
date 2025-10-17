export interface IPagination {
  currentPage: number
  totalPages: number
  totalPosts: number
  postsPerPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface PaginationParams {
  page?: number
  limit?: number
}
