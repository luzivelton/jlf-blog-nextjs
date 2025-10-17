'use client'
import { PostList } from '@/app/_components/PostList'
import { useFilteredPosts } from '@/hooks/useFilteredPosts'

export function PostsFeed() {
  const { data, isLoading, error } = useFilteredPosts()

  return (
    <PostList dataSource={data?.posts} isLoading={isLoading} error={error} />
  )
}
