'use client'
import { Spinner } from '@/components/Spinner/Spinner'
import { useFilters } from '@/contexts/FiltersContext/useFilters'
import { useAllPosts } from '@/hooks/usePostsData'
import { useMemo } from 'react'

export default function Redirect() {
  const { data } = useAllPosts()
  const { category, tag } = useFilters()

  const posts = useMemo(() => data?.pages.flatMap((page) => page.posts), [data])

  const firstPost = posts?.[0].id

  if (firstPost) {
    window.location.href = `/blog/${firstPost}`
  }

  return <Spinner />
}
