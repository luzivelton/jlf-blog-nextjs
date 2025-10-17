import { CheckButtonsItem } from '@/components/CheckButtons/CheckButtonsItem'
import { CheckButtonsProps } from '@/components/CheckButtons/CheckButtonsTypes'
import { useCallback } from 'react'

export function CheckButtons({ options, value, onChange }: CheckButtonsProps) {
  const handleOnChange = useCallback(
    (value: string) => {
      onChange((prev) => {
        if (prev.includes(value)) {
          return prev.filter((v) => v !== value)
        } else {
          return [...prev, value]
        }
      })
    },
    [onChange]
  )

  return (
    <div
      className='inline-flex gap-2 sm:gap-4'
      role='group'
      aria-label='Check options'
    >
      {options.map((option) => (
        <CheckButtonsItem
          key={option}
          isChecked={value.includes(option)}
          onChange={handleOnChange}
          label={option}
          value={option}
        />
      ))}
    </div>
  )
}
