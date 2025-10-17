import { PostCardImage } from '@/app/_components/PostCardImage'
import { Card } from '@/components/Card/Card'
import { CardAnchor } from '@/components/Card/CardAnchor'
import { CardContent } from '@/components/Card/CardContent'
import { CardTitle } from '@/components/Card/CardTitle'
import { Typography } from '@/components/Typography/Typography'
import { IPost } from '@/types/IPosts'
import { memo } from 'react'

type PostCardProps = Pick<IPost, 'title' | 'content' | 'imageUrl' | 'id'> & {
  categoryName: string
}

export const PostCard = memo(function PostCard({
  title,
  content,
  imageUrl,
  id,
  categoryName,
}: PostCardProps) {
  return (
    <Card className='relative hover:shadow-[0_4px_44px_0_rgba(28,167,200,0.3)] transition-shadow'>
      <CardAnchor href={`blog/${id}`} />
      <PostCardImage
        src={imageUrl}
        alt='Image representando o post'
        categoryName={categoryName}
      />
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
      <Typography variant='body' primary={true} strong={true}>
        Ler mais
      </Typography>
    </Card>
  )
})
