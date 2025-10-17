export type CheckButtonsProps = {
  options: string[]
  value: string[]
  onChange: (param: (prev: string[]) => string[]) => void
}

export type CheckButtonsItemProps = {
  isChecked: boolean
  onChange: (option: string) => void
  label: string
  value: string
}
