import { useFilters } from '@/contexts/FiltersContext/useFilters'
import { usePostsByCategory } from '@/hooks/usePostsData'

export function useCurrentPosts() {
  const { category } = useFilters()
  const { data } = usePostsByCategory(category!)

  if (category) {
    return data
  }
}
