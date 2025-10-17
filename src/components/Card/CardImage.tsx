import { CardImageProps } from '@/components/Card/CardTypes'
import { Image } from '@/components/Image/Image'
import clsx from 'clsx'

export function CardImage({ src, alt, className, ...props }: CardImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={333}
      height={196}
      className={clsx('object-cover w-full h-[196px]', className)}
      {...props}
    />
  )
}
