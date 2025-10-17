import {
  InfiniteData,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query'
import { getAllPosts, getPostsByCategory, getPostsByTag } from '@/lib/api'
import { useFilters } from '@/contexts/FiltersContext/useFilters'
import { useMemo } from 'react'
import { PostsResponse } from '@/types/IPosts'

type QueryKey =
  | ['posts', 'tag', string, number]
  | ['posts', 'category', string, number]
  | ['posts', 'all', number]

export function useFilteredPosts() {
  const { tag, category, limit } = useFilters()

  const queryConfig = useMemo(() => {
    if (tag) {
      return {
        queryKey: ['posts', 'tag', tag, limit] as QueryKey,
        queryFn: ({ pageParam = 1 }: { pageParam?: number }) =>
          getPostsByTag(tag, { page: pageParam, limit }),
      }
    }
    if (category) {
      return {
        queryKey: ['posts', 'category', category, limit] as QueryKey,
        queryFn: ({ pageParam = 1 }: { pageParam?: number }) =>
          getPostsByCategory(category!, { page: pageParam, limit }),
      }
    }
    return {
      queryKey: ['posts', 'all', limit] as QueryKey,
      queryFn: ({ pageParam = 1 }: { pageParam?: number }) =>
        getAllPosts({ page: pageParam, limit }),
    }
  }, [category, tag, limit])

  return useInfiniteQuery<
    PostsResponse,
    Error,
    InfiniteData<PostsResponse>,
    QueryKey,
    number
  >({
    ...queryConfig,
    getNextPageParam: (lastPage) => {
      const { pagination } = lastPage
      return pagination?.hasNextPage ? pagination.currentPage + 1 : undefined
    },
    initialPageParam: 1,
    enabled: true,
  })
}
