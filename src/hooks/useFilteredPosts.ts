import { useQuery } from '@tanstack/react-query'
import { getAllPosts, getPostsByCategory } from '@/lib/api'
import { useFilters } from '@/contexts/FiltersContext/useFilters'
import { useMemo } from 'react'

export function useFilteredPosts() {
  const { category, limit, page } = useFilters()

  const queryConfig = useMemo(() => {
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
  }, [category, limit, page])

  return useQuery({
    ...queryConfig,
    enabled: true,
  })
}
