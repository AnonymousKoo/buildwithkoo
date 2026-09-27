import type { Metadata } from 'next'
import { VentureDetail } from '../../../components/venture-detail'
import { getVenture } from '../../../lib/ventures'

const venture = getVenture('hummingbird-storyhouse')!

export const metadata: Metadata = {
  title: 'Hummingbird Storyhouse — BuildWithKoo',
  description: venture.summary,
}

export default function HummingbirdStoryhousePage() {
  return <VentureDetail venture={venture} />
}
