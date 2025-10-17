import { Copyright } from '@/layouts/AppLayout/components/Copyright'
import { JSX } from 'react'

type FooterProps = JSX.IntrinsicElements['footer'] & {
  prefixContent?: React.ReactNode
}

export function Footer({ className, prefixContent, ...rest }: FooterProps) {
  return (
    <footer
      className={`inline-padding pb-10 flex flex-col gap-4 sm:gap-16 ${className}`}
      {...rest}
    >
      {prefixContent}
      <Copyright />
    </footer>
  )
}
