export type Venture = {
  slug: 'sekinfra' | 'vyral' | 'tablegrid'
  number: string
  name: string
  category: string
  status: 'Active' | 'Building'
  stage: string
  summary: string
  thesis: string
  portfolioRole: string
  focus: string[]
  outcome: string
}

export const ventures: Venture[] = [
  {
    slug: 'sekinfra',
    number: '01',
    name: 'SEKINFRA',
    category: 'Business systems & infrastructure',
    status: 'Active',
    stage: 'Operating',
    summary:
      'A systems-focused company for businesses that need stronger operating infrastructure, automation, and execution leverage.',
    thesis:
      'Businesses often do not need more disconnected tools. They need the operating logic, systems, and infrastructure behind the work to function as one.',
    portfolioRole:
      'The business-systems venture in the portfolio and the commercial home for infrastructure work.',
    focus: [
      'Business operating systems',
      'Automation and execution infrastructure',
      'Internal systems that reduce manual coordination',
      'Reusable company-building capabilities',
    ],
    outcome: 'Turn operational complexity into a system a business can actually run on.',
  },
  {
    slug: 'vyral',
    number: '02',
    name: 'VYRAL',
    category: 'Gaming platform',
    status: 'Building',
    stage: 'Platform build',
    summary:
      'A broader gaming platform designed to support multiple experiences, communities, and game worlds under one umbrella.',
    thesis:
      'A single game can become a destination. A platform can become the place multiple experiences live, connect, and grow.',
    portfolioRole:
      'The gaming venture. Day in the Life lives beneath VYRAL as one experience rather than defining the entire brand.',
    focus: [
      'Platform identity and core experience',
      'Game-world architecture',
      'Day in the Life as an initial flagship experience',
      'Systems that can support additional games over time',
    ],
    outcome: 'Build a gaming ecosystem that can expand beyond any one title or server.',
  },
  {
    slug: 'tablegrid',
    number: '03',
    name: 'TABLEGRID',
    category: 'Food platform',
    status: 'Building',
    stage: 'Domain / application layer',
    summary:
      'A food-platform venture being built from the domain and application logic outward instead of starting with disconnected features.',
    thesis:
      'The strongest platform starts by understanding the real actors, decisions, workflows, and outcomes in the domain before deeper automation is layered in.',
    portfolioRole:
      'The food venture in the portfolio and an example of building the thin application layer before the deeper shared system layer.',
    focus: [
      'Domain model and application logic',
      'Core user and client journeys',
      'Platform interactions and outcomes',
      'A clean handoff into deeper automation later',
    ],
    outcome: 'Create a durable food-platform foundation that can grow without rebuilding the logic underneath it.',
  },
]

export function getVenture(slug: Venture['slug']) {
  return ventures.find((venture) => venture.slug === slug)
}
