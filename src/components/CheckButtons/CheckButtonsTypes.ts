export type CheckButtonsOption<T> = {
  label: string
  value: T
}

export type CheckButtonsProps<T> = {
  options: CheckButtonsOption<T>[]
  value: T[]
  onChange: (param: (prev: T[]) => T[]) => void
}

export type CheckButtonsItemProps<T> = {
  isChecked: boolean
  onChange: (option: T) => void
  label: string
  value: T
}
