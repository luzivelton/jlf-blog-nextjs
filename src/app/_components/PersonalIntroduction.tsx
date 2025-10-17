import { Image } from '@/components/Image/Image'
import { Typography } from '@/components/Typography/Typography'

export function PersonalIntroduction() {
  return (
    <div className='flex flex-col items-center '>
      <Image
        className='outline-2 outline-[var(--primary)] w-128px h-128px sm:w-[224px] sm:h-[224px]'
        src='/me.jpg'
        alt='Retrato em preto e branco, bem iluminado, de um homem jovem com cabelo escuro e cacheado, óculos e bigode. Ele está olhando para a câmera com um leve sorriso, em frente a um fundo texturizado de cipós emaranhados e folhagem.'
        shape='circle'
        width={150}
        height={150}
      />
      <Typography className='mt-6' variant='body' secondary={true}>
        Olá, meu nome é João<span aria-hidden='true'>_</span>
      </Typography>
      <Typography
        variant='titleHuge'
        asVariant={true}
        className='mt-6 text-2xl sm:text-4xl text-center'
      >
        Eu sou Dev.{' '}
        <span className='bg-[image:var(--accent-gradient)] bg-clip-text text-transparent whitespace-nowrap'>
          Front-end
        </span>
      </Typography>
      <Typography
        asVariant={true}
        variant='body'
        className='mt-6 max-w-xs sm:max-w-xl mx-auto text-center text-base sm:text-lg'
      >
        Estudo programação desde os 15 anos e, ao longo de mais de 4 anos,
        trabalhei em diversos projetos de tecnologia para grandes clientes do
        mercado financeiro. Confira alguns dos projetos que desenvolvi!
      </Typography>
    </div>
  )
}
