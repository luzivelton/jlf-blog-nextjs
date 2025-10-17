'use client'

import { Search } from '@/components/Search/Search'
import { useFilters } from '@/contexts/FiltersContext/useFilters'
import { useDebounce } from '@/hooks/useDebounce'
import { useEffect, useState } from 'react'

export function PostsSearch() {
  const { setTag } = useFilters()
  const [searchValue, setSearchValue] = useState('')

  const debouncedValue = useDebounce(searchValue)

  function handleChange(value: string) {
    setSearchValue(value)

    if (value === '') setTag(value)
  }

  useEffect(() => {
    setTag(debouncedValue)
  }, [debouncedValue, setTag])

  return (
    <Search
      placeholder='Buscar...'
      onChange={handleChange}
      value={searchValue}
    />
  )
}
