'use client'
import { PostsHeader } from '@/app/_components/PostsHeader'
import { Pagination } from '@/components/Pagination/Pagination'
import { useFilteredPosts } from '@/hooks/useFilteredPosts'

export function PostsFilters() {
  const { data } = useFilteredPosts()

  return (
    <>
      <PostsHeader />
      <Pagination
        currentPage={data?.pagination?.currentPage || 1}
        totalPages={data?.pagination?.totalPages || 1}
        onChange={() => {}}
      />
    </>
  )
}
