const operatorContributions = [
  'Skill',
  'Execution',
  'Experience',
  'Industry knowledge',
  'Technical ability',
  'Leadership',
]

const buildWithKooContributions = [
  'Company strategy',
  'Structure',
  'Brand & positioning',
  'Operating systems',
  'Growth architecture',
  'Capital strategy*',
]

const assetStages = [
  'Skill',
  'Offer',
  'Brand',
  'System',
  'Customers',
  'Team',
  'Company',
  'Asset',
]

const processStages = [
  {
    title: 'Discover',
    description:
      'Understand the operator, skill, market, proof, and opportunity.',
  },
  {
    title: 'Validate',
    description:
      'Test whether real demand and viable economics exist before overbuilding.',
  },
  {
    title: 'Structure',
    description:
      'Define the company, positioning, ownership model, responsibilities, and operating design.',
  },
  {
    title: 'Build',
    description:
      'Create the systems, brand, operating infrastructure, and commercial foundation.',
  },
  {
    title: 'Grow',
    description:
      'Develop customers, team, repeatability, financial visibility, and enterprise value.',
  },
]

const operatorEvidence = [
  'Proven skill',
  'Real execution history',
  'Ownership mindset',
  'Leadership',
  'Ambition',
  'Integrity',
  'Industry / domain knowledge',
  'Evidence people value what they do',
]

const exclusions = [
  'Business coaching',
  'Guaranteed funding',
  'LLC setup',
  'Someone else to do all the work',
  'Idea validation with no ability to execute',
  'Equity without responsibility',
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero" id="opportunity" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            A selective company-building partnership
          </p>

          <h1 id="hero-title">
            Build something{' '}
            <span>you can own.</span>
          </h1>

          <p className="hero-proposition">
            You bring the skill.
            <strong>We build the company together.</strong>
          </p>

          <p className="hero-description">
            BuildWithKoo partners with proven operators ready to turn what they
            know into something bigger.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#apply">
              Apply to Build <Arrow />
            </a>
            <a className="button button-secondary" href="#how-it-works">
              See how it works <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div
          className="ownership-equation"
          aria-label="Skilled operator plus BuildWithKoo leads to company ownership"
        >
          <p className="equation-label">The opportunity</p>
          <div className="equation-flow">
            <div>
              <span>01</span>
              <strong>Skilled<br />operator</strong>
            </div>
            <span className="equation-symbol" aria-hidden="true">+</span>
            <div>
              <span>02</span>
              <strong>BuildWithKoo</strong>
            </div>
            <span className="equation-symbol equation-arrow" aria-hidden="true">→</span>
            <div className="equation-result">
              <span>03</span>
              <strong>Company<br />ownership</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="partnership" id="partnership" aria-labelledby="partnership-title">
        <div className="section-intro">
          <p className="section-index">01 / The partnership</p>
          <h2 id="partnership-title">
            Being great at what you do and knowing how to build a company are
            <em> two different skills.</em>
          </h2>
        </div>

        <div className="contribution-ledger">
          <article>
            <header>
              <p>You bring</p>
              <span>Your edge</span>
            </header>
            <ul>
              {operatorContributions.map((item, index) => (
                <li key={item}>
                  <span>0{index + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <div className="ledger-joint" aria-hidden="true">
            <span>+</span>
          </div>

          <article>
            <header>
              <p>We bring</p>
              <span>The company layer</span>
            </header>
            <ul>
              {buildWithKooContributions.map((item, index) => (
                <li key={item}>
                  <span>0{index + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="footnote">*Capital depends on the opportunity.</p>
          </article>
        </div>

        <div className="partnership-outcome">
          <p>Together, we build the asset.</p>
          <div aria-hidden="true">
            <span>Skill</span>
            <i />
            <span>Company</span>
            <i />
            <strong>Ownership</strong>
          </div>
        </div>
      </section>

      <section
        className="transformation"
        id="transformation"
        aria-labelledby="transformation-title"
      >
        <div className="transformation-grid" aria-hidden="true" />
        <div className="transformation-layout">
          <div className="transformation-copy">
            <p className="section-index">02 / Skill to asset</p>
            <h2 id="transformation-title">
              Not another job.{' '}
              <span>An actual company.</span>
            </h2>
            <p>
              BuildWithKoo is about converting proven capability into an
              independently valuable company—not simply creating more work for
              the operator.
            </p>
          </div>

          <div className="asset-build">
            <p>Company construction / The path</p>
            <ol className="asset-sequence" aria-label="Skill to asset progression">
              {assetStages.map((stage, index) => (
                <li key={stage}>
                  <span>0{index + 1}</span>
                  <strong>{stage}</strong>
                  {index < assetStages.length - 1 ? (
                    <i aria-hidden="true">→</i>
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="transformation-note">
              The path depends on proof, demand, and mutual fit.
            </p>
          </div>
        </div>
      </section>

      <section className="process" id="how-it-works" aria-labelledby="process-title">
        <div className="process-intro">
          <p className="section-index">03 / How it works</p>
          <div>
            <h2 id="process-title">Build with discipline, not assumptions.</h2>
            <p>
              Five stages move a credible opportunity from operator insight to
              a functioning company.
            </p>
          </div>
        </div>

        <ol className="process-list">
          {processStages.map((stage, index) => (
            <li key={stage.title}>
              <header>
                <span>0{index + 1}</span>
                <span>Stage</span>
              </header>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="operator-fit" id="who-we-back" aria-labelledby="operator-title">
        <div className="operator-intro">
          <p className="section-index">04 / Who we back</p>
          <h2 id="operator-title">We’re looking for people worth building with.</h2>
          <p>
            The opportunity matters. The person carrying it matters more. We
            look for proof that someone can lead, execute, and take
            responsibility for what gets built.
          </p>
        </div>

        <div className="operator-ledger">
          <p>Evidence we look for</p>
          <ul>
            {operatorEvidence.map((signal, index) => (
              <li key={signal}>
                <span>0{index + 1}</span>
                {signal}
              </li>
            ))}
          </ul>
        </div>

        <p className="operator-proof">
          This is about the operator—not only the idea.
        </p>
      </section>

      <section className="selectivity" id="not-for" aria-labelledby="selectivity-title">
        <div className="selectivity-intro">
          <p className="section-index">05 / Selective by design</p>
          <div>
            <h2 id="selectivity-title">This is not a shortcut around the work.</h2>
            <p>
              BuildWithKoo is a company-building partnership. It requires an
              operator ready to keep building, deciding, and taking
              responsibility alongside us.
            </p>
          </div>
        </div>

        <div className="exclusion-ledger">
          <p>Not designed for someone looking only for</p>
          <ul>
            {exclusions.map((item) => (
              <li key={item}>
                <span aria-hidden="true">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="partnership-disclaimer">
          <span aria-hidden="true" />
          Applying does not guarantee a partnership.
        </p>
      </section>

      <section className="application" id="apply" aria-labelledby="application-title">
        <div>
          <p className="section-index">06 / The next move</p>
          <h2 id="application-title">
            Think you’re someone{' '}
            <span>worth building with?</span>
          </h2>
        </div>
        <div className="application-copy">
          <p>
            Applications are reviewed individually. When the operator, proof,
            and opportunity appear aligned, strong fits move into a
            conversation with BuildWithKoo.
          </p>
          <span
            className="button button-primary application-status"
            aria-label="Start your application — application flow coming in Phase 3"
          >
            <span>Start your application</span>
            <span aria-hidden="true">→</span>
            <small>Application flow coming in Phase 3</small>
          </span>
        </div>
      </section>
    </main>
  )
}
