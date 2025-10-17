import { ImageProps } from '@/components/Image/ImageTypes'
import { TypographyProps } from '@/components/Typography/TypographyTypes'
import { PickRequired } from '@/types/PickRequired'
import React, { JSX } from 'react'

export type CardProps = JSX.IntrinsicElements['div'] & {
  children: React.ReactNode
}

export type CardImageProps = PickRequired<Partial<ImageProps>, 'src' | 'alt'>

export type CardTitleProps = Partial<TypographyProps>
export type CardContentProps = Partial<TypographyProps>
