import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SiteHeader } from '../components/site-header'
import Home from './page'

describe('BuildWithKoo Phase 1', () => {
  it('communicates the approved ownership proposition', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Build something you can own.' }),
    ).toBeInTheDocument()
    expect(screen.getByText('You bring the skill.')).toBeInTheDocument()
    expect(screen.getByText('We build the company together.')).toBeInTheDocument()
    expect(
      screen.getByLabelText(
        'Skilled operator plus BuildWithKoo leads to company ownership',
      ),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Apply to Build/i })).toHaveAttribute(
      'href',
      '#apply',
    )
    expect(screen.getByRole('link', { name: /See how it works/i })).toHaveAttribute(
      'href',
      '#how-it-works',
    )
  })

  it('presents the approved partnership contribution narrative', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', {
        name: /Being great at what you do and knowing how to build a company/i,
      }),
    ).toBeInTheDocument()

    const youBring = screen.getByText('You bring').closest('article')
    const weBring = screen.getByText('We bring').closest('article')

    expect(youBring).not.toBeNull()
    expect(weBring).not.toBeNull()
    expect(within(youBring!).getByText('Industry knowledge')).toBeInTheDocument()
    expect(within(youBring!).getByText('Leadership')).toBeInTheDocument()
    expect(within(weBring!).getByText('Company strategy')).toBeInTheDocument()
    expect(within(weBring!).getByText('Capital strategy*')).toBeInTheDocument()
    expect(screen.getByText('Together, we build the asset.')).toBeInTheDocument()
    expect(screen.getByText('*Capital depends on the opportunity.')).toBeInTheDocument()
  })

  it('contains no fabricated portfolio, contact form, or contact address', () => {
    const { container } = render(<Home />)
    const content = container.textContent ?? ''

    for (const rejectedContent of [
      'Foundry',
      'Signal',
      'Common Ground',
      'Selected work',
      'Start a project',
      'digital product studio',
    ]) {
      expect(content).not.toContain(rejectedContent)
    }

    expect(container.querySelector('form')).not.toBeInTheDocument()
    expect(container.querySelector('[href^="mailto:"]')).not.toBeInTheDocument()
  })

  it('uses the approved navigation labels and anchors', () => {
    render(<SiteHeader />)

    const expectedLinks = [
      ['The Opportunity', '#opportunity'],
      ['How It Works', '#how-it-works'],
      ['Who We Back', '#who-we-back'],
    ]

    for (const [name, href] of expectedLinks) {
      const links = screen.getAllByRole('link', { name })
      expect(links.length).toBeGreaterThan(0)
      links.forEach((link) => expect(link).toHaveAttribute('href', href))
    }

    screen
      .getAllByRole('link', { name: 'Apply to Build' })
      .forEach((link) => expect(link).toHaveAttribute('href', '#apply'))
  })
})
