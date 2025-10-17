import { ButtonProps } from '@/components/Button/ButtonTypes'

import clsx from 'clsx'

const baseStyles =
  'rounded-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-1 transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 inline-flex items-center justify-center whitespace-nowrap'

const smallStyles = 'px-1 py-1'
const mediumStyles = 'px-2 py-2 min-w-[2.5rem]'

const styles = {
  filled: {
    primary:
      'shadow-[0_0_0_1px_var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-active)] focus:ring-[var(--primary)]',
    secondary:
      'shadow-[0_0_0_1px_var(--secondary)] bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary-active)] focus:ring-[var(--secondary)]',
  },
  outlined: {
    primary:
      'shadow-[0_0_0_1px_var(--primary)] text-[var(--primary)] hover:bg-[var(--background-active)] focus:ring-[var(--primary)]',
    secondary:
      'shadow-[0_0_0_1px_var(--secondary)] text-[var(--secondary)] hover:bg-[var(--background-active)] focus:ring-[var(--secondary)]',
  },
  text: {
    primary:
      'shadow-none text-[var(--primary)] hover:bg-[var(--background-active)] focus:ring-[var(--primary)]',
    secondary:
      'shadow-none text-[var(--secondary)] hover:bg-[var(--background-active)] focus:ring-[var(--secondary)]',
  },
}

export function Button({
  color = 'primary',
  variant = 'filled',
  className,
  size = 'medium',
  ...props
}: ButtonProps) {
  const variantStyles =
    styles[variant][color] +
    (size === 'small' ? ` ${smallStyles}` : ` ${mediumStyles}`)

  return (
    <button className={clsx(baseStyles, variantStyles, className)} {...props} />
  )
}
