import { Typography } from '@/components/Typography/Typography'

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Typography variant='titleHuge' asVariant={true}>
        Eu sou Dev.{' '}
        <span className='bg-[image:var(--accent-gradient)] bg-clip-text text-transparent whitespace-nowrap'>
          Front-end
        </span>
      </Typography>
      <p className='text-[var(--muted-foreground)] mt-4 max-w-xl m-auto text-center'>
        Estudo programação desde os 15 anos e, ao longo de uma carreira de mais
        de 4 anos, trabalhei em diversos projetos de tecnologia para grandes
        clientes do mercado financeiro. Confira alguns dos projetos que
        desenvolvi!
      </p>
    </div>
  )
}
