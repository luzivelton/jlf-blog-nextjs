import clsx from 'clsx'
import ImageBase, { ImageProps as ImageBaseProps } from 'next/image'

type ImageProps = ImageBaseProps & {
  shape?: 'circle' | 'rounded' | 'square'
}

export function Image({ className, shape = 'square', ...props }: ImageProps) {
  return (
    <ImageBase
      className={clsx(className, {
        'rounded-full': shape === 'circle',
        'rounded-lg': shape === 'rounded',
        'rounded-none': shape === 'square',
      })}
      {...props}
    />
  )
}
