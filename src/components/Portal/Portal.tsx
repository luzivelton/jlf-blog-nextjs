import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  selector: string
  children: React.ReactNode
}

export function Portal({ selector, children }: PortalProps) {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted && ref.current ? createPortal(children, ref.current) : null
}
