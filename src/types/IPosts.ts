import { ICategory } from '@/types/ICategory'
import { IPagination } from '@/types/IPagination'
import { ITag } from '@/types/ITag'

export interface IPost {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
  likes: number
  category: ICategory
  tags: ITag[]
  imageUrl: string
}

export interface Meta {
  generatedAt: string
  seed: string
}

export interface PostsResponse {
  posts: IPost[]
  pagination: IPagination
  meta: Meta
}

export interface PostDetailsResponse {
  post: IPost
  meta: Meta
}
