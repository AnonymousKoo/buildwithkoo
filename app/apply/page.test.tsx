import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ApplyPage from './page'

function enter(label: string, value: string) {
  fireEvent.change(screen.getByLabelText(label, { exact: false }), { target: { value } })
}

function continueApplication() {
  fireEvent.click(screen.getByRole('button', { name: 'Continue' }))
}

function completeAboutYou() {
  enter('Full name', 'Jordan Operator')
  enter('City / market', 'Atlanta')
  enter('What are you exceptionally good at?', 'Building field service teams')
  enter('Years of experience', '12')
  continueApplication()
}

function completeProof() {
  enter('Are people currently paying you for this?', 'Yes')
  enter('Briefly describe your customers / work', 'Regional operators hire my team')
  enter('What proof can you point to that you can execute?', 'Built and led three teams')
  continueApplication()
}

function completeOpportunity() {
  enter('What do you believe could be built around your skill?', 'A specialized services company')
  enter('What problem does it solve?', 'Inconsistent field execution')
  enter('Who would pay for it?', 'Multi-location operators')
  enter('What market / industry is this in?', 'Commercial services')
  continueApplication()
}

function completePartnership() {
  enter('Why do you want to build with BuildWithKoo?', 'To build a durable operating company')
  enter('What would you expect to own / operate?', 'Service delivery and the operating team')
  enter('What are you prepared to contribute?', 'Full-time leadership and domain relationships')
  enter(
    'Why are you the right operator for this opportunity?',
    'I have led this work across multiple markets',
  )
  continueApplication()
}

function completeContact() {
  enter('Email', 'jordan@example.com')
  enter('Phone', '404-555-0147')
  enter('Preferred contact method', 'Email')
  fireEvent.click(screen.getByRole('button', { name: 'Review application' }))
}

describe('BuildWithKoo Phase 3A application', () => {
  it('renders the application introduction and first of five steps', () => {
    render(<ApplyPage />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Tell us what you’re great at.' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/We review operators, proof, and opportunities individually/i),
    ).toBeInTheDocument()
    expect(screen.getByText('Applying does not guarantee a partnership.')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'About You' })).toBeInTheDocument()
    expect(screen.getByRole('progressbar', { name: 'Step 1 of 5' })).toHaveAttribute(
      'aria-valuenow',
      '1',
    )
  })

  it('prevents empty progression with associated required-field errors', () => {
    render(<ApplyPage />)

    continueApplication()

    expect(screen.getByRole('heading', { level: 2, name: 'About You' })).toBeInTheDocument()
    expect(screen.getAllByText('This field is required.')).toHaveLength(4)
    expect(screen.getByLabelText('Full name', { exact: false })).toHaveAttribute(
      'aria-invalid',
      'true',
    )
  })

  it('supports five-step navigation, Back, and preserved answers', () => {
    render(<ApplyPage />)

    completeAboutYou()
    expect(screen.getByRole('heading', { level: 2, name: 'Proof' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Back' }))
    expect(screen.getByLabelText('Full name', { exact: false })).toHaveValue('Jordan Operator')
    expect(screen.getByLabelText('City / market', { exact: false })).toHaveValue('Atlanta')

    continueApplication()
    completeProof()
    expect(screen.getByRole('heading', { level: 2, name: 'Opportunity' })).toBeInTheDocument()
    completeOpportunity()
    expect(screen.getByRole('heading', { level: 2, name: 'Partnership' })).toBeInTheDocument()
    completePartnership()
    expect(screen.getByRole('heading', { level: 2, name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('progressbar', { name: 'Step 5 of 5' })).toHaveAttribute(
      'aria-valuenow',
      '5',
    )
  })

  it('shows a review screen with editable sections and no active submission', () => {
    const { container } = render(<ApplyPage />)

    completeAboutYou()
    completeProof()
    completeOpportunity()
    completePartnership()
    completeContact()

    expect(
      screen.getByRole('heading', { level: 1, name: 'Review what you’ve shared.' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Jordan Operator')).toBeInTheDocument()
    expect(screen.getByText('A specialized services company')).toBeInTheDocument()
    expect(screen.getByText('jordan@example.com')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Edit About You' })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Submission connection coming next.' }),
    ).toBeDisabled()
    expect(screen.getByText('Submission is not active yet.')).toBeInTheDocument()
    expect(container.querySelector('form')).not.toBeInTheDocument()
    expect(container.querySelector('[action]')).not.toBeInTheDocument()
    expect(container.querySelector('[href^="mailto:"]')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Edit Proof' }))
    expect(screen.getByRole('heading', { level: 2, name: 'Proof' })).toBeInTheDocument()
    expect(screen.getByLabelText('Briefly describe your customers / work', { exact: false })).toHaveValue(
      'Regional operators hire my team',
    )
    const form = container.querySelector('form')
    expect(form).toBeInTheDocument()
    expect(form).not.toHaveAttribute('action')
  })
})
