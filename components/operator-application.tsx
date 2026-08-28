'use client'

import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'

type ApplicationAnswers = {
  fullName: string
  cityMarket: string
  exceptionalSkill: string
  yearsExperience: string
  currentlyPaid: string
  customerWork: string
  revenueVolume: string
  executionProof: string
  opportunity: string
  problem: string
  customer: string
  marketIndustry: string
  buildWithKooReason: string
  ownershipRole: string
  contribution: string
  operatorFit: string
  email: string
  phone: string
  preferredContact: string
}

type AnswerKey = keyof ApplicationAnswers

type Field = {
  key: AnswerKey
  label: string
  required?: boolean
  type?: 'email' | 'tel' | 'text'
  multiline?: boolean
  options?: string[]
  placeholder?: string
}

type ApplicationStep = {
  title: string
  description: string
  fields: Field[]
}

const steps: ApplicationStep[] = [
  {
    title: 'About You',
    description: 'Start with the capability and experience you would bring.',
    fields: [
      { key: 'fullName', label: 'Full name', required: true },
      { key: 'cityMarket', label: 'City / market', required: true },
      {
        key: 'exceptionalSkill',
        label: 'What are you exceptionally good at?',
        required: true,
        multiline: true,
      },
      { key: 'yearsExperience', label: 'Years of experience', required: true },
    ],
  },
  {
    title: 'Proof',
    description: 'Show us where the capability has already met the real world.',
    fields: [
      {
        key: 'currentlyPaid',
        label: 'Are people currently paying you for this?',
        required: true,
        options: ['Yes', 'No', 'Not currently'],
      },
      {
        key: 'customerWork',
        label: 'Briefly describe your customers / work',
        required: true,
        multiline: true,
      },
      {
        key: 'revenueVolume',
        label: 'Current revenue or customer volume, if applicable',
        placeholder: 'Optional',
      },
      {
        key: 'executionProof',
        label: 'What proof can you point to that you can execute?',
        required: true,
        multiline: true,
      },
    ],
  },
  {
    title: 'Opportunity',
    description: 'Describe the company-shaped opportunity you see.',
    fields: [
      {
        key: 'opportunity',
        label: 'What do you believe could be built around your skill?',
        required: true,
        multiline: true,
      },
      {
        key: 'problem',
        label: 'What problem does it solve?',
        required: true,
        multiline: true,
      },
      {
        key: 'customer',
        label: 'Who would pay for it?',
        required: true,
        multiline: true,
      },
      {
        key: 'marketIndustry',
        label: 'What market / industry is this in?',
        required: true,
      },
    ],
  },
  {
    title: 'Partnership',
    description: 'Help us understand how you would show up as an owner and operator.',
    fields: [
      {
        key: 'buildWithKooReason',
        label: 'Why do you want to build with BuildWithKoo?',
        required: true,
        multiline: true,
      },
      {
        key: 'ownershipRole',
        label: 'What would you expect to own / operate?',
        required: true,
        multiline: true,
      },
      {
        key: 'contribution',
        label: 'What are you prepared to contribute?',
        required: true,
        multiline: true,
      },
      {
        key: 'operatorFit',
        label: 'Why are you the right operator for this opportunity?',
        required: true,
        multiline: true,
      },
    ],
  },
  {
    title: 'Contact',
    description: 'Tell us how to reach you if the fit appears strong.',
    fields: [
      { key: 'email', label: 'Email', required: true, type: 'email' },
      { key: 'phone', label: 'Phone', required: true, type: 'tel' },
      {
        key: 'preferredContact',
        label: 'Preferred contact method',
        required: true,
        options: ['Email', 'Phone'],
      },
    ],
  },
]

const emptyAnswers = Object.fromEntries(
  steps.flatMap((step) => step.fields.map((field) => [field.key, ''])),
) as ApplicationAnswers

function fieldId(key: AnswerKey) {
  return `application-${key}`
}

function ApplicationField({
  field,
  value,
  error,
  onChange,
}: {
  field: Field
  value: string
  error?: string
  onChange: (key: AnswerKey, value: string) => void
}) {
  const id = fieldId(field.key)
  const sharedProps = {
    id,
    name: field.key,
    value,
    required: field.required,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? `${id}-error` : undefined,
    onChange: (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => onChange(field.key, event.target.value),
  }

  return (
    <div className={`apply-field${field.multiline ? ' apply-field-wide' : ''}`}>
      <label htmlFor={id}>
        {field.label}
        {field.required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {field.options ? (
        <select {...sharedProps}>
          <option value="">Select one</option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : field.multiline ? (
        <textarea {...sharedProps} rows={5} placeholder={field.placeholder} />
      ) : (
        <input {...sharedProps} type={field.type ?? 'text'} placeholder={field.placeholder} />
      )}
      {error ? (
        <p className="apply-field-error" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function OperatorApplication() {
  const [answers, setAnswers] = useState<ApplicationAnswers>(emptyAnswers)
  const [currentStep, setCurrentStep] = useState(0)
  const [errors, setErrors] = useState<Partial<Record<AnswerKey, string>>>({})
  const [isReviewing, setIsReviewing] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const step = steps[currentStep]

  function updateAnswer(key: AnswerKey, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }))
    setErrors((current) => {
      if (!current[key]) return current
      const next = { ...current }
      delete next[key]
      return next
    })
  }

  function validateStep() {
    const nextErrors: Partial<Record<AnswerKey, string>> = {}

    for (const field of step.fields) {
      const value = answers[field.key].trim()
      if (field.required && !value) {
        nextErrors[field.key] = 'This field is required.'
      } else if (field.type === 'email' && value && !/^\S+@\S+\.\S+$/.test(value)) {
        nextErrors[field.key] = 'Enter a valid email address.'
      }
    }

    setErrors(nextErrors)
    const firstInvalid = step.fields.find((field) => nextErrors[field.key])
    if (firstInvalid) {
      const control = formRef.current?.elements.namedItem(firstInvalid.key)
      if (control instanceof HTMLElement) control.focus()
      return false
    }
    return true
  }

  function handleContinue(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!validateStep()) return

    setErrors({})
    if (currentStep === steps.length - 1) {
      setIsReviewing(true)
      return
    }
    setCurrentStep((index) => index + 1)
  }

  function goBack() {
    setErrors({})
    setCurrentStep((index) => Math.max(0, index - 1))
  }

  function editStep(index: number) {
    setErrors({})
    setCurrentStep(index)
    setIsReviewing(false)
  }

  if (isReviewing) {
    return (
      <section className="apply-shell apply-review" aria-labelledby="review-title">
        <div className="apply-intro">
          <p className="apply-kicker">Application review</p>
          <h1 id="review-title">Review what you’ve shared.</h1>
          <p>
            Check each section before the submission connection is added in the next phase.
          </p>
        </div>

        <div className="review-sections">
          {steps.map((reviewStep, index) => (
            <section key={reviewStep.title} aria-labelledby={`review-section-${index}`}>
              <header>
                <div>
                  <span>0{index + 1}</span>
                  <h2 id={`review-section-${index}`}>{reviewStep.title}</h2>
                </div>
                <button type="button" onClick={() => editStep(index)}>
                  Edit <span className="sr-only">{reviewStep.title}</span>
                </button>
              </header>
              <dl>
                {reviewStep.fields.map((field) => (
                  <div key={field.key}>
                    <dt>{field.label}</dt>
                    <dd>{answers[field.key].trim() || 'Not provided'}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        <div className="review-connection" role="status">
          <div>
            <p>Submission is not active yet.</p>
            <span>Your answers remain only in this browser tab and have not been sent.</span>
          </div>
          <button type="button" disabled>
            Submission connection coming next.
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="apply-shell" aria-labelledby="apply-title">
      <div className="apply-intro">
        <p className="apply-kicker">Operator application / Phase 3A</p>
        <h1 id="apply-title">Tell us what you’re great at.</h1>
        <p>
          We review operators, proof, and opportunities individually. This application helps us
          understand whether there may be something worth building together.
        </p>
        <p className="apply-disclaimer">Applying does not guarantee a partnership.</p>
      </div>

      <div className="apply-workspace">
        <aside className="apply-progress" aria-label="Application progress">
          <div
            className="apply-progress-bar"
            role="progressbar"
            aria-label={`Step ${currentStep + 1} of ${steps.length}`}
            aria-valuemin={1}
            aria-valuemax={steps.length}
            aria-valuenow={currentStep + 1}
          >
            <span style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} />
          </div>
          <ol>
            {steps.map((item, index) => (
              <li key={item.title} className={index <= currentStep ? 'is-reached' : undefined}>
                <span>0{index + 1}</span>
                <span aria-current={index === currentStep ? 'step' : undefined}>{item.title}</span>
              </li>
            ))}
          </ol>
        </aside>

        <form className="apply-form" ref={formRef} onSubmit={handleContinue} noValidate>
          <header>
            <p>Step 0{currentStep + 1} / 05</p>
            <h2>{step.title}</h2>
            <span>{step.description}</span>
          </header>

          <div className="apply-fields">
            {step.fields.map((field) => (
              <ApplicationField
                key={field.key}
                field={field}
                value={answers[field.key]}
                error={errors[field.key]}
                onChange={updateAnswer}
              />
            ))}
          </div>

          <div className="apply-controls">
            {currentStep > 0 ? (
              <button className="apply-back" type="button" onClick={goBack}>
                <span aria-hidden="true">←</span> Back
              </button>
            ) : (
              <span />
            )}
            <button className="button button-primary apply-continue" type="submit">
              {currentStep === steps.length - 1 ? 'Review application' : 'Continue'}
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
