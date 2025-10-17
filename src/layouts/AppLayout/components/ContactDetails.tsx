import { Typography } from '@/components/Typography/Typography'
import { Contact } from '@/layouts/AppLayout/components/Contact'

export function ContactDetails() {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4'>
      <div>
        <Typography secondary={true} variant='body'>
          Vamos conversar?
        </Typography>
        <Typography asVariant={'h2'} variant='titleHuge'>
          Entre em contato
        </Typography>
      </div>
      <Contact />
    </div>
  )
}
