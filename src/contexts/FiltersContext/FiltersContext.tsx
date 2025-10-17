'use client'
import { createContext, useState, ReactNode, useMemo } from 'react'

type IFiltersContext = {
  category: string | null
  tag: string | null
  setCategory: (param: (category: string | null) => string | null) => void
  setTag: (tag: string | null) => void
  limit: number
  setLimit: (limit: number) => void
}

export const FiltersContext = createContext<IFiltersContext>({
  category: null,
  tag: null,
  setCategory: () => {},
  setTag: () => {},
  limit: 6,
  setLimit: () => {},
})

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [category, setCategory] = useState<string | null>(null)
  const [tag, setTag] = useState<string | null>(null)
  const [limit, setLimit] = useState<number>(6)

  const value = useMemo<IFiltersContext>(
    () => ({
      category,
      tag,
      limit,
      setCategory,
      setTag,
      setLimit,
    }),
    [category, tag, limit]
  )

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  )
}
