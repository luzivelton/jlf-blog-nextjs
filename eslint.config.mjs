import js from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginUnusedImports from 'eslint-plugin-unused-imports'
import { defineConfig } from 'eslint/config'
import testingLibrary from 'eslint-plugin-testing-library'
import pluginPrettier from 'eslint-plugin-prettier'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default defineConfig([
  {
    languageOptions: {
      globals: {
        React: true,
      },
    },
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
  {
    files: ['src/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      js,
      'react-hooks': pluginReactHooks,
      prettier: pluginPrettier,
      'unused-imports': pluginUnusedImports,
    },
    extends: ['js/recommended'],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'unused-imports/no-unused-imports': 'warn',
      'prettier/prettier': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/no-unescaped-entities': 'off',
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'no-inline-comments': 'warn',
    },
  },
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    plugins: {
      'testing-library': testingLibrary,
    },
  },
])
