import { CardContentProps } from '@/components/Card/CardTypes'
import { Typography } from '@/components/Typography/Typography'

export function CardContent(props: CardContentProps) {
  return <Typography variant='body' numberOfLines={3} {...props} />
}
