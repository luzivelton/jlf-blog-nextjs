import React from 'react'

export function FloatingButton({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='
        fixed bottom-4 right-4 z-50 rounded-full p-2
        transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
        text-[color:var(--primary-foreground)]
        bg-[color:var(--primary)]
        border border-[color:var(--border)]
        shadow-[0_4px_20px_var(--accent-shadow)]
      '
    >
      {children}
    </button>
  )
}
