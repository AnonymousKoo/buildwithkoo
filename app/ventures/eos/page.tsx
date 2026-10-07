import type { Metadata } from 'next'
import { VentureDetail } from '../../../components/venture-detail'
import { getVenture } from '../../../lib/ventures'

const venture = getVenture('eos')!

export const metadata: Metadata = {
  title: 'EOS | BuildWithKoo',
  description: venture.summary,
}

export default function VenturePage() {
  return <VentureDetail venture={venture} />
}
