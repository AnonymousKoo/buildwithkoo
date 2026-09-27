import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SiteHeader } from '../components/site-header'
import Home from './page'

describe('BuildWithKoo portfolio remodel', () => {
  it('positions BuildWithKoo as Koo’s venture portfolio', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'I build companies from the system up.',
      }),
    ).toBeInTheDocument()

    expect(screen.getByText(/home for the ventures, platforms, and operating systems/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explore the portfolio/i })).toHaveAttribute(
      'href',
      '#portfolio',
    )
    expect(screen.getByRole('link', { name: /See the build system/i })).toHaveAttribute(
      'href',
      '#build-system',
    )
  })

  it('shows only the three approved top-level ventures', () => {
    render(<Home />)

    const portfolio = screen
      .getByRole('heading', { name: 'Different markets. One build discipline.' })
      .closest('section')

    expect(portfolio).not.toBeNull()

    for (const venture of ['SEKINFRA', 'VYRAL', 'TABLEGRID']) {
      expect(within(portfolio!).getByRole('heading', { name: venture })).toBeInTheDocument()
    }

    expect(within(portfolio!).queryByText(/Hummingbird/i)).not.toBeInTheDocument()
    expect(within(portfolio!).getAllByRole('link', { name: /View venture/i })).toHaveLength(3)
  })

  it('exposes the current build board and shared operating layer', () => {
    render(<Home />)

    const buildBoard = screen
      .getByRole('heading', { name: 'The portfolio is active, not a museum.' })
      .closest('section')

    expect(buildBoard).not.toBeNull()

    for (const item of ['AVUHZ', 'SEKINFRA', 'VYRAL', 'TABLEGRID']) {
      expect(within(buildBoard!).getByRole('heading', { name: item })).toBeInTheDocument()
    }

    expect(screen.getByText('Shared operating layer', { selector: '.architecture-infrastructure span' }))
      .toBeInTheDocument()
  })

  it('presents the six-stage venture build system', () => {
    render(<Home />)

    const buildSystem = screen
      .getByRole('heading', { name: 'Build the logic first. Then compound the company.' })
      .closest('section')

    expect(buildSystem).not.toBeNull()

    const stages = within(buildSystem!)
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent)

    expect(stages).toEqual([
      'Thesis',
      'Domain logic',
      'System',
      'Experience',
      'Operations',
      'Scale',
    ])
  })

  it('keeps the operator partnership as a secondary path', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { name: 'Have an operator-led opportunity worth building?' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/one part of BuildWithKoo—not the whole brand/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Start the application/i })).toHaveAttribute(
      'href',
      '/apply',
    )
  })

  it('uses portfolio-first navigation', () => {
    render(<SiteHeader />)

    for (const [name, href] of [
      ['Portfolio', '/#portfolio'],
      ['Build Board', '/#build-board'],
      ['Build System', '/#build-system'],
    ]) {
      screen.getAllByRole('link', { name }).forEach((link) => {
        expect(link).toHaveAttribute('href', href)
      })
    }

    screen.getAllByRole('link', { name: 'Build With Koo' }).forEach((link) => {
      expect(link).toHaveAttribute('href', '/apply')
    })
  })
})
