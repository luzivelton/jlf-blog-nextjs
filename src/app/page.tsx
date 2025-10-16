export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-bold font-heading text-huge'>
        Eu sou{' '}
        <span className='bg-[image:var(--accent-gradient)] bg-clip-text text-transparent'>
          Desenvolvedor <span className='whitespace-nowrap'>Front-end</span>
        </span>
      </h1>
      <p className='text-[var(--muted-foreground)] mt-4 max-w-xl m-auto text-center'>
        Estudo programação desde os 15 anos e, ao longo de mais de 4 anos,
        trabalhei em diversos projetos de tecnologia para grandes clientes do
        mercado financeiro. Confira alguns dos projetos que desenvolvi!
      </p>
    </div>
  )
}
