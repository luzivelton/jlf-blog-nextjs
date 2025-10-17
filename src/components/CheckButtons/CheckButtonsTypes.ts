export type CheckButtonsOption<T> = {
  label: string
  value: T
}

export type CheckButtonsProps<T> = {
  options: CheckButtonsOption<T>[]
  value: T[] | null
  onChange: (param: (prev: T[] | null) => T[] | null) => void
}

export type CheckButtonsItemProps<T> = {
  isChecked: boolean
  onChange: (option: T) => void
  label: string
  value: T
}
