import { Button } from '@/components/Button/Button'
import { CheckButtonsItemProps } from '@/components/CheckButtons/CheckButtonsTypes'
import { memo } from 'react'

export const CheckButtonsItem = memo(function CheckButtonsItem({
  isChecked,
  onChange,
  label,
  value,
}: CheckButtonsItemProps) {
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
