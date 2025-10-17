import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-fixed-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/cypress/',
  ],
}

export default createJestConfig(customJestConfig)
