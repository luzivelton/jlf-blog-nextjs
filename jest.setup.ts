import '@testing-library/jest-dom'
import '@testing-library/jest-dom/jest-globals'

jest.mock('@/config/env', () => {
  return {
    API_URL: 'https://localhost:3000',
  }
})
