import { Header } from '@/layouts/AppLayout/components/Header'

type AppLayoutProps = {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <section className='flex flex-col max-w-content mx-auto min-h-[100dvh]'>
      <Header />
      {children}
    </section>
  )
}
