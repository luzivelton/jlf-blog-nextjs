import { NavItem } from '@/layouts/AppLayout/components/NavItem'

export function NavMenu() {
  return (
    <nav className='flex items-center'>
      <ul className='flex gap-4'>
        <li>
          <NavItem href='/'>Início</NavItem>
        </li>
        <li>
          <NavItem href='/blog'>Blog</NavItem>
        </li>
      </ul>
    </nav>
  )
}
