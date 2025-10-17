import type { InputProps } from '@/components/Input/InputTypes'
import clsx from 'clsx'

export function Input({ className, ref, ...props }: InputProps) {
  return (
    <input
      className={clsx(
        'min-w-0 w-[clamp(320px,100%, 250px)] bg-[var(--background)] border-[var(--primary)] border placeholder-[var(--input-placeholder)] rounded-sm h-10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-1 focus:ring-offset-background transition-colors',
        className
      )}
      ref={ref}
      {...props}
    />
  )
}
