import { CheckButtonsItem } from '@/components/CheckButtons/CheckButtonsItem'
import { CheckButtonsProps } from '@/components/CheckButtons/CheckButtonsTypes'
import { useCallback } from 'react'

export function CheckButtons<T>({
  options,
  value,
  onChange,
}: CheckButtonsProps<T>) {
  const handleOnChange = useCallback(
    (value: T) => {
      onChange((prev) => {
        const shouldRemove = prev.includes(value)

        if (shouldRemove) {
          return prev.filter((v) => v !== value)
        }

        return [...prev, value]
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
          key={String(option.value)}
          isChecked={value.includes(option.value)}
          onChange={handleOnChange}
          label={option.label}
          value={option.value}
        />
      ))}
    </div>
  )
}
