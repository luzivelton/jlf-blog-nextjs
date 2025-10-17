'use client'

import { Search } from '@/components/Search/Search'
import { useState } from 'react'

export function PostsSearch() {
  const [value, setValue] = useState('')

  return <Search placeholder='Buscar...' onChange={setValue} value={value} />
}
