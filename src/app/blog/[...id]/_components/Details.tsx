import { Button } from '@/components/Button/Button'
import { Image } from '@/components/Image/Image'
import { Result } from '@/components/Result/Result'
import { Spinner } from '@/components/Spinner/Spinner'
import { Typography } from '@/components/Typography/Typography'
import { IPost } from '@/types/IPosts'
import { FileX2Icon } from 'lucide-react'

type DetailsProps = {
  post: IPost | undefined
  isLoading: boolean
  error: Error | null
}

export function Details({ post, error, isLoading }: DetailsProps) {
  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return (
      <Result
        title='Ocorreu um erro ao carregar os posts'
        icon={<FileX2Icon />}
      />
    )
  }

  if (!post) {
    return <Result title='Post não encontrado' icon={<FileX2Icon />} />
  }

  return (
    <section>
      <div className='flex flex-col md:flex-row gap-4 '>
        <div className='flex flex-col gap-4 md:gap-6 flex-1'>
          <Typography
            variant='titleHuge'
            className='text-2xl md:[&&]:text-5xl'
            asVariant='h1'
          >
            {post.title}
          </Typography>
          <div className='flex flex-col gap-2 md:gap-5 items-start'>
            <Typography variant='body'>Categoria</Typography>
            <Button variant='filled' color='primary'>
              {post.category.name}
            </Button>
          </div>
          <div className='flex flex-col gap-2 md:gap-5 items-start'>
            <Typography variant='body'>Tags</Typography>
            <div className='flex flex-wrap gap-2 sm:gap-4'>
              {post.tags.map((tag) => (
                <Button key={tag.slug} variant='outlined' color='secondary'>
                  {tag.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <Image
          className='w-auto h-48 md:h-[22.375rem] md:w-[37.9375rem] flex-1 object-cover'
          src={post.imageUrl}
          alt={`${post.title}`}
          width={608}
          height={358}
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
      <Typography variant='body' asVariant={true} className='mt-6 sm:mt-16'>
        {post.content}
      </Typography>
    </section>
  )
}
