import { Button } from '@/components/Button/Button'
import { CheckButtonsItemProps } from '@/components/CheckButtons/CheckButtonsTypes'
import { memo } from '@/utils/memo'

export const CheckButtonsItem = memo(function CheckButtonsItem<T>({
  isChecked,
  onChange,
  label,
  value,
}: CheckButtonsItemProps<T>) {
  return (
    <Button
      variant={isChecked ? 'filled' : 'outlined'}
      onClick={() => onChange(value)}
      aria-pressed={isChecked}
      aria-label={label}
    >
      {label}
    </Button>
  )
})
