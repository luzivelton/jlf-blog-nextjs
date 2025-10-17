import { CardProps } from '@/components/Card/CardTypes'
import clsx from 'clsx'

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        'border border-[var(--primary)] rounded-md p-4 sm:p-6 flex flex-col gap-[1.625rem]',
        className
      )}
    >
      {children}
    </div>
  )
}
