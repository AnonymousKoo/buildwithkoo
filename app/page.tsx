import Link from 'next/link'
import { ventures } from '../lib/ventures'

const currentBuilds = [
  {
    name: 'SEKINFRA',
    type: 'Business systems',
    stage: 'Operating',
    description:
      'Turning systems, automation, and execution infrastructure into a stronger operating layer for businesses.',
  },
  {
    name: 'VYRAL',
    type: 'Gaming platform',
    stage: 'Platform build',
    description:
      'Building the umbrella platform, its system layer, and the game experiences that live underneath it.',
  },
  {
    name: 'TABLEGRID',
    type: 'Food platform',
    stage: 'Domain build',
    description:
      'Building the domain and application logic first so the platform has a durable foundation before deeper automation.',
  },
]

const buildStages = [
  {
    title: 'Thesis',
    description: 'Define the opportunity, the outcome, and why the venture should exist.',
  },
  {
    title: 'Domain logic',
    description: 'Model the actors, rules, decisions, workflows, and value exchange before adding complexity.',
  },
  {
    title: 'System',
    description: 'Turn the logic into repeatable infrastructure, automation, and operating leverage.',
  },
  {
    title: 'Experience',
    description: 'Wrap the system in a product, brand, and experience people can actually use.',
  },
  {
    title: 'Operations',
    description: 'Build the workflows, ownership, feedback loops, and controls that let the company run.',
  },
  {
    title: 'Scale',
    description: 'Compound what works across customers, teams, products, and future ventures.',
  },
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

export default function Home() {
  return (
    <main id="main-content">
      <section className="portfolio-hero" id="home" aria-labelledby="portfolio-hero-title">
        <div className="portfolio-hero-grid" aria-hidden="true" />
        <div className="portfolio-hero-copy">
          <p className="portfolio-kicker">
            <span />
            Koo&apos;s venture portfolio
          </p>
          <h1 id="portfolio-hero-title">
            I build companies{' '}
            <span>from the system up.</span>
          </h1>
          <p className="portfolio-hero-description">
            BuildWithKoo is the home for the ventures, platforms, and operating systems I&apos;m
            building—what they are, where they are now, and how the pieces connect.
          </p>
          <div className="portfolio-hero-actions">
            <a className="button button-primary" href="#portfolio">
              Explore the portfolio <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href="#build-system">
              See the build system <Arrow />
            </a>
          </div>
        </div>

        <div className="portfolio-hero-ledger" aria-label="Current BuildWithKoo portfolio">
          <div className="portfolio-ledger-head">
            <span>Portfolio now</span>
            <span>03 ventures</span>
          </div>
          {ventures.map((venture) => (
            <Link href={`/ventures/${venture.slug}`} key={venture.slug}>
              <span>{venture.number}</span>
              <strong>{venture.name}</strong>
              <small>{venture.status}</small>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="venture-portfolio" id="portfolio" aria-labelledby="portfolio-title">
        <div className="portfolio-section-intro">
          <p className="section-index">01 / Venture portfolio</p>
          <div>
            <h2 id="portfolio-title">Different markets. One build discipline.</h2>
            <p>
              Each venture keeps its own brand, market, product, and operating model. BuildWithKoo
              is the layer that shows the body of work as one portfolio.
            </p>
          </div>
        </div>

        <div className="venture-card-grid">
          {ventures.map((venture) => (
            <article className="venture-card" key={venture.slug}>
              <header>
                <span>{venture.number}</span>
                <span className={`venture-status venture-status-${venture.status.toLowerCase()}`}>
                  {venture.status}
                </span>
              </header>
              <div>
                <p>{venture.category}</p>
                <h3>{venture.name}</h3>
                <p>{venture.summary}</p>
              </div>
              <footer>
                <span>{venture.stage}</span>
                <Link href={`/ventures/${venture.slug}`}>
                  View venture <span aria-hidden="true">→</span>
                </Link>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="build-board" id="build-board" aria-labelledby="build-board-title">
        <div className="build-board-intro">
          <p className="section-index">02 / Current build board</p>
          <div>
            <h2 id="build-board-title">The portfolio is active, not a museum.</h2>
            <p>
              BuildWithKoo should show the work while it is moving. This board makes the current
              focus visible without turning every experiment into a separate brand.
            </p>
          </div>
        </div>

        <div className="build-board-list">
          {currentBuilds.map((build, index) => (
            <article key={build.name}>
              <div className="build-board-number">0{index + 1}</div>
              <div className="build-board-name">
                <span>{build.type}</span>
                <h3>{build.name}</h3>
              </div>
              <p>{build.description}</p>
              <strong>{build.stage}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="build-system" id="build-system" aria-labelledby="build-system-title">
        <div className="build-system-grid" aria-hidden="true" />
        <div className="build-system-intro">
          <p className="section-index">03 / Build system</p>
          <div>
            <h2 id="build-system-title">
              Build the logic first.{' '}
              <span>Then compound the company.</span>
            </h2>
            <p>
              The visual layer is never the whole product. The recurring advantage is the logic,
              systems, and operating structure underneath it.
            </p>
          </div>
        </div>

        <ol className="build-system-stages" aria-label="BuildWithKoo venture-building stages">
          {buildStages.map((stage, index) => (
            <li key={stage.title}>
              <span>0{index + 1}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="portfolio-architecture" id="ecosystem" aria-labelledby="architecture-title">
        <div className="portfolio-section-intro">
          <p className="section-index">04 / Portfolio architecture</p>
          <div>
            <h2 id="architecture-title">One portfolio. Multiple ventures. Shared leverage.</h2>
            <p>
              BuildWithKoo is the portfolio layer. The ventures stay independent at the customer
              level while the portfolio makes the body of work, build discipline, and direction visible.
            </p>
          </div>
        </div>

        <div className="architecture-map" aria-label="BuildWithKoo portfolio architecture">
          <div className="architecture-parent">
            <span>Portfolio layer</span>
            <strong>BUILDWITHKOO</strong>
          </div>
          <div className="architecture-connector" aria-hidden="true">
            <span />
          </div>
          <div className="architecture-ventures">
            {ventures.map((venture) => (
              <Link href={`/ventures/${venture.slug}`} key={venture.slug}>
                <span>{venture.category}</span>
                <strong>{venture.name}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="build-with-koo" id="build-with-koo" aria-labelledby="build-with-koo-title">
        <div>
          <p className="section-index">05 / Build with Koo</p>
          <h2 id="build-with-koo-title">
            Have an operator-led opportunity{' '}
            <span>worth building?</span>
          </h2>
        </div>
        <div className="build-with-koo-copy">
          <p>
            The partnership track still exists, but it is one part of BuildWithKoo—not the whole
            brand. If you have proven capability and a company-shaped opportunity, start here.
          </p>
          <Link className="button button-primary" href="/apply">
            Start the application <Arrow />
          </Link>
        </div>
      </section>
    </main>
  )
}
