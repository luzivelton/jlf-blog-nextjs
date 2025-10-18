import { PostCardImage } from '@/app/_components/PostCardImage'
import { Card } from '@/components/Card/Card'
import { CardAnchor } from '@/components/Card/CardAnchor'
import { CardContent } from '@/components/Card/CardContent'
import { CardTitle } from '@/components/Card/CardTitle'
import { Typography } from '@/components/Typography/Typography'
import { IPost } from '@/types/IPosts'
import { memo } from 'react'

type PostCardProps = IPost

export const PostCard = memo(
  function PostCard(post: PostCardProps) {
    const { id, title, content, imageUrl, category } = post
    const categoryName = category.name

    return (
      <Card className='relative hover:shadow-[0_4px_44px_0_rgba(28,167,200,0.3)] transition-shadow'>
        <CardAnchor href={`/blog/${id}`} />
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
  },
  (prevProps, nextProps) => {
    return (
      prevProps.id === nextProps.id &&
      prevProps.title === nextProps.title &&
      prevProps.content === nextProps.content &&
      prevProps.imageUrl === nextProps.imageUrl &&
      prevProps.category.name === nextProps.category.name
    )
  }
)
