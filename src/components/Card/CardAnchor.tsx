import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

type CardAnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps & {
    children?: React.ReactNode | undefined
  } & React.RefAttributes<HTMLAnchorElement>

export function CardAnchor({ className, onClick, ...props }: CardAnchorProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (onClick) onClick(e)
  }

  return (
    <Link
      className={clsx(
        'absolute inset-0 pointer-events-auto cursor-pointer z-10',
        className
      )}
      {...props}
      onClick={handleClick}
    />
  )
}
