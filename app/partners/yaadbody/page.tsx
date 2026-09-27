import type { Metadata } from 'next'
import { PartnerDetail } from '../../../components/partner-detail'
import { getPartnerCompany } from '../../../lib/partners'

const company = getPartnerCompany('yaadbody')!

export const metadata: Metadata = {
  title: 'YaadBody — Built With Koo',
  description: company.summary,
}

export default function PartnerCompanyPage() {
  return <PartnerDetail company={company} />
}
