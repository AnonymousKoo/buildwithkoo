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

          <p className="hero-description" id="who-we-back">
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

      <section className="partnership" id="how-it-works" aria-labelledby="partnership-title">
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

      <section className="application" id="apply" aria-labelledby="application-title">
        <div>
          <p className="section-index">02 / The next move</p>
          <h2 id="application-title">
            Your skill is the starting point.
            <span>Ownership is the outcome.</span>
          </h2>
        </div>
        <div className="application-copy">
          <p>
            BuildWithKoo is selective by design. We partner where proven
            ability and a real opportunity can become a company worth owning.
          </p>
          <span
            className="button button-primary application-status"
            aria-label="Apply to Build — application flow coming soon"
          >
            Apply to Build
            <small>Application flow coming soon</small>
          </span>
        </div>
      </section>
    </main>
  )
}
