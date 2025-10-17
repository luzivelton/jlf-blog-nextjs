'use client'
import { Pagination } from '@/components/Pagination/Pagination'
import { useFilters } from '@/contexts/FiltersContext/useFilters'
import { useFilteredPosts } from '@/hooks/useFilteredPosts'

export function PostsPagination() {
  const { data } = useFilteredPosts()
  const { setPage } = useFilters()

  return (
    <Pagination
      className='mx-auto'
      currentPage={data?.pagination.currentPage || 1}
      totalPages={data?.pagination.totalPages || 1}
      onChange={setPage}
    />
  )
}
