'use client'
import { Typography } from '@/components/Typography/Typography'
import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemProps = {
  href: Url
  children: React.ReactNode
}

export function NavItem({ href, children }: NavItemProps) {
  const pathname = usePathname()
  const isActive =
    typeof href === 'string'
      ? href === '/'
        ? pathname === '/'
        : pathname?.startsWith(href)
      : false

  return (
    <Typography
      style={{ color: isActive ? 'var(--primary)' : undefined }}
      variant='titleMedium'
    >
      <Link href={href}>{children}</Link>
    </Typography>
  )
}
