import { FloatingButton } from '@/components/FloatingButton/FloatingButton'
import { Header } from '@/layouts/AppLayout/components/Header'
import { ThemeButton } from '@/layouts/AppLayout/components/ThemeButton'
import clsx from 'clsx'
import { LightbulbIcon, LightbulbOffIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { JSX } from 'react/jsx-dev-runtime'

type AppLayoutProps = JSX.IntrinsicElements['section'] & {
  children: React.ReactNode
}

export function AppLayout({ className, children }: AppLayoutProps) {
  return (
    <section
      className={clsx(
        'flex flex-col max-w-content mx-auto min-h-[100dvh]',
        className
      )}
    >
      <Header />
      {children}
      <ThemeButton />
    </section>
  )
}
