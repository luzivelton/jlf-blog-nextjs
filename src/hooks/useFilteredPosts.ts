import { useQuery } from '@tanstack/react-query'
import { getAllPosts, getPostsByCategory, getPostsByTag } from '@/lib/api'
import { useFilters } from '@/contexts/FiltersContext/useFilters'
import { useMemo } from 'react'
// No need for QueryKey type with useQuery

export function useFilteredPosts() {
  const { tag, category, limit, page } = useFilters()

  const queryConfig = useMemo(() => {
    if (tag) {
      return {
        queryKey: ['posts', 'tag', tag, limit, page],
        queryFn: () => getPostsByTag(tag, { page, limit }),
      }
    }
    if (category) {
      return {
        queryKey: ['posts', 'category', category, limit, page],
        queryFn: () => getPostsByCategory(category!, { page, limit }),
      }
    }
    return {
      queryKey: ['posts', 'all', limit, page],
      queryFn: () => getAllPosts({ page, limit }),
    }
  }, [category, tag, limit, page])

  return useQuery({
    ...queryConfig,
    enabled: true,
  })
}
