import { Typography } from '@/components/Typography/Typography'

interface ResultProps {
  title: string
  icon: React.ReactNode
}

export function Result({ title, icon }: ResultProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-4 py-16'>
      <Typography
        variant='titleMedium'
        asVariant='h2'
        className='flex items-center gap-2'
      >
        {title}
      </Typography>
      {icon}
    </div>
  )
}
