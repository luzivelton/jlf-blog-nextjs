'use client'

import { useEffect, useState } from 'react'

type MockProviderProps = {
  children: React.ReactNode
}

export function MockProvider({ children }: MockProviderProps) {
  const [isMockReady, setMockReady] = useState(false)

  useEffect(() => {
    async function enableMocks() {
      if (process.env.NODE_ENV === 'development') {
        const { worker } = await import('@/__mocks__/browser')
        await worker.start()
      }
      setMockReady(true)
    }

    enableMocks()
  }, [])

  if (!isMockReady) {
    return <div>Carregando mocks</div>
  }

  return <>{children}</>
}
