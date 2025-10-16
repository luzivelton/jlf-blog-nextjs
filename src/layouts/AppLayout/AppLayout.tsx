import { Header } from '@/layouts/AppLayout/components/Header'

type AppLayoutProps = {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <section className='max-w-content mx-auto'>
      <Header />
      <div className='px-4'>{children}</div>
    </section>
  )
}
