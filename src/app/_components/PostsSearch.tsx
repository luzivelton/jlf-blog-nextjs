'use client'

import { Search } from '@/components/Search/Search'
import { useFilters } from '@/contexts/FiltersContext/useFilters'
import { useDebounce } from '@/hooks/useDebounce'
import { useEffect, useState } from 'react'

export function PostsSearch() {
  const { setSearch } = useFilters()
  const [searchValue, setSearchValue] = useState('')

  const debouncedValue = useDebounce(searchValue)

  function handleChange(value: string) {
    setSearchValue(value)

    if (value === '') setSearch(value)
  }

  useEffect(() => {
    setSearch(debouncedValue)
  }, [debouncedValue, setSearch])

  return (
    <Search
      placeholder='Buscar...'
      onChange={handleChange}
      value={searchValue}
    />
  )
}
