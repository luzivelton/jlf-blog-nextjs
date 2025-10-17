import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { JSX } from 'react'

type CardAnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps & {
    children?: React.ReactNode | undefined
  } & React.RefAttributes<HTMLAnchorElement>

export function CardAnchor({ className, ...props }: CardAnchorProps) {
  return (
    <Link
      className={clsx(
        'absolute inset-0 pointer-events-auto cursor-pointer z-10',
        className
      )}
      {...props}
    />
  )
}
