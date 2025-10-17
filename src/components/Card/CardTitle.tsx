import { CardTitleProps } from '@/components/Card/CardTypes'
import { Typography } from '@/components/Typography/Typography'

export function CardTitle(props: CardTitleProps) {
  return <Typography variant='titleMedium' numberOfLines={2} {...props} />
}
