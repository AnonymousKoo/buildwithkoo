import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SiteHeader } from '../components/site-header'
import Home from './page'

describe('BuildWithKoo portfolio homepage', () => {
  it('positions BuildWithKoo as the public home for Koo’s ventures', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'I build companies from the system up.',
      }),
    ).toBeInTheDocument()

    expect(screen.getByText(/companies I build and companies I help build/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View the ventures/i })).toHaveAttribute(
      'href',
      '#portfolio',
    )
    expect(screen.getByRole('link', { name: /How I build/i })).toHaveAttribute(
      'href',
      '#approach',
    )
  })

  it('keeps the portfolio focused on the three approved ventures', () => {
    render(<Home />)

    const portfolio = screen
      .getByRole('heading', { name: 'Different ventures. One build discipline.' })
      .closest('section')

    expect(portfolio).not.toBeNull()

    for (const venture of ['SEKINFRA', 'VYRAL', 'TABLEGRID']) {
      expect(within(portfolio!).getByRole('heading', { name: venture })).toBeInTheDocument()
    }

    expect(within(portfolio!).queryByText(/Hummingbird/i)).not.toBeInTheDocument()
    expect(within(portfolio!).getAllByRole('link', { name: /Venture profile/i })).toHaveLength(3)
    const ventureLiveSites = within(portfolio!).getAllByRole('link', { name: /Live site/i })
    expect(ventureLiveSites).toHaveLength(3)
    expect(ventureLiveSites.map((link) => link.getAttribute('href'))).toEqual(
      expect.arrayContaining([
        'https://sekinfra.com',
        'https://vyral-rho.vercel.app',
        'https://tablegrid.vercel.app',
      ]),
    )
    expect(screen.queryByText(/AVUHZ/i)).not.toBeInTheDocument()
  })

  it('separates partner companies from owned ventures', () => {
    render(<Home />)

    const partners = screen
      .getByRole('heading', { name: 'Partner companies. Built together.' })
      .closest('section')

    expect(partners).not.toBeNull()
    expect(within(partners!).getByRole('heading', { name: 'LEGACY BUSINESS CONSULTANTS' })).toBeInTheDocument()
    expect(within(partners!).getByRole('heading', { name: 'YAADBODY' })).toBeInTheDocument()
    expect(within(partners!).getAllByRole('link', { name: /Partner profile/i })).toHaveLength(2)
    const liveSites = within(partners!).getAllByRole('link', { name: /Live site/i })
    expect(liveSites).toHaveLength(2)
    expect(liveSites.map((link) => link.getAttribute('href'))).toEqual(
      expect.arrayContaining([
        'https://www.reveallending.co/id/12985643628',
        'https://yaadbody.vercel.app',
      ]),
    )
    expect(within(partners!).getByText(/not BuildWithKoo-owned ventures/i)).toBeInTheDocument()
  })

  it('explains the portfolio thesis before the build method', () => {
    render(<Home />)

    const thesis = screen
      .getByRole('heading', { name: 'The industries change. The build discipline does not.' })
      .closest('section')

    expect(thesis).not.toBeNull()

    for (const principle of [
      'Outcome before feature',
      'Logic before automation',
      'System before scale',
    ]) {
      expect(within(thesis!).getByRole('heading', { name: principle })).toBeInTheDocument()
    }
  })

  it('presents the six-stage build method', () => {
    render(<Home />)

    const buildSystem = screen
      .getByRole('heading', { name: 'From opportunity to operating company.' })
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

  it('keeps the current work visible without making it the homepage structure', () => {
    render(<Home />)

    const now = screen
      .getByRole('heading', { name: 'What is moving right now.' })
      .closest('section')

    expect(now).not.toBeNull()

    for (const venture of ['SEKINFRA', 'VYRAL', 'TABLEGRID']) {
      expect(within(now!).getByRole('heading', { name: venture })).toBeInTheDocument()
      expect(within(now!).getByRole('link', { name: `View ${venture} venture` })).toBeInTheDocument()
    }
  })

  it('keeps partnership secondary to the portfolio', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', {
        name: 'The portfolio comes first. Partnership is a separate path.',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/BuildWithKoo is first a record of what I build/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explore the partnership path/i })).toHaveAttribute(
      'href',
      '/apply',
    )
  })

  it('uses venture-first navigation', () => {
    render(<SiteHeader />)

    for (const [name, href] of [
      ['Ventures', '/#portfolio'],
      ['Partners', '/#partners'],
      ['Approach', '/#approach'],
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
