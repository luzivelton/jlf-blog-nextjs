'use client'
import { createContext, useState, ReactNode, useMemo } from 'react'
import { useCallback } from 'react'

type IFiltersContext = {
  category: string | null
  tag: string | null
  setCategory: (param: (category: string | null) => string | null) => void
  setTag: (tag: string | null) => void
  limit: number
  setLimit: (limit: number) => void
  page: number
  setPage: (param: (prevPage: number) => number) => void
}

export const FiltersContext = createContext<IFiltersContext>({
  category: null,
  tag: null,
  setCategory: () => {},
  setTag: () => {},
  limit: 6,
  setLimit: () => {},
  page: 1,
  setPage: () => {},
})

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [category, setCategory] = useState<string | null>(null)
  const [tag, setTag] = useState<string | null>(null)
  const [limit, setLimit] = useState<number>(6)
  const [page, setPage] = useState<number>(1)

  const handleSetCategory = useCallback(
    (updater: (category: string | null) => string | null) => {
      setCategory((prev) => {
        const newCategory = updater(prev)
        setTag(null)
        setPage(1)
        return newCategory
      })
    },
    []
  )

  const handleSetTag = useCallback((newTag: string | null) => {
    setTag(newTag)
    setCategory(null)
    setPage(1)
  }, [])

  const handleSetLimit = useCallback((newLimit: number) => {
    setLimit(newLimit)
    setPage(1)
  }, [])

  const handleSetPage = setPage

  const value = useMemo<IFiltersContext>(
    () => ({
      category,
      tag,
      limit,
      setCategory: handleSetCategory,
      setTag: handleSetTag,
      setLimit: handleSetLimit,
      page,
      setPage: handleSetPage,
    }),
    [
      category,
      tag,
      limit,
      page,
      handleSetTag,
      handleSetLimit,
      handleSetPage,
      handleSetCategory,
    ]
  )

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  )
}
