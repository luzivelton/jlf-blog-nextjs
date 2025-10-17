import type {
  _variant,
  TypographyElement,
  TypographyElementProps,
  TypographyProps,
} from '@/components/Typography/TypographyTypes'
import { useMemo } from 'react'
import clsx from 'clsx'

const VARIANT_CLASSNAMES = {
  bodySmall: 'body bodySmall',
  bodyMedium: 'body bodyMedium',
  body: 'body bodyDefault',
  caption: 'caption',
  titleHuge: 'title titleHuge',
  h2: 'title h2',
  titleMedium: 'title titleMedium',
}

export function Typography({
  variant,
  strong,
  primary,
  className,
  numberOfLines,
  style,
  asVariant,
  ...props
}: TypographyProps) {
  const VariantComponent = VARIANT_COMPONENT[variant]
  const variantClass = VARIANT_CLASSNAMES[variant]

  const styleFinal = useMemo(() => {
    if (!numberOfLines) return style
    return {
      ...style,
      '--line-number': numberOfLines,
    }
  }, [numberOfLines, style])

  return (
    <VariantComponent
      className={clsx(
        variantClass,
        {
          strong,
          primary,
          ellipsis: numberOfLines,
        },
        className
      )}
      variant={variant}
      style={styleFinal}
      asVariant={asVariant}
      {...props}
    />
  )
}

function Body({
  className,
  variant,
  asVariant,
  ...props
}: TypographyElementProps) {
  if (asVariant) {
    switch (variant) {
      case 'bodySmall':
        return <span className={className} {...props} />
      default:
        return <p className={className} {...props} />
    }
  }
  return <span className={className} {...props} />
}

function Title({
  variant,
  className,
  asVariant,
  ...props
}: TypographyElementProps) {
  if (asVariant === true) {
    switch (variant) {
      case 'titleHuge':
        return <h1 className={className} {...props} />
      case 'h2':
        return <h2 className={className} {...props} />
      case 'titleMedium':
        return <h3 className={className} {...props} />
    }
  }

  if (typeof asVariant === 'string') {
    switch (asVariant) {
      case 'h1':
        return <h1 className={className} {...props} />
      case 'h2':
        return <h2 className={className} {...props} />
      case 'h3':
        return <h3 className={className} {...props} />
    }
  }

  return <span className={className} {...props} />
}

const VARIANT_COMPONENT: Record<
  _variant,
  TypographyElement<TypographyElementProps>
> = {
  bodySmall: Body,
  bodyMedium: Body,
  body: Body,
  caption: Body,
  titleHuge: Title,
  h2: Title,
  titleMedium: Title,
}
