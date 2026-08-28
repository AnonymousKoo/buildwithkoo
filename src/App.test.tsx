import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('BuildWithKoo landing page', () => {
  it('renders the core Phase 1 content and landmarks', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: /small team/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /good work makes/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /clarity first/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /have a good problem/i })).toBeInTheDocument()
  })

  it('exposes a working mobile navigation toggle', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menuButton = screen.getByRole('button', { name: /menu/i })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(menuButton).toHaveTextContent('Close')

    await user.click(screen.getByRole('link', { name: 'Work' }))
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('provides direct project contact links', () => {
    render(<App />)
    const emailLinks = screen.getAllByRole('link', { name: /hello@buildwithkoo.com/i })

    expect(emailLinks.length).toBeGreaterThan(0)
    emailLinks.forEach((link) => expect(link).toHaveAttribute('href', 'mailto:hello@buildwithkoo.com'))
  })
})
