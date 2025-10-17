import { PostsCategory } from '@/app/_components/PostsCategory'
import { PostsSearch } from '@/app/_components/PostsSearch'
import { Typography } from '@/components/Typography/Typography'

export function PostsHeader() {
  return (
    <header className='flex flex-col sm:flex-row gap-4 justify-between '>
      <div className='flex flex-col sm:items-center sm:flex-row gap-2 sm:gap-8'>
        <Typography variant='titleSmall' asVariant='h2'>
          Minha postagens
        </Typography>
        <PostsSearch />
      </div>
      <PostsCategory />
    </header>
  )
}
