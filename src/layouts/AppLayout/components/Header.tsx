import { Logo } from '@/layouts/AppLayout/components/Logo'
import { NavMenu } from '@/layouts/AppLayout/components/NavMenu'
import clsx from 'clsx'
import { JSX } from 'react'

type HeaderProps = JSX.IntrinsicElements['header']

export function Header({ className, ...rest }: HeaderProps) {
  return (
    <header
      className={`py-4 sm:py-[4.5rem] inline-padding flex flex-row gap-4 justify-between ${clsx(className)}`}
      {...rest}
    >
      <Logo />
      <NavMenu />
    </header>
  )
}
