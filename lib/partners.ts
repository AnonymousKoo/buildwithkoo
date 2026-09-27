export type PartnerCompany = {
  slug: 'legacy-consulting' | 'yaadbody'
  number: string
  name: string
  category: string
  relationship: string
  status: 'Building'
  summary: string
  contribution: string[]
  outcome: string
  website?: string
}

export const partnerCompanies: PartnerCompany[] = [
  {
    slug: 'legacy-consulting',
    number: 'P01',
    name: 'LEGACY CONSULTING',
    category: 'Business consulting',
    relationship: 'Company build partner',
    status: 'Building',
    summary:
      'A business consulting company I am helping shape into a clear, structured operating business.',
    contribution: [
      'Company structure and positioning',
      'Offer and client journey design',
      'Systems and operating foundation',
      'Digital build support as the company develops',
    ],
    outcome:
      'Build a consulting company with a clear offer, repeatable delivery, and the operating structure to grow.',
  },
  {
    slug: 'yaadbody',
    number: 'P02',
    name: 'YAADBODY',
    category: 'Healthy prepared meals',
    relationship: 'Company build partner',
    status: 'Building',
    summary:
      'A healthy prepared-meal company built around modular proteins, carbs, vegetables, and flavors, with Jamaican and Caribbean-forward signatures alongside broader healthy meals.',
    contribution: [
      'Business application and customer journey',
      'Operating systems and technology support',
      'Meal-prep, catering, and party-tray workflows',
      'Shared production and delivery logic',
    ],
    outcome:
      'Turn one food operation into a repeatable business across recurring meal prep, catering, and party trays.',
  },
]

export function getPartnerCompany(slug: PartnerCompany['slug']) {
  return partnerCompanies.find((company) => company.slug === slug)
}
