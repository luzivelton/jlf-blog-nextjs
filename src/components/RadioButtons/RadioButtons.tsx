import { RadioButtonsItem } from '@/components/RadioButtons/RadioButtonsItem'
import { RadioButtonsProps } from '@/components/RadioButtons/RadioButtonsTypes'
import { useCallback } from 'react'

export function RadioButtons<T>({
  options,
  value,
  onChange,
}: RadioButtonsProps<T>) {
  const handleOnChange = useCallback(
    (value: T) => {
      onChange(value)
    },
    [onChange]
  )

  return (
    <div
      className='inline-flex gap-2 sm:gap-4'
      role='group'
      aria-label='Radio options'
    >
      {options.map((option) => (
        <RadioButtonsItem
          key={String(option.value)}
          isSelected={value === option.value}
          onChange={handleOnChange}
          label={option.label}
          value={option.value}
        />
      ))}
    </div>
  )
}
