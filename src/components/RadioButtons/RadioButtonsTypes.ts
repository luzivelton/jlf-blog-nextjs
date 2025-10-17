type RadioButtonsOption<T> = {
  label: string
  value: T
}

export type RadioButtonsProps<T> = {
  options: RadioButtonsOption<T>[]
  value: T
  onChange: (param: T) => void
}

export type RadioButtonsItemProps<T> = {
  isSelected: boolean
  onChange: (option: T) => void
  label: string
  value: T
}
