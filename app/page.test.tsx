import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SiteHeader } from '../components/site-header'
import Home from './page'

describe('BuildWithKoo Phase 2', () => {
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

  it('shows how proven skill can become an independently valuable asset', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { name: 'Not another job. An actual company.' }),
    ).toBeInTheDocument()

    const progression = screen.getByRole('list', {
      name: 'Skill to asset progression',
    })
    const stages = Array.from(progression.querySelectorAll('strong')).map(
      (stage) => stage.textContent,
    )

    expect(stages).toEqual([
      'Skill',
      'Offer',
      'Brand',
      'System',
      'Customers',
      'Team',
      'Company',
      'Asset',
    ])
    expect(screen.getByText(/independently valuable company/i)).toBeInTheDocument()
    expect(screen.getByText(/depends on proof, demand, and mutual fit/i)).toBeInTheDocument()
  })

  it('presents the five-stage company-building process', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { name: 'Build with discipline, not assumptions.' }),
    ).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent),
    ).toEqual(['Discover', 'Validate', 'Structure', 'Build', 'Grow'])
    expect(screen.getByText(/real demand and viable economics/i)).toBeInTheDocument()
    expect(screen.getByText(/ownership model, responsibilities/i)).toBeInTheDocument()
    expect(screen.getByText(/financial visibility, and enterprise value/i)).toBeInTheDocument()
  })

  it('centers operator proof and clearly communicates selectivity', () => {
    render(<Home />)

    const operatorSection = screen
      .getByRole('heading', { name: 'We’re looking for people worth building with.' })
      .closest('section')

    expect(operatorSection).not.toBeNull()
    for (const signal of [
      'Proven skill',
      'Real execution history',
      'Ownership mindset',
      'Leadership',
      'Integrity',
      'Evidence people value what they do',
    ]) {
      expect(within(operatorSection!).getByText(signal)).toBeInTheDocument()
    }
    expect(
      within(operatorSection!).getByText('This is about the operator—not only the idea.'),
    ).toBeInTheDocument()

    for (const exclusion of [
      'Business coaching',
      'Guaranteed funding',
      'LLC setup',
      'Someone else to do all the work',
      'Idea validation with no ability to execute',
      'Equity without responsibility',
    ]) {
      expect(screen.getByText(exclusion)).toBeInTheDocument()
    }
    expect(
      screen.getByText('Applying does not guarantee a partnership.'),
    ).toBeInTheDocument()
  })

  it('ends with the approved temporary Phase 2 application state', () => {
    const { container } = render(<Home />)

    expect(
      screen.getByRole('heading', { name: 'Think you’re someone worth building with?' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/applications are reviewed individually/i)).toBeInTheDocument()
    expect(
      screen.getByLabelText(
        'Start your application — application flow coming in Phase 3',
      ),
    ).toBeInTheDocument()
    expect(container.querySelector('form')).not.toBeInTheDocument()
    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(container.querySelectorAll('h2')).toHaveLength(6)
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
      'hello@buildwithkoo.com',
    ]) {
      expect(content).not.toContain(rejectedContent)
    }

    expect(container.querySelector('form')).not.toBeInTheDocument()
    expect(container.querySelector('input, textarea, select')).not.toBeInTheDocument()
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
