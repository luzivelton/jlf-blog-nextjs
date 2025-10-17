import type { MenuProps } from '@/components/Menu/MenuTypes'

export type DropdownOption<T> = {
  label: string
  value: T | null
}

export type ValueType<T, M extends boolean | undefined> = M extends true
  ? T[] | null
  : T | null

export type CommonProps<T, M extends boolean | undefined> = Omit<
  MenuProps,
  'onChange'
> & {
  options?: DropdownOption<T>[]
  position?: 'left' | 'right'
  multiple?: M
  value: ValueType<T, M>
}

export type DropdownProps<T, M extends boolean | undefined> = CommonProps<
  T,
  M
> & {
  options: DropdownOption<T>[]
  onChange: (value: T | null) => void
  selector: string
  classNames?: {
    trigger?: string
    panel?: string
  }
}

export type PanelProps<T, M extends boolean | undefined = false> = CommonProps<
  T,
  M
> & {
  isOpen: boolean
  handleChange: (value: T | null) => void
}
