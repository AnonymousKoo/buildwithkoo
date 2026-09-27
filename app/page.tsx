import Link from 'next/link'
import { ventures } from '../lib/ventures'
import { partnerCompanies } from '../lib/partners'

const principles = [
  {
    title: 'Outcome before feature',
    description:
      'Start with the result the venture must create. Features only matter if they move that outcome.',
  },
  {
    title: 'Logic before automation',
    description:
      'Model the real decisions, rules, actors, and workflows before trying to automate the work.',
  },
  {
    title: 'System before scale',
    description:
      'Build something repeatable first. Growth should compound a working system, not amplify disorder.',
  },
]

const buildStages = [
  {
    title: 'Thesis',
    description: 'Define the opportunity, the outcome, and why the venture should exist.',
  },
  {
    title: 'Domain logic',
    description: 'Model the actors, rules, decisions, workflows, and value exchange.',
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
    description: 'Build the workflows, ownership, feedback loops, and controls that let it run.',
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
            BuildWithKoo // venture portfolio
          </p>
          <h1 id="portfolio-hero-title">
            I build companies{' '}
            <span>from the system up.</span>
          </h1>
          <p className="portfolio-hero-description">
            BuildWithKoo is the public home for companies I build and companies I help build—the
            problem, the system, the product, and the path from idea to operating company.
          </p>
          <div className="portfolio-hero-actions">
            <a className="button button-primary" href="#portfolio">
              View the ventures <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href="#approach">
              How I build <Arrow />
            </a>
          </div>
        </div>

        <div className="portfolio-hero-ledger" aria-label="Current BuildWithKoo portfolio">
          <div className="portfolio-ledger-head">
            <span>Current portfolio</span>
            <span>{String(ventures.length).padStart(2, '0')} ventures</span>
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
            <h2 id="portfolio-title">Different ventures. One build discipline.</h2>
            <p>
              The portfolio can expand across markets without losing the way each company is built:
              outcome first, domain logic before automation, and system before scale.
            </p>
          </div>
        </div>

        <div className="venture-card-grid">
          {ventures.map((venture) => (
            <article className="venture-card venture-card-outcome" key={venture.slug}>
              <header>
                <span>{venture.number}</span>
                <span className={`venture-status venture-status-${venture.status.toLowerCase()}`}>
                  {venture.status}
                </span>
              </header>
              <div>
                <p>{venture.category}</p>
                <h3>{venture.name}</h3>
                <p className="venture-card-outcome-copy">{venture.outcome}</p>
              </div>
              <footer className="venture-card-footer">
                <span>{venture.stage}</span>
                <div className="venture-card-links">
                  <Link href={`/ventures/${venture.slug}`}>
                    Venture profile <span aria-hidden="true">→</span>
                  </Link>
                  {venture.website ? (
                    <a href={venture.website} target="_blank" rel="noreferrer">
                      Live site <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="partner-companies" id="partners" aria-labelledby="partners-title">
        <div className="portfolio-section-intro partner-companies-intro">
          <p className="section-index">02 / Companies I build with</p>
          <div>
            <h2 id="partners-title">Partner companies. Built together.</h2>
            <p>
              These are not BuildWithKoo-owned ventures. They are companies where I am contributing
              to the build—strategy, systems, technology, operating structure, or a combination of them.
            </p>
          </div>
        </div>

        <div className="partner-card-grid">
          {partnerCompanies.map((company) => (
            <article className="partner-card" key={company.slug}>
              <header>
                <span>{company.number}</span>
                <span>Partner company</span>
              </header>
              <div className="partner-card-body">
                <p>{company.category}</p>
                <h3>{company.name}</h3>
                <p>{company.summary}</p>
              </div>
              <footer>
                <div>
                  <span>Relationship</span>
                  <strong>{company.relationship}</strong>
                </div>
                <div className="partner-card-links">
                  <Link href={`/partners/${company.slug}`}>
                    Partner profile <span aria-hidden="true">→</span>
                  </Link>
                  {company.website ? (
                    <a href={company.website} target="_blank" rel="noreferrer">
                      Live site <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-thesis" id="approach" aria-labelledby="portfolio-thesis-title">
        <div className="portfolio-thesis-lead">
          <p className="section-index">03 / The portfolio thesis</p>
          <h2 id="portfolio-thesis-title">
            The industries change.{' '}
            <span>The build discipline does not.</span>
          </h2>
          <p>
            I&apos;m not collecting unrelated side projects. I&apos;m building companies around
            clear outcomes, real domain logic, and systems that can operate repeatedly.
          </p>
        </div>

        <div className="portfolio-principles">
          {principles.map((principle, index) => (
            <article key={principle.title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="build-system" id="build-system" aria-labelledby="build-system-title">
        <div className="build-system-grid" aria-hidden="true" />
        <div className="build-system-intro">
          <p className="section-index">04 / Build method</p>
          <div>
            <h2 id="build-system-title">
              From opportunity{' '}
              <span>to operating company.</span>
            </h2>
            <p>
              The website, app, or brand is only one layer. The real build is the chain from
              thesis to logic, system, experience, operations, and scale.
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

      <section className="build-board build-board-refined" id="now" aria-labelledby="build-board-title">
        <div className="build-board-intro">
          <p className="section-index">05 / Now building</p>
          <div>
            <h2 id="build-board-title">What is moving right now.</h2>
            <p>
              A portfolio should show motion without turning the homepage into an internal
              dashboard. This is the current public snapshot.
            </p>
          </div>
        </div>

        <div className="build-board-list">
          {ventures.map((venture) => (
            <article key={venture.slug}>
              <div className="build-board-number">{venture.number}</div>
              <div className="build-board-name">
                <span>{venture.category}</span>
                <h3>{venture.name}</h3>
              </div>
              <p>{venture.now}</p>
              <div className="build-board-action">
                <strong>{venture.stage}</strong>
                <Link href={`/ventures/${venture.slug}`} aria-label={`View ${venture.name} venture`}>
                  View <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="build-with-koo" id="build-with-koo" aria-labelledby="build-with-koo-title">
        <div>
          <p className="section-index">06 / Build with Koo</p>
          <h2 id="build-with-koo-title">
            The portfolio comes first.{' '}
            <span>Partnership is a separate path.</span>
          </h2>
        </div>
        <div className="build-with-koo-copy">
          <p>
            BuildWithKoo is first a record of what I build. For the right operator-led
            opportunity, there is also a path to build a company together.
          </p>
          <Link className="button button-primary" href="/apply">
            Explore the partnership path <Arrow />
          </Link>
        </div>
      </section>
    </main>
  )
}
