import { PostDetails } from '@/app/blog/[...id]/_components/PostDetails'
import { AppLayout } from '@/layouts/AppLayout/AppLayout'
import { Footer } from '@/layouts/AppLayout/components/Footer'

type IBlogProps = {
  params: Promise<{
    id: string[]
  }>
}

export default async function Blog({ params }: IBlogProps) {
  const awaitedParams = await params
  const id = awaitedParams.id?.[0]

  return (
    <AppLayout className='flex flex-col'>
      <PostDetails id={id} />
      <Footer className='mt-10' />
    </AppLayout>
  )
}
