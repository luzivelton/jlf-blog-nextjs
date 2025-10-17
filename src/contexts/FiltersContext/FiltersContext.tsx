'use client'
import { createContext, useState, ReactNode, useMemo } from 'react'
import { useCallback } from 'react'

type IFiltersContext = {
  category: string | null
  search: string | null
  setCategory: (param: (category: string | null) => string | null) => void
  setSearch: (tag: string | null) => void
  limit: number
  setLimit: (limit: number) => void
  page: number
  setPage: (param: (prevPage: number | null) => number | null) => void
}

export const FiltersContext = createContext<IFiltersContext>({
  category: null,
  search: null,
  setCategory: () => {},
  setSearch: () => {},
  limit: 6,
  setLimit: () => {},
  page: 1,
  setPage: () => {},
})

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [category, setCategory] = useState<string | null>(null)
  const [search, setSearch] = useState<string | null>(null)
  const [limit, setLimit] = useState<number>(6)
  const [page, setPage] = useState<number>(1)

  const handleSetCategory = useCallback(
    (updater: (category: string | null) => string | null) => {
      setCategory((prev) => {
        const newCategory = updater(prev)
        setSearch(null)
        setPage(1)
        return newCategory
      })
    },
    []
  )

  const handleSetSearch = useCallback((newSearch: string | null) => {
    setSearch(newSearch)
    setCategory(null)
    setPage(1)
  }, [])

  const handleSetLimit = useCallback((newLimit: number) => {
    setLimit(newLimit)
    setPage(1)
  }, [])

  const handleSetPage = useCallback(
    (updater: (page: number | null) => number | null) => {
      setPage((prev) => {
        return updater(prev || 1) || 1
      })
    },
    []
  )

  const value = useMemo<IFiltersContext>(
    () => ({
      category,
      search,
      limit,
      setCategory: handleSetCategory,
      setSearch: handleSetSearch,
      setLimit: handleSetLimit,
      page,
      setPage: handleSetPage,
    }),
    [
      category,
      search,
      limit,
      page,
      handleSetSearch,
      handleSetLimit,
      handleSetPage,
      handleSetCategory,
    ]
  )

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  )
}
