'use client'

import { useEffect, useState } from 'react'
import { FloatingButton } from '@/components/FloatingButton/FloatingButton'
import { LightbulbIcon, LightbulbOffIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

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
