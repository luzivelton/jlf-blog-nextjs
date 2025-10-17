import { RadioButtons } from '@/components/RadioButtons/RadioButtons'
import { IPagination } from '@/types/IPagination'
import { useMemo } from 'react'

export function Pagination({ currentPage, totalPages, onChange }: IPagination) {
  const options = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => {
      const option = i + 1
      return {
        label: String(option),
        value: option,
      }
    })
  }, [totalPages])

  return (
    <RadioButtons options={options} value={currentPage} onChange={onChange} />
  )
}
