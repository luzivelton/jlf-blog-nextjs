import { Logo } from '@/layouts/AppLayout/components/Logo'
import { NavMenu } from '@/layouts/AppLayout/components/NavMenu'

export function Header() {
  return (
    <header className='flex flex-row gap-4 justify-between py-4  sm:py-8 px-4 '>
      <Logo />
      <NavMenu />
    </header>
  )
}
