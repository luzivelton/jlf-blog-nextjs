type RadioButtonsOption<T> = {
  label: string
  value: T
}

export type RadioButtonsProps<T> = {
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
