import type { Metadata } from 'next'
import { PartnerDetail } from '../../../components/partner-detail'
import { getPartnerCompany } from '../../../lib/partners'

const company = getPartnerCompany('legacy-consulting')!

export const metadata: Metadata = {
  title: 'Legacy Business Consultants | Built With Koo',
  description: company.summary,
}

export default function PartnerCompanyPage() {
  return <PartnerDetail company={company} />
}
