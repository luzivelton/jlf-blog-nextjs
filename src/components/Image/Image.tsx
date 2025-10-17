import { ImageProps } from '@/components/Image/ImageTypes'
import clsx from 'clsx'
import ImageBase from 'next/image'

export function Image({ className, shape = 'square', ...props }: ImageProps) {
  return (
    <ImageBase
      className={clsx(
        {
          'rounded-full': shape === 'circle',
          'rounded-lg': shape === 'rounded',
          'rounded-none': shape === 'square',
        },
        className
      )}
      {...props}
    />
  )
}
