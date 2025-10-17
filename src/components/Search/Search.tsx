'use client'
import { Input } from '@/components/Input/Input'
import clsx from 'clsx'
import React, { useCallback } from 'react'
import type { SearchProps } from '@/components/Search/SearchTypes'
import { Button } from '@/components/Button/Button'
import { SearchIcon, XIcon } from 'lucide-react'

export function Search({ classNames, onChange, value, ...rest }: SearchProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const focusInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  function handleClear(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()

    if (inputRef.current) {
      inputRef.current.value = ''
      focusInput()
    }
    if (onChange) onChange('')
  }

  return (
    <div
      className={clsx(['relative inline-flex w-fit', classNames?.container])}
    >
      <Input
        className={clsx(['pr-[2.25rem]', classNames?.input])}
        ref={inputRef}
        onChange={handleChange}
        {...rest}
      />
      <div className='absolute right-3 top-0 h-full flex items-center '>
        {value ? (
          <Button
            size='small'
            onClick={handleClear}
            variant='text'
            color='primary'
            aria-label='Limpar pesquisa'
            title='Limpar pesquisa'
          >
            <XIcon />
          </Button>
        ) : (
          <Button
            className='hover:bg-transparent'
            size='small'
            onClick={handleClear}
            variant='text'
            color='primary'
            title='Pesquisar'
            aria-label='Pesquisar'
            tabIndex={-1}
          >
            <SearchIcon />
          </Button>
        )}
      </div>
    </div>
  )
}
