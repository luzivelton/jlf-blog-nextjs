import { Header } from '@/layouts/AppLayout/components/Header'

type AppLayoutProps = {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className='max-w-content mx-auto'>
      <Header />
      {children}
    </div>
  )
}
