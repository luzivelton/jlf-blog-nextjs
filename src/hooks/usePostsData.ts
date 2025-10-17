import { useQuery } from '@tanstack/react-query'
import {
  getAllPosts,
  getPostsByCategory,
  getPostsByTag,
  getPostById,
} from '@/lib/api'

const DEFAULT_LIMIT = 6

export function useAllPosts(page = 1, limit = DEFAULT_LIMIT) {
  return useQuery({
    queryKey: ['posts', 'all', page, limit],
    queryFn: () => getAllPosts({ page, limit }),
  })
}

export function usePostsByCategory(
  category: string,
  page = 1,
  limit = DEFAULT_LIMIT
) {
  return useQuery({
    queryKey: ['posts', 'category', category, page, limit],
    queryFn: () => getPostsByCategory(category, { page, limit }),
    enabled: !!category,
  })
}

export function usePostsByTag(tag: string, page = 1, limit = DEFAULT_LIMIT) {
  return useQuery({
    queryKey: ['posts', 'tag', tag, page, limit],
    queryFn: () => getPostsByTag(tag, { page, limit }),
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
