import '@testing-library/jest-dom'

jest.mock('@/config/env', () => {
  return {
    API_URL: 'https://localhost:3000',
  }
})
