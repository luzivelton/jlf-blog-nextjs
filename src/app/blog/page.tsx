import { Footer } from '@/layouts/AppLayout/components/Footer'

export default function Blog() {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-[var(--muted-foreground)] mt-4 max-w-xl m-auto text-center'>
        Estudo programação desde os 15 anos e, ao longo de uma carreira de mais
      </p>
      <Footer className='mt-10' />
    </div>
  )
}
