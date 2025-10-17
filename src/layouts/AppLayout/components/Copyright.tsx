import { Typography } from '@/components/Typography/Typography'

export function Copyright() {
  return (
    <div className='flex flex-col items-center'>
      <Typography variant='bodySmall'>
        © Copyright 2025. Produzido por Fernanda Mascheti.
      </Typography>
      <Typography variant='bodySmall'>
        Desenvolvimento por João Luiz Fernandes.
      </Typography>
    </div>
  )
}
