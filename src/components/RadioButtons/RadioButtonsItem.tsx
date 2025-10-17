import { Button } from '@/components/Button/Button'
import { RadioButtonsItemProps } from '@/components/RadioButtons/RadioButtonsTypes'
import { memo } from '@/utils/memo'

export const RadioButtonsItem = memo(function RadioButtonsItem<T>({
  isSelected,
  onChange,
  label,
  value,
  primary,
}: RadioButtonsItemProps<T>) {
  return (
    <Button
      color={isSelected ? (primary ? 'primary' : 'secondary') : 'muted'}
      variant='filled'
      onClick={() => onChange(value)}
      aria-pressed={isSelected}
      aria-label={label}
    >
      {label}
    </Button>
  )
})
