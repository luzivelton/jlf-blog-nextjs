import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { PostList } from './PostList'
import { IPost } from '@/types/IPosts'

const posts: IPost[] = [
  {
    id: '1',
    title: 'Post 1',
    content: 'Content 1',
    author: 'Author 1',
    createdAt: '2024-06-01T12:00:00Z',
    likes: 10,
    imageUrl: 'https://example.com/1.jpg',
    category: {
      name: 'Cat 1',
      slug: 'cat-1',
      description: 'Category 1 description',
    },
    tags: [],
  },
  {
    id: '2',
    title: 'Post 2',
    content: 'Content 2',
    author: 'Author 2',
    createdAt: '2024-06-02T12:00:00Z',
    likes: 5,
    imageUrl: 'https://example.com/2.jpg',
    category: {
      name: 'Cat 2',
      slug: 'cat-2',
      description: 'Category 2 description',
    },
    tags: [],
  },
]

describe('PostList', () => {
  it('renders a list of posts', () => {
    render(<PostList dataSource={posts} isLoading={false} error={null} />)
    expect(screen.getByText('Post 1')).toBeInTheDocument()
    expect(screen.getByText('Post 2')).toBeInTheDocument()
  })

  it('shows spinner when loading', () => {
    render(<PostList dataSource={undefined} isLoading={true} error={null} />)
    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })

  it('shows error result', () => {
    render(
      <PostList
        dataSource={undefined}
        isLoading={false}
        error={new Error('fail')}
      />
    )
    expect(screen.getByText(/Ocorreu um erro/i)).toBeInTheDocument()
  })

  it('renders nothing if no posts', () => {
    const { container } = render(
      <PostList dataSource={[]} isLoading={false} error={null} />
    )
    expect(container).toBeEmptyDOMElement()
  })
})
