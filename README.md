# BuildWithKoo

BuildWithKoo is Koo's venture portfolio and company-building platform.

The public site now serves four jobs:

- Present the owned venture portfolio: Sekinfra, VYRAL, TableGrid, and Hummingbird Storyhouse.
- Organize ventures by vertical while keeping partner companies in a separate lane.
- Explain the portfolio thesis, build method, and current public snapshot without exposing internal infrastructure.
- Keep the operator partnership path available at `/apply` without making it the entire brand.

## Venture routes

- `/ventures/sekinfra`
- `/ventures/vyral`
- `/ventures/tablegrid`
- `/ventures/hummingbird-storyhouse`

## Partner company routes

- `/partners/legacy-consulting`
- `/partners/yaadbody`

## Development

Requires Node.js 20.9 or newer.

    npm install
    npm run dev

The development server defaults to http://localhost:3000.

## Quality checks

    npm run check

This runs ESLint, strict TypeScript validation, the Vitest suite, and a Next.js
production build. Application submission remains intentionally inactive until
the backend / operating workflow is connected.
