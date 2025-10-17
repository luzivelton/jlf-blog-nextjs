import { JSX } from 'react'

export type ButtonProps = JSX.IntrinsicElements['button'] & {
  color?: 'primary' | 'secondary'
  variant?: 'filled' | 'outlined' | 'text'
  size?: 'small' | 'medium'
}
