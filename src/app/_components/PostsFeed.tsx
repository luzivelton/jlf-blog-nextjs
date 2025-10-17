'use client'
import { PostList } from '@/app/_components/PostList'
import { useFilteredPosts } from '@/hooks/useFilteredPosts'
import { useMemo } from 'react'

export function PostsFeed() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useFilteredPosts()

  const posts = useMemo(() => data?.pages.flatMap((page) => page.posts), [data])

  return <PostList dataSource={posts} isLoading={isLoading} error={error} />
}
