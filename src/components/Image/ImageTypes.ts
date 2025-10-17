import { ImageProps as ImageBaseProps } from 'next/image'

export type ImageProps = ImageBaseProps & {
  shape?: 'circle' | 'rounded' | 'square'
}
