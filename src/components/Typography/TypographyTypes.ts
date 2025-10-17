export type _variant =
  | 'body'
  | 'bodySmall'
  | 'bodyMedium'
  | 'titleHuge'
  | 'h2'
  | 'titleSmall'
  | 'caption'

export type TypographyElementProps =
  React.HTMLAttributes<HTMLParagraphElement> & {
    variant: _variant
    asVariant?: boolean | 'h1' | 'h2' | 'h3'
  }

export type TypographyElement<T extends TypographyElementProps> =
  React.ElementType<T>

export type TypographyProps = TypographyElementProps & {
  strong?: boolean
  secondary?: boolean
  numberOfLines?: number
  asVariant?: TypographyElementProps['asVariant']
}
