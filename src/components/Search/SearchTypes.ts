export interface SearchProps
  extends Omit<
    React.ComponentProps<'input'>,
    'onChange' | 'className' | 'value'
  > {
  onChange: (_: string) => void
  value?: string | null
  classNames?: {
    container?: string
    input?: string
  }
}
