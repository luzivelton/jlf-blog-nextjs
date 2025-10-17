import { CardImage } from '@/components/Card/CardImage'
import { CardImageProps } from '@/components/Card/CardTypes'
import { Typography } from '@/components/Typography/Typography'

type PostCardImageProps = CardImageProps & {
  categoryName: string
}

export function PostCardImage({ categoryName, ...props }: PostCardImageProps) {
  return (
    <div className='relative w-fit w-full'>
      <CardImage {...props} />
      <div className='absolute text-center bottom-0 right-0 bg-[var(--primary)] p-[0.375rem] w-[8.125rem]'>
        <Typography variant='caption'>
          <span className='text-[var(--primary-foreground)]'>
            {categoryName}
          </span>
        </Typography>
      </div>
    </div>
  )
}
