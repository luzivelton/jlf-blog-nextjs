'use client'

import { CheckButtons } from '@/components/CheckButtons/CheckButtons'
import { CheckButtonsOption } from '@/components/CheckButtons/CheckButtonsTypes'
import { Typography } from '@/components/Typography/Typography'
import { useState } from 'react'

export function PostsCategory() {
  const [options, setOptions] = useState(() => [])
  const [selectedOptions, setSelectedOptions] =
    useState<CheckButtonsOption<string>[]>(options)

  return (
    <div className='flex flex-col sm:items-center sm:flex-row gap-2 sm:gap-4'>
      <Typography variant='bodyMedium'>Categorias:</Typography>
      <CheckButtons
        options={options}
        value={selectedOptions}
        onChange={setSelectedOptions}
      />
    </div>
  )
}
