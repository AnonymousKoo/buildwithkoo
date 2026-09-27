import type { Metadata } from 'next'
import { VentureDetail } from '../../../components/venture-detail'
import { getVenture } from '../../../lib/ventures'

const venture = getVenture('sekinfra')!

export const metadata: Metadata = {
  title: 'SEKINFRA — BuildWithKoo',
  description: venture.summary,
}

export default function VenturePage() {
  return <VentureDetail venture={venture} />
}
