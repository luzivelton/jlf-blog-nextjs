import { API_URL } from '@/config/env'
import { PaginationParams } from '@/types/IPagination'
import { IPost, PostsResponse } from '@/types/IPosts'

async function apiFetch<P>(
  endpoint: string,
  params?: P
): Promise<PostsResponse> {
  const url = new URL(`${BASE_URL}${endpoint}`, window.location.origin)
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value))
      }
    })
  }

  const res = await fetch(url.toString(), {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    cache: 'default',
  })

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Unknown error' }))
    throw new Error(error.message || `HTTP error! Status: ${res.status}`)
  }

  return res.json()
}

const BASE_URL = `/api/proxy/posts`

export async function getAllPosts(params: PaginationParams) {
  return apiFetch('', params)
}

export async function getPostsByCategory(
  category: string,
  params: PaginationParams
) {
  return apiFetch(`/category/${category}`, params)
}

export async function getPostsByTag(tag: string, params: PaginationParams) {
  return apiFetch(`/tags/${tag}`, params)
}

export async function getPostById(id: string) {
  return apiFetch(`/id/${id}`)
}
