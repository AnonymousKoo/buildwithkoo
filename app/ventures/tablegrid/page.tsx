import type { Metadata } from 'next'
import { VentureDetail } from '../../../components/venture-detail'
import { getVenture } from '../../../lib/ventures'

const venture = getVenture('tablegrid')!

export const metadata: Metadata = {
  title: 'TABLEGRID — BuildWithKoo',
  description: venture.summary,
}

export default function VenturePage() {
  return <VentureDetail venture={venture} />
}
