import { JSX } from 'react'

type RadioButtonsOption<T> = {
  label: string
  value: T
}

export type RadioButtonsProps<T> = JSX.IntrinsicElements['div'] & {
  options: RadioButtonsOption<T>[]
  value: T
  onChange: (param: (value: T) => T) => void
  allowClear?: boolean
}

export type RadioButtonsItemProps<T> = {
  isSelected: boolean
  onChange: (option: T) => void
  label: string
  value: T
}
