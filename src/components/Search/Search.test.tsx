import { describe, it, expect, jest } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Search } from './Search'

describe('Search', () => {
  it('renders input and search button', () => {
    render(<Search value='' onChange={() => {}} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByLabelText('Pesquisar')).toBeInTheDocument()
  })

  it('calls onChange when typing', async () => {
    const handleChange = jest.fn()
    render(<Search value='' onChange={handleChange} />)
    await userEvent.type(screen.getByRole('textbox'), 'hello')
    expect(handleChange).toHaveBeenCalled()
  })

  it('shows clear button when value is present', () => {
    render(<Search value='test' onChange={() => {}} />)
    expect(screen.getByLabelText('Limpar pesquisa')).toBeInTheDocument()
  })

  it('clears input when clear button is clicked', async () => {
    let value = 'test'
    const handleChange = (v: string) => {
      value = v
    }
    render(<Search value={value} onChange={handleChange} />)
    await userEvent.click(screen.getByLabelText('Limpar pesquisa'))
    expect(value).toBe('')
  })
})
