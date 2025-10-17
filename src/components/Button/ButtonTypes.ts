import { JSX } from 'react'

export type ButtonProps = JSX.IntrinsicElements['button'] & {
  color?: ButtonColor
  variant?: ButtonVariant
  size?: ButtonSize
}

export type ButtonColor = 'primary' | 'secondary' | 'muted'
export type ButtonVariant = 'filled' | 'outlined' | 'text'
export type ButtonSize = 'small' | 'medium'
