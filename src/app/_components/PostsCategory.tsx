'use client'

import { CheckButtonsOption } from '@/components/CheckButtons/CheckButtonsTypes'
import { RadioButtons } from '@/components/RadioButtons/RadioButtons'
import { Typography } from '@/components/Typography/Typography'
import { useFilters } from '@/contexts/FiltersContext/useFilters'

export function PostsCategory() {
  const { category, setCategory } = useFilters()

  return (
    <div className='flex flex-col sm:items-center sm:flex-row gap-2 sm:gap-4'>
      <Typography variant='bodyMedium'>Categorias:</Typography>
      <RadioButtons
        options={options}
        value={category}
        onChange={setCategory}
        maxItems={3}
      />
    </div>
  )
}

const options: CheckButtonsOption<string>[] = [
  { label: 'Mobile', value: 'mobile' },
  { label: 'Programação', value: 'programacao' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'DevOps', value: 'devops' },
  { label: 'UX & Design', value: 'ux-design' },
  { label: 'Data Science', value: 'data-science' },
  { label: 'Inovação & Gestão', value: 'inovacao-gestao' },
]
