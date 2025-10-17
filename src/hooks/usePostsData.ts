import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import {
  getAllPosts,
  getPostsByCategory,
  getPostsByTag,
  getPostById,
} from '@/lib/api'

const DEFAULT_LIMIT = 6

export function useAllPosts(limit = DEFAULT_LIMIT) {
  return useInfiniteQuery({
    queryKey: ['posts', 'all', limit],
    queryFn: ({ pageParam = 1 }) => getAllPosts({ page: pageParam, limit }),
    getNextPageParam: (lastPage) => {
      const { pagination } = lastPage
      return pagination?.hasNextPage ? pagination.currentPage + 1 : undefined
    },
    initialPageParam: 1,
  })
}

export function usePostsByCategory(category: string, limit = DEFAULT_LIMIT) {
  return useInfiniteQuery({
    queryKey: ['posts', 'category', category, limit],
    queryFn: ({ pageParam = 1 }) =>
      getPostsByCategory(category, { page: pageParam, limit }),
    getNextPageParam: (lastPage) => {
      const { pagination } = lastPage
      return pagination?.hasNextPage ? pagination.currentPage + 1 : undefined
    },
    initialPageParam: 1,
    enabled: !!category,
  })
}

export function usePostsByTag(tag: string, limit = DEFAULT_LIMIT) {
  return useInfiniteQuery({
    queryKey: ['posts', 'tag', tag, limit],
    queryFn: ({ pageParam = 1 }) =>
      getPostsByTag(tag, { page: pageParam, limit }),
    getNextPageParam: (lastPage) => {
      const { pagination } = lastPage
      return pagination?.hasNextPage ? pagination.currentPage + 1 : undefined
    },
    initialPageParam: 1,
    enabled: !!tag,
  })
}

export function usePostById(id: string) {
  return useQuery({
    queryKey: ['post', id],
    queryFn: () => getPostById(id),
    enabled: !!id,
  })
}
