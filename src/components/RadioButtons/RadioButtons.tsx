import { Dropdown } from '@/components/Dropdown/Dropdown'
import { RadioButtonsItem } from '@/components/RadioButtons/RadioButtonsItem'
import { RadioButtonsProps } from '@/components/RadioButtons/RadioButtonsTypes'
import clsx from 'clsx'
import { useCallback, useMemo } from 'react'

export function RadioButtons<T>({
  options,
  value,
  onChange,
  allowClear,
  className,
  ...props
}: RadioButtonsProps<T>) {
  const handleOnChange = useCallback(
    (newValue: T | null) => {
      onChange((prevValue) => {
        const shouldClear = allowClear && newValue === prevValue

        if (shouldClear) {
          return null
        }

        return newValue
      })
    },
    [onChange, allowClear]
  )

  const firstOptions = useMemo(() => {
    return options.slice(0, 3)
  }, [options])

  const collapsedOptions = useMemo(() => {
    return options.slice(3)
  }, [options])

  return (
    <div
      id='radio-buttons'
      className={clsx('inline-flex gap-2 sm:gap-4', className)}
      role='group'
      aria-label='Selecione uma opção'
      {...props}
    >
      {firstOptions.map((option) => (
        <RadioButtonsItem
          key={String(option.value)}
          isSelected={value === option.value}
          onChange={handleOnChange}
          label={option.label}
          value={option.value}
        />
      ))}

      {collapsedOptions.length > 0 && (
        <Dropdown
          selector='#radio-buttons'
          onChange={handleOnChange}
          options={collapsedOptions}
          value={value}
        />
      )}
    </div>
  )
}
