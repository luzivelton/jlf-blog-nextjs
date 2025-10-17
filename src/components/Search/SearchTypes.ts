export interface SearchProps
  extends Omit<React.ComponentProps<'input'>, 'onChange' | 'className'> {
  onChange: (_: string) => void
  value?: string | null
  classNames?: {
    container?: string
    input?: string
  }
}
