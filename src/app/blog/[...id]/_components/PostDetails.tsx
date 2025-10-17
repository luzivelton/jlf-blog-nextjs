'use client'
import { Details } from '@/app/blog/[...id]/_components/Details'
import { PostRecommendations } from '@/app/blog/[...id]/_components/PostRecommendations'
import { usePostById } from '@/hooks/usePostsData'

type PostDetailsProps = {
  id: string
}

export function PostDetails({ id }: PostDetailsProps) {
  const { data, isLoading, error } = usePostById(id)

  const randomIndex = Math.floor(Math.random() * (data?.post.tags.length || 1))
  const randomTag = data?.post.tags[randomIndex]

  return (
    <>
      <Details isLoading={isLoading} error={error} post={data?.post} />
      {randomTag?.slug && <PostRecommendations tagsSlug={randomTag?.slug} />}
    </>
  )
}
