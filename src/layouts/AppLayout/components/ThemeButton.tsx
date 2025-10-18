'use client'
import { FloatingButton } from '@/components/FloatingButton/FloatingButton'
import { LightbulbIcon, LightbulbOffIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <FloatingButton
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
      aria-label='Toggle theme'
    >
      {resolvedTheme === 'dark' ? <LightbulbOffIcon /> : <LightbulbIcon />}
    </FloatingButton>
  )
}
