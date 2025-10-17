import { FiltersProvider } from '@/contexts/FiltersContext/FiltersContext'
import { getAllPosts } from '@/lib/api'
import getQueryClient from '@/lib/getQueryClient'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import { PostsFeed } from '@/app/_components/PostsFeed'
import { PostsFilters } from '@/app/_components/PostFilters'
import { PostsPagination } from '@/app/_components/PostsPagination'
import { Spinner } from '@/components/Spinner/Spinner'

const LIMIT = 6

export async function MyPosts() {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['posts', 'all', LIMIT],
    queryFn: () => getAllPosts({ page: 1, limit: LIMIT }),
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <FiltersProvider>
        <section className='inline-padding flex flex-col gap-4 sm:gap-8'>
          <PostsFilters />
          <Suspense fallback={<Spinner />}>
            <PostsFeed />
          </Suspense>
          <PostsPagination />
        </section>
      </FiltersProvider>
    </HydrationBoundary>
  )
}
