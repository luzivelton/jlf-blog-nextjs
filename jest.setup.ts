import '@testing-library/jest-dom'
import { server } from './src/__mocks__/node'

jest.mock('@/config/env', () => {
  return {
    API_URL: 'https://localhost:3000',
  }
})

const { TextDecoder, TextEncoder } = require('node:util')

const { ReadableStream, TransformStream } = require('node:stream/web')

const { BroadcastChannel, MessagePort } = require('node:worker_threads')

Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
  ReadableStream: { value: ReadableStream },
  TransformStream: { value: TransformStream },
  BroadcastChannel: { value: BroadcastChannel },
  MessagePort: { value: MessagePort },
})

const { Blob, File } = require('node:buffer')
const { fetch, Headers, FormData, Request, Response } = require('undici')

Object.assign(globalThis, {
  fetch,
  Headers,
  FormData,
  Request,
  Response,
  Blob,
  File,
})

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
