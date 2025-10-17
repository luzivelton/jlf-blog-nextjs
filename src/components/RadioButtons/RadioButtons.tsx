import { Button } from '@/components/Button/Button'
import { Dropdown } from '@/components/Dropdown/Dropdown'
import { RadioButtonsItem } from '@/components/RadioButtons/RadioButtonsItem'
import { RadioButtonsProps } from '@/components/RadioButtons/RadioButtonsTypes'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'
import { useCallback, useMemo } from 'react'

export function RadioButtons<T>({
  options,
  value,
  onChange,
  allowClear,
  className,
  maxItems,
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
    if (!maxItems) {
      return options
    }
    return options.slice(0, maxItems)
  }, [options, maxItems])

  const collapsedOptions = useMemo(() => {
    if (!maxItems) {
      return []
    }
    return options.slice(maxItems)
  }, [options, maxItems])

  return (
    <div
      id='radio-buttons'
      className={clsx('inline-flex gap-2 sm:gap-4 relative', className)}
      role='group'
      aria-label='Selecione uma opção'
      {...props}
    >
      {firstOptions.map((option) => (
        <RadioButtonsItem
          primary={true}
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
          classNames={{
            panel: 'top-[3rem]',
          }}
        >
          <Button variant='filled' color='secondary'>
            <ChevronDown />
          </Button>
        </Dropdown>
      )}
    </div>
  )
}
