import { Button } from '@/components/Button/Button'
import { CheckButtonsItem } from '@/components/CheckButtons/CheckButtonsItem'
import { CheckButtonsProps } from '@/components/CheckButtons/CheckButtonsTypes'
import { Dropdown } from '@/components/Dropdown/Dropdown'
import { ChevronDown } from 'lucide-react'
import { useCallback, useMemo } from 'react'

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

  const firstOptions = useMemo(() => {
    return options.slice(0, 3)
  }, [options])

  const collapsedOptions = useMemo(() => {
    return options.slice(3)
  }, [options])

  return (
    <div
      id='check-buttons'
      className='inline-flex gap-2 sm:gap-4 relative'
      role='group'
      aria-label='Check options'
    >
      {firstOptions.map((option) => (
        <CheckButtonsItem
          key={String(option.value)}
          isChecked={value.includes(option.value)}
          onChange={handleOnChange}
          label={option.label}
          value={option.value}
        />
      ))}
      {collapsedOptions.length > 0 && (
        <Dropdown
          selector='#check-buttons'
          onChange={handleOnChange}
          options={collapsedOptions}
          value={value}
          classNames={{
            panel: 'top-[3rem]',
          }}
        >
          <Button variant='filled'>
            <ChevronDown />
          </Button>
        </Dropdown>
      )}
    </div>
  )
}
