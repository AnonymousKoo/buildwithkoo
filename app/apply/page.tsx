import type { Metadata } from 'next'
import { OperatorApplication } from '../../components/operator-application'

export const metadata: Metadata = {
  title: 'Apply to Build — BuildWithKoo',
  description:
    'Tell BuildWithKoo about your skill, proof, opportunity, and readiness to operate.',
}

export default function ApplyPage() {
  return (
    <main id="main-content" className="apply-page">
      <OperatorApplication />
    </main>
  )
}
