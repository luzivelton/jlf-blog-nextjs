const fixURL = (url: string | undefined) => url && url.replace(/\/+$/, '')

const NEXT_PUBLIC_API_URL = fixURL(process.env.NEXT_PUBLIC_API_URL)

export const API_URL =
  NEXT_PUBLIC_API_URL || 'https://nextjs-alura-teste.vercel.app/api/posts'
export const ENABLE_MOCKS = process.env.NEXT_PUBLIC_ENABLE_MOCKS
