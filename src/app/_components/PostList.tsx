import { PostCard } from '@/app/_components/PostCard'
import { Result } from '@/components/Result/Result'
import { Spinner } from '@/components/Spinner/Spinner'
import { IPost } from '@/types/IPosts'
import { FileX2Icon } from 'lucide-react'

interface PostListProps {
  dataSource: IPost[] | undefined
  isLoading: boolean
  error: Error | null
}

export function PostList({ dataSource, isLoading, error }: PostListProps) {
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

  if (!dataSource || dataSource.length === 0) {
    return
  }

  return (
    <ul
      className='
      grid gap-6
      sm:grid-cols-2
      md:grid-cols-3
      list-none
      '
    >
      {dataSource.map((post) => (
        <PostCard
          key={post.id}
          author={post.author}
          category={post.category}
          content={post.content}
          createdAt={post.createdAt}
          id={post.id}
          imageUrl={post.imageUrl}
          likes={post.likes}
          tags={post.tags}
          title={post.title}
        />
      ))}
    </ul>
  )
}
