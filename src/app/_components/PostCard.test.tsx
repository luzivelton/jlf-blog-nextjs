import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { PostCard } from './PostCard'
import { IPost } from '@/types/IPosts'

const post: IPost = {
  id: '123',
  title: 'Test Post',
  content: 'Test content',
  imageUrl: 'https://example.com/image.jpg',
  category: {
    name: 'Test Category',
    slug: 'test-category',
    description: 'A test category',
  },
  author: 'John Doe',
  createdAt: '2024-06-01T12:00:00Z',
  likes: 10,
  tags: [
    { name: 'Tag1', slug: 'tag1' },
    { name: 'Tag2', slug: 'tag2' },
  ],
}

describe('PostCard', () => {
  it('navigates to details when card is clicked', async () => {
    render(
      <PostCard
        id={post.id}
        title={post.title}
        content={post.content}
        imageUrl={post.imageUrl}
        category={post.category}
        author={post.author}
        createdAt={post.createdAt}
        likes={post.likes}
        tags={post.tags}
      />
    )

    const cardLink = screen.getByRole('link')

    expect(cardLink).toHaveAttribute('href', `/blog/${post.id}`)
  })
})
