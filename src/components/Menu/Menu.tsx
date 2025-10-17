import React from 'react'
import clsx from 'clsx'
import { Typography } from '@/components/Typography/Typography'
import type { MenuProps } from './MenuTypes'
import { CheckIcon } from 'lucide-react'

export function Menu({ className, ...props }: MenuProps) {
  return <div className={clsx('flex flex-col', className)} {...props}></div>
}

type MenuItemProps<T> = Omit<
  React.HTMLAttributes<HTMLButtonElement>,
  'onClick'
> & {
  selected: boolean
  onClick: (value: T) => void
  value: T
}

Menu.Item = function MenuItem<T>({
  className,
  children,
  value,
  onClick,
  selected,
  ...props
}: MenuItemProps<T>) {
  return (
    <button
      className={clsx(
        'flex text-left leading-5 text-[14px] p-2 rounded-none group focus:outline-none',
        'first:rounded-t-lg last:rounded-b-lg',
        'hover:bg-[var(--background-active)] focus-visible:bg-[var(--background-active)] focus-visible:outline-[var(--primary)] focus-visible:outline-2',
        className
      )}
      {...props}
      onClick={() => onClick(value)}
      aria-pressed={selected}
    >
      <Typography variant='body'>{children}</Typography>
      {selected && <CheckIcon className={'text-[var(--primary)] ml-auto'} />}
    </button>
  )
}

Menu.Empty = function MenuEmpty() {
  return (
    <div className={'p-4 text-center'}>
      <Typography variant='bodySmall'>Sem opções</Typography>
    </div>
  )
}

Menu.Item = function MenuItem<T>({
  className,
  children,
  value,
  onClick,
  selected,
  ...props
}: MenuItemProps<T>) {
  return (
    <button
      className={clsx(
        'flex text-left leading-5 text-[14px] p-2 rounded-none group focus:outline-none',
        'first:rounded-t-lg last:rounded-b-lg',
        'hover:bg-[var(--background-active)] focus-visible:bg-[var(--background-active)] focus-visible:outline-[var(--primary)] focus-visible:outline-2',
        className
      )}
      {...props}
      onClick={() => onClick(value)}
      aria-pressed={selected}
    >
      <Typography variant='body'>{children}</Typography>
      {selected && <CheckIcon className={'text-[var(--accent)] ml-auto'} />}
    </button>
  )
}

Menu.Empty = function MenuEmpty() {
  return (
    <div className={'p-4 text-center'}>
      <Typography variant='bodySmall'>Sem opções</Typography>
    </div>
  )
}
