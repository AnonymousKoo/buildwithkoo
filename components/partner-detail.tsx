import Link from 'next/link'
import type { PartnerCompany } from '../lib/partners'

export function PartnerDetail({ company }: { company: PartnerCompany }) {
  return (
    <main id="main-content" className="partner-detail">
      <section className="partner-detail-hero">
        <div className="venture-detail-grid" aria-hidden="true" />
        <div className="venture-detail-topline">
          <Link href="/#partners">← Back to partner companies</Link>
          <div className="venture-detail-topline-actions">
            <span>{company.number} / {company.status}</span>
            <span className="venture-site-pending">Partner company</span>
          </div>
        </div>

        <div className="partner-detail-heading">
          <div>
            <p className="portfolio-kicker">Companies I build with // {company.category}</p>
            <h1>{company.name}</h1>
          </div>
          <div className="venture-stage-card">
            <span>Relationship</span>
            <strong>{company.relationship}</strong>
          </div>
        </div>

        <p className="venture-detail-summary">{company.summary}</p>
      </section>

      <section className="venture-focus partner-contribution" aria-labelledby="partner-contribution-title">
        <div className="venture-detail-section-label">
          <span>01</span>
          <p>Build contribution</p>
        </div>
        <div className="venture-focus-content">
          <h2 id="partner-contribution-title">What I am helping build.</h2>
          <ol>
            {company.contribution.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="venture-outcome partner-outcome">
        <p className="portfolio-kicker">The build objective</p>
        <h2>{company.outcome}</h2>
        <div>
          {company.website ? (
            <a className="button button-primary" href={company.website} target="_blank" rel="noreferrer">
              Visit company <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <Link className="button button-primary" href="/#partners">
              Explore partner companies <span aria-hidden="true">→</span>
            </Link>
          )}
          <Link className="button button-secondary" href="/apply">
            Build with Koo <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
