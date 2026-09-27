export type VentureSystemStep = {
  title: string
  description: string
}

export type VentureOutcome = {
  title: string
  description: string
}

export type Venture = {
  slug: 'sekinfra' | 'vyral' | 'tablegrid'
  number: string
  name: string
  category: string
  status: 'Active' | 'Building'
  stage: string
  headline: string
  summary: string
  audience: string
  model: string
  problem: string
  thesis: string
  systemTitle: string
  system: VentureSystemStep[]
  outcomesTitle: string
  outcomes: VentureOutcome[]
  stageNote: string
  focus: string[]
  outcome: string
  now: string
  website?: string
}

export const ventures: Venture[] = [
  {
    slug: 'sekinfra',
    number: '01',
    name: 'SEKINFRA',
    category: 'Business + technology infrastructure',
    status: 'Active',
    stage: 'Operating',
    headline: 'Diagnose the failure point. Build only what the operation needs.',
    summary:
      'Sekinfra is a business + technology infrastructure company that traces operational and technical symptoms back to the system causing them, then designs and implements the smallest justified intervention.',
    audience:
      'Businesses dealing with recurring operational or technical failures across workflows, automation, cloud, network, security, access, reliability, or visibility.',
    model:
      'A diagnostic-first operating partner: start with the symptom, establish the real failure point, authorize the right intervention, then validate the result.',
    problem:
      'Most businesses see the symptom before the system causing it. Slow response, manual handoffs, disconnected tools, recurring outages, unclear access, and poor visibility can look unrelated even when they share the same failure path.',
    thesis:
      'Business and technology problems often belong to the same operating system. Sekinfra does not force a problem into a preset service category; diagnosis determines whether the answer is process, automation, integration, infrastructure, security, or a combination.',
    systemTitle: 'From symptom to controlled change.',
    system: [
      {
        title: 'Signal',
        description: 'Start with what is happening, the business impact, urgency, and the outcome the company needs.',
      },
      {
        title: 'Triage',
        description: 'Choose the smallest diagnostic route that can answer the right question.',
      },
      {
        title: 'Diagnose',
        description: 'Trace evidence across the approved operating and technical scope to establish the actual failure point.',
      },
      {
        title: 'Decide',
        description: 'Separate findings, priorities, uncertainty, and the specific intervention worth authorizing.',
      },
      {
        title: 'Implement',
        description: 'Make only the operational or technical change that has been explicitly approved.',
      },
      {
        title: 'Validate',
        description: 'Confirm that the approved change solved the problem it was meant to solve before moving on.',
      },
    ],
    outcomesTitle: 'Measured by the operating state created.',
    outcomes: [
      {
        title: 'Response & customer momentum',
        description: 'Keep interest, context, follow-up, and next actions moving without depending on someone noticing in time.',
      },
      {
        title: 'Control & accountability',
        description: 'Make ownership, acknowledgements, escalations, and exception handling explicit.',
      },
      {
        title: 'Visibility & decisions',
        description: 'Turn scattered activity into a clearer operating picture for leadership.',
      },
      {
        title: 'Capacity & coordination',
        description: 'Reduce the manual glue required to keep routine work moving while preserving real exception paths.',
      },
      {
        title: 'Infrastructure, security & reliability',
        description: 'Make the technical foundation dependable enough for the business to trust what runs on top of it.',
      },
    ],
    stageNote:
      'Sekinfra is operating publicly. Bounded issues can stay inside a Focused Diagnostic; broader, recurring, cross-system, or unclear problems can escalate into an Operational Infrastructure Assessment.',
    focus: [
      'Focused Diagnostic and Operational Infrastructure Assessment delivery paths',
      'Operations, automation, cloud, network, security, and reliability interventions',
      'Controlled authorization boundaries between assessment and implementation',
      'Repeatable delivery systems that make client work easier to diagnose, execute, and validate',
    ],
    outcome:
      'A business that can see where the failure is, authorize the right fix, and run with less manual glue and fewer recurring surprises.',
    now:
      'Operating the diagnostic-first model while strengthening the systems, automation, infrastructure, and controls behind client delivery.',
    website: 'https://sekinfra.com',
  },
  {
    slug: 'vyral',
    number: '02',
    name: 'VYRAL',
    category: 'Connected gaming network',
    status: 'Building',
    stage: 'Founding era / network build',
    headline: 'One identity. Every world.',
    summary:
      'VYRAL is a connected gaming network designed to let distinct game worlds keep their own rules, progression, and culture while players carry a shared identity, relationships, and history across them.',
    audience:
      'Players and communities who want to move between different kinds of games without rebuilding their identity, relationships, and history from zero each time.',
    model:
      'Each title remains its own destination. A shared player network sits above the games and connects the person behind them.',
    problem:
      'Games are usually isolated destinations. When players switch titles, the social layer, identity, status, and history they built often stop at the edge of that game.',
    thesis:
      'The network should outlive any single title. VYRAL is being built so worlds can feel radically different while player identity and community remain connected above them.',
    systemTitle: 'A network layer above the games.',
    system: [
      {
        title: 'Player identity',
        description: 'One account and profile that belongs to the player rather than to a single world.',
      },
      {
        title: 'Social graph',
        description: 'Friends, communities, and relationships designed to remain connected across VYRAL experiences.',
      },
      {
        title: 'Player history',
        description: 'Participation, achievements, status, and history can become part of a larger cross-world story.',
      },
      {
        title: 'Independent worlds',
        description: 'Every title keeps its own rules, progression, culture, and gameplay identity.',
      },
      {
        title: 'Expandable network',
        description: 'New genres and experiences can join the network without forcing every world to feel the same.',
      },
    ],
    outcomesTitle: 'What VYRAL is designed to compound.',
    outcomes: [
      {
        title: 'Persistent identity',
        description: 'The player remains recognizable beyond one title, server, or genre.',
      },
      {
        title: 'Portable community',
        description: 'Relationships can move with the player instead of being rebuilt for every game.',
      },
      {
        title: 'Cross-world history',
        description: 'A larger record of participation and status can form across the network.',
      },
      {
        title: 'Genre independence',
        description: 'A life simulation and a tactical FPS can feel completely different while belonging to the same network.',
      },
      {
        title: 'Expandable universe',
        description: 'VYRAL can grow through new worlds without making any one game carry the entire brand.',
      },
    ],
    stageNote:
      'World 01, Day in the Life, is in active development. World 02 is a tactical FPS in development. Additional worlds remain unannounced. The network is being built around those experiences rather than as a generic server list or launcher.',
    focus: [
      'The VYRAL player identity and network model',
      'Day in the Life as the first persistent world',
      'A tactical FPS as the second, deliberately different genre',
      'Cross-world relationships, player history, and the architecture needed for future worlds',
    ],
    outcome:
      'A gaming network where individual titles can stand on their own while the player’s identity, community, and history become larger than any one game.',
    now:
      'Building the network identity, Day in the Life, the next game vertical, and the connective layer that makes the portfolio feel like one player universe.',
    website: 'https://vyral-rho.vercel.app',
  },
  {
    slug: 'tablegrid',
    number: '03',
    name: 'TABLEGRID',
    category: 'Food operations platform',
    status: 'Building',
    stage: 'Domain / application layer',
    headline: 'Know what to make, buy, prep, and profit.',
    summary:
      'TableGrid is an operating network for food businesses that connects demand to orders, recipes, inventory, purchasing, production, fulfillment, economics, and profit.',
    audience:
      'Meal-prep businesses, caterers, delivery-first kitchens, food brands, and growing kitchen operations that need one operating picture across the work.',
    model:
      'A thin operating layer that connects the systems a food business already uses to a shared operating model instead of forcing the operator to replace every tool.',
    problem:
      'The operation is not missing data; it is missing connection. Orders can live in a storefront or POS, inventory in spreadsheets, recipes in binders or memory, purchasing in texts and vendor portals, production on whiteboards, and accounting somewhere else.',
    thesis:
      'Demand should drive the operating chain. When orders connect to recipe requirements, inventory, purchasing, production, fulfillment, and economics, the business can plan ahead instead of reconciling after the fact.',
    systemTitle: 'One order should update the whole operation.',
    system: [
      { title: 'Demand', description: 'What customers are expected to need.' },
      { title: 'Orders', description: 'What customers actually purchased.' },
      { title: 'Recipes', description: 'What each order requires to produce.' },
      { title: 'Inventory', description: 'What the operation actually has on hand.' },
      { title: 'Purchasing', description: 'What must be replenished before service is affected.' },
      { title: 'Production', description: 'What needs to be prepped, batched, packed, and finished.' },
      { title: 'Fulfillment', description: 'What must be completed and handed off successfully.' },
      { title: 'Economics', description: 'What ingredients, packaging, labor, payment, and fulfillment actually cost.' },
      { title: 'Profit', description: 'What the operation truly kept after connected costs.' },
    ],
    outcomesTitle: 'Built to improve the operating decisions that matter.',
    outcomes: [
      {
        title: 'Prevent shortages',
        description: 'Project ingredient risk from upcoming demand before a stockout reaches service.',
      },
      {
        title: 'Plan production',
        description: 'Translate orders and demand into clear portion, prep, batch, pack, and finish requirements.',
      },
      {
        title: 'Protect margin',
        description: 'Connect product revenue to recipe, supplier, packaging, production, and fulfillment economics.',
      },
      {
        title: 'Operate ahead',
        description: 'Surface what is coming next so teams can act before the day turns into a reaction cycle.',
      },
      {
        title: 'Reduce waste',
        description: 'Align purchasing and production more closely with what the operation expects to sell.',
      },
      {
        title: 'Create one operating picture',
        description: 'Let the business reason across demand, inventory, production, fulfillment, and economics from the same model.',
      },
    ],
    stageNote:
      'The current public experience is an illustrative front-end demo and does not change live business data. The active build is the domain and application logic plus the operating blueprint that defines how food-business data and decisions connect.',
    focus: [
      'The core food-business domain model and application logic',
      'The operating blueprint from demand through economics',
      'Inventory, purchasing, production, and fulfillment decision logic',
      'Product and contribution economics without forcing operators to replace every existing system',
    ],
    outcome:
      'A food operation that opens the day knowing what to make, what to buy, what is at risk, and what the work is actually earning.',
    now:
      'Building the domain model, application logic, operating blueprint, and user journey that connect food-business decisions before deeper automation is added.',
    website: 'https://tablegrid.vercel.app',
  },
]

export function getVenture(slug: Venture['slug']) {
  return ventures.find((venture) => venture.slug === slug)
}
