// app/api/proxy/[...path]/route.ts
import { API_URL } from '@/config/env'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  params: Promise<{ path: string[] }>
) {
  const { searchParams } = new URL(request.url)
  const { path } = await params
  const endpoint = path ? path.join('/') : ''
  const url = `${API_URL}/${endpoint}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'default',
    })

    if (!response.ok) {
      throw new Error(`External API error: ${response.status}`)
    }
    console.log({ response })
    const data = await response.json()

    return NextResponse.json(data, {
      status: response.status,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: (error as Error).message || 'Failed to fetch from external API',
      },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
