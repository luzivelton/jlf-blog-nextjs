import { JSX } from 'react'

type RadioButtonsOption<T> = {
  label: string
  value: T
}

export type RadioButtonsProps<T> = Omit<
  JSX.IntrinsicElements['div'],
  'onChange'
> & {
  options: RadioButtonsOption<T>[]
  value: T | null
  onChange: (param: (value: T | null) => T | null) => void
  allowClear?: boolean
}

export type RadioButtonsItemProps<T> = {
  isSelected: boolean
  onChange: (option: T) => void
  label: string
  value: T
}
