export type PartnerCompany = {
  slug: 'legacy-consulting' | 'yaadbody'
  number: string
  name: string
  category: string
  relationship: string
  status: 'Building'
  summary: string
  tagline?: string
  operator?: string
  operatorRole?: string
  services?: Array<{ title: string; description: string }>
  contribution: string[]
  outcome: string
  website?: string
}

export const partnerCompanies: PartnerCompany[] = [
  {
    slug: 'legacy-consulting',
    number: 'P01',
    name: 'LEGACY BUSINESS CONSULTANTS',
    category: 'Business consulting',
    relationship: 'Company build partner',
    status: 'Building',
    summary:
      'A business consulting company helping owners start correctly, access capital, strengthen their financial position, and build systems that support long-term growth.',
    tagline: 'Build. Grow. Legacy.',
    operator: 'Dexter Lewis',
    operatorRole: 'Owner & CEO',
    services: [
      {
        title: 'Business formation',
        description:
          'Entity setup, operating agreements, compliance, licensing, and the foundational structure needed to start strong.',
      },
      {
        title: 'Business funding & credit',
        description:
          'Business-credit development and funding readiness, plus access to equipment financing, revenue-based financing, term loans, lines of credit, and real-estate funding options.',
      },
      {
        title: 'Business tax strategy',
        description:
          'Tax planning, deductions and credits, compliance, and strategies intended to reduce unnecessary tax burden.',
      },
      {
        title: 'Business systems',
        description:
          'Operational streamlining, repetitive-work automation, client follow-up, and systems designed for sustainable growth.',
      },
    ],
    contribution: [
      'Company structure and positioning',
      'Offer and client journey design',
      'Systems and operating foundation',
      'Digital build support as the company develops',
    ],
    outcome:
      'Build a consulting company that can help owners move from formation and funding to stronger operations, smarter systems, and sustainable growth.',
    website: 'https://www.reveallending.co/id/12985643628',
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
    operator: 'Allison Mcnee',
    operatorRole: 'Owner',
    contribution: [
      'Business application and customer journey',
      'Operating systems and technology support',
      'Meal-prep, catering, and party-tray workflows',
      'Shared production and delivery logic',
    ],
    outcome:
      'Turn one food operation into a repeatable business across recurring meal prep, catering, and party trays.',
    website: 'https://yaadbody.vercel.app',
  },
]

export function getPartnerCompany(slug: PartnerCompany['slug']) {
  return partnerCompanies.find((company) => company.slug === slug)
}
