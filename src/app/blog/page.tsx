'use client'
import { Spinner } from '@/components/Spinner/Spinner'
import { useAllPosts } from '@/hooks/usePostsData'

export default function Redirect() {
  const { data } = useAllPosts()

  const posts = data?.posts
  const firstPost = posts?.[0]?.id

  if (firstPost) {
    window.location.href = `/blog/${firstPost}`
  }

  return <Spinner />
}
