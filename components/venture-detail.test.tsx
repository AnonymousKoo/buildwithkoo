import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { VentureDetail } from './venture-detail'
import { ventures } from '../lib/ventures'

describe('VentureDetail', () => {
  it.each(ventures)('renders the executive venture brief for $name', (venture) => {
    render(<VentureDetail venture={venture} />)

    expect(screen.getByRole('heading', { level: 1, name: venture.name })).toBeInTheDocument()
    expect(screen.getByText(venture.headline)).toBeInTheDocument()
    expect(screen.getByText(venture.audience)).toBeInTheDocument()
    expect(screen.getByText(venture.model)).toBeInTheDocument()
    expect(screen.getByText(venture.problem)).toBeInTheDocument()
    expect(screen.getByText(venture.thesis)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: venture.systemTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: venture.outcomesTitle })).toBeInTheDocument()
    expect(screen.getByText(venture.stageNote)).toBeInTheDocument()

    if (venture.website) {
      expect(screen.getByRole('link', { name: /Live company/i })).toHaveAttribute(
        'href',
        venture.website,
      )
      expect(screen.getByRole('link', { name: new RegExp(`Visit ${venture.name}`, 'i') })).toHaveAttribute(
        'href',
        venture.website,
      )
    }
  })
})
