import Image from 'next/image'

export function Logo() {
  return (
    <div className='flex items-center gap-3'>
      <Image src={'/logoIcon.svg'} alt='Logo do blog' width={46} height={46} />
      <span className='font-heading text-xl sm:text-2xl'>
        JOÃO L. FERNANDES
      </span>
    </div>
  )
}
