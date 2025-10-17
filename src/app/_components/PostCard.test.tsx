import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { PostCard } from './PostCard'

const post = {
  id: '123',
  title: 'Test Post',
  content: 'Test content',
  imageUrl: 'https://example.com/image.jpg',
  categoryName: 'Test Category',
}

describe('PostCard', () => {
  it('navigates to details when card is clicked', async () => {
    render(<PostCard {...post} />)

    const cardLink = screen.getByRole('link')

    expect(cardLink).toHaveAttribute('href', `/blog/${post.id}`)
  })
})
