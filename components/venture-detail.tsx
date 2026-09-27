import Link from 'next/link'
import type { Venture } from '../lib/ventures'

export function VentureDetail({ venture }: { venture: Venture }) {
  return (
    <main id="main-content" className="venture-detail">
      <section className="venture-detail-hero">
        <div className="venture-detail-grid" aria-hidden="true" />
        <div className="venture-detail-topline">
          <Link href="/#portfolio">← Back to portfolio</Link>
          <span>{venture.number} / {venture.status}</span>
        </div>

        <div className="venture-detail-heading">
          <div>
            <p className="portfolio-kicker">{venture.category}</p>
            <h1>{venture.name}</h1>
          </div>
          <div className="venture-stage-card">
            <span>Current stage</span>
            <strong>{venture.stage}</strong>
          </div>
        </div>

        <p className="venture-detail-summary">{venture.summary}</p>
      </section>

      <section className="venture-detail-body" aria-labelledby="venture-thesis">
        <div className="venture-detail-section-label">
          <span>01</span>
          <p>Venture thesis</p>
        </div>
        <div>
          <h2 id="venture-thesis">What this venture is built to become.</h2>
          <p>{venture.thesis}</p>
        </div>
      </section>

      <section className="venture-detail-body venture-detail-dark" aria-labelledby="portfolio-role">
        <div className="venture-detail-section-label">
          <span>02</span>
          <p>Portfolio role</p>
        </div>
        <div>
          <h2 id="portfolio-role">How it fits inside BuildWithKoo.</h2>
          <p>{venture.portfolioRole}</p>
        </div>
      </section>

      <section className="venture-focus" aria-labelledby="venture-focus-title">
        <div className="venture-detail-section-label">
          <span>03</span>
          <p>Current build</p>
        </div>
        <div className="venture-focus-content">
          <h2 id="venture-focus-title">What is being built now.</h2>
          <ol>
            {venture.focus.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="venture-outcome">
        <p className="portfolio-kicker">The outcome</p>
        <h2>{venture.outcome}</h2>
        <div>
          <Link className="button button-primary" href="/#portfolio">
            Explore the portfolio <span aria-hidden="true">→</span>
          </Link>
          <Link className="button button-secondary" href="/apply">
            Build with Koo <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
