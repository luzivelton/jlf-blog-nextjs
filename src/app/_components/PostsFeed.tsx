'use client'
import { PostList } from '@/app/_components/PostList'
import { useFilteredPosts } from '@/hooks/useFilteredPosts'
import { useMemo } from 'react'

export function PostsFeed() {
  const { data, isLoading, isError, error } = useFilteredPosts()

  return (
    <PostList dataSource={data?.posts} isLoading={isLoading} error={error} />
  )
}
