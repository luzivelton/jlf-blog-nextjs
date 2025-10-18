'use client'
import { PostList } from '@/app/_components/PostList'
import { Typography } from '@/components/Typography/Typography'
import { usePostsByTag } from '@/hooks/usePostsData'

interface PostRecommendationsProps {
  tagsSlug: string
}

export function PostRecommendations({ tagsSlug }: PostRecommendationsProps) {
  const { data, isLoading, error } = usePostsByTag(tagsSlug, 1, 3)

  return (
    <section className='mt-5 sm:mt-9'>
      <Typography
        className='pb-4 sm:pb-10'
        variant='titleMedium'
        asVariant='h2'
      >
        Postagens relacionadas
      </Typography>
      <PostList
        dataSource={data?.posts}
        isLoading={isLoading && !data}
        error={error}
      />
    </section>
  )
}
