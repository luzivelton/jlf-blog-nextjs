import { Typography } from '@/components/Typography/Typography'
import Image from 'next/image'

export function Logo() {
  return (
    <div className='flex items-center gap-3'>
      <Image
        src={'/logoIcon.svg'}
        alt='Logo do blog'
        width={36}
        height={36}
        className='sm:w-[46px] sm:h-[46px] w-[36px] h-[36px]'
      />
      <Typography variant='titleSmall' className='hidden sm:block'>
        JOÃO L. FERNANDES
      </Typography>
    </div>
  )
}
