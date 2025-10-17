import { FiltersProvider } from '@/contexts/FiltersContext/FiltersContext'
import { getAllPosts } from '@/lib/api'
import getQueryClient from '@/lib/getQueryClient'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import { PostsFeed } from '@/app/_components/PostsFeed'
import { PostsFilters } from '@/app/_components/PostFilters'

export async function MyPosts() {
  const queryClient = getQueryClient()
  const limit = 6

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts', 'all', limit],
    queryFn: ({ pageParam = 1 }) => getAllPosts({ page: pageParam, limit }),
    initialPageParam: 1,
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <FiltersProvider>
        <section className='inline-padding flex flex-col gap-4 sm:gap-8'>
          <PostsFilters />
          <Suspense fallback={<div>Loading posts...</div>}>
            <PostsFeed />
          </Suspense>
        </section>
      </FiltersProvider>
    </HydrationBoundary>
  )
}
