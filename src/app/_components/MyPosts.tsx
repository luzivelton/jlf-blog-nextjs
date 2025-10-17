'use client'
import { PostCard } from '@/app/_components/PostCard'
import { PostsHeader } from '@/app/_components/PostsHeader'
import { Pagination } from '@/components/Pagination/Pagination'

export function MyPosts() {
  return (
    <section className='inline-padding flex flex-col gap-4 sm:gap-8'>
      <PostsHeader />
      <Pagination currentPage={1} totalPages={5} onChange={() => {}} />
      <PostCard {...post} categoryName={post.category.name} />
    </section>
  )
}

const post = {
  id: 'dfd83066-8788-4cb9-864f-531f25136e5f',
  title: 'Creator tendo vigilo comitatus damnatio.',
  content:
    'Reprehenderit aegrotatio peccatus theatrum addo deficio texo voveo nulla. Decumbo audeo quis. Arcus facilis amaritudo suus.\nVilla corrupti patior somniculosus dolorem deludo absorbeo aegre dapifer custodia. Ex patruus supplanto cohibeo. Traho ocer suffoco dolorem triduana suppellex.\nBarba coaegresco demonstro depulso pecus totus eum vigor supra. Quam libero tenax timidus. Aptus rem absorbeo tertius desipio.',
  author: 'Dr. William Stark',
  createdAt: '2025-10-06T21:54:23.653Z',
  likes: 978,
  category: {
    slug: 'programacao',
    name: 'Programação',
    description: 'Tecnologia para desenvolvimento de servidores',
  },
  tags: [
    { slug: 'frontend', name: 'Frontend' },
    { slug: 'backend', name: 'Backend' },
    { slug: 'devops', name: 'DevOps' },
  ],
  imageUrl: 'https://picsum.photos/seed/s0ZSdBtm/400/300?blur=1',
}
