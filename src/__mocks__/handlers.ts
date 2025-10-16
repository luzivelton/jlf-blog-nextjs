import { API_URL } from '@/config/env'
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get(`${API_URL}`, () => {
    return HttpResponse.json('OK')
  }),
]
