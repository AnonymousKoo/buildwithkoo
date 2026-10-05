import { CompanyLogo } from "./company-logo";
import Link from "next/link";
import type { PartnerCompany } from "../lib/partners";

export function PartnerDetail({ company }: { company: PartnerCompany }) {
  return (
    <main
      id="main-content"
      className={`partner-detail partner-detail-${company.slug}`}
    >
      <section className="partner-detail-hero">
        <div className="venture-detail-grid" aria-hidden="true" />
        <div className="venture-detail-topline">
          <Link href="/#partners">← Back to partner companies</Link>
          <div className="venture-detail-topline-actions">
            <span>
              {company.number} / {company.status}
            </span>
            <span className="venture-site-pending">Partner company</span>
          </div>
        </div>

        <div className="partner-profile-layout">
          <div className="partner-detail-heading">
            <div>
              <p className="portfolio-kicker">
                Companies I build with // {company.category}
              </p>
              <h1>{company.name}</h1>
            </div>
            <p className="venture-detail-summary">{company.summary}</p>
          </div>
          <div
            className="partner-route-visual"
            aria-label={`${company.name} partnership view`}
          >
            <div>
              <span>PARTNER NODE / {company.number}</span>
              <span>
                <i /> {company.status}
              </span>
            </div>
            <div className="partner-route-brand"><CompanyLogo slug={company.slug} /></div>
            <p>OPERATOR-LED COMPANY</p>
            <small>BuildWithKoo contribution lane</small>
          </div>
        </div>

        <div className="venture-stage-card">
          <span>Relationship</span>
          <strong>{company.relationship}</strong>
        </div>

        {company.operator || company.tagline ? (
          <div className="partner-meta-strip">
            {company.operator ? (
              <div>
                <span>Operator</span>
                <strong>{company.operator}</strong>
                {company.operatorRole ? (
                  <small>{company.operatorRole}</small>
                ) : null}
              </div>
            ) : null}
            {company.tagline ? (
              <div>
                <span>Company line</span>
                <strong>{company.tagline}</strong>
              </div>
            ) : null}
          </div>
        ) : null}
      </section>

      <nav
        className="venture-page-index partner-page-index"
        aria-label="Partner brief sections"
      >
        {company.services ? <a href="#partner-services">01 Offering</a> : null}
        <a href="#partner-contribution">
          {company.services ? "02" : "01"} Contribution
        </a>
        <a href="#partner-objective">
          {company.services ? "03" : "02"} Objective
        </a>
      </nav>

      {company.services ? (
        <section
          id="partner-services"
          className="partner-services"
          aria-labelledby="partner-services-title"
        >
          <div className="venture-detail-section-label">
            <span>01</span>
            <p>Company offering</p>
          </div>
          <div className="partner-services-content">
            <h2 id="partner-services-title">
              What the company helps clients do.
            </h2>
            <div className="partner-services-grid">
              {company.services.map((service, index) => (
                <article key={service.title}>
                  <span>0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section
        id="partner-contribution"
        className="venture-focus partner-contribution"
        aria-labelledby="partner-contribution-title"
      >
        <div className="venture-detail-section-label">
          <span>{company.services ? "02" : "01"}</span>
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

      <section
        id="partner-objective"
        className="venture-outcome partner-outcome"
      >
        <p className="portfolio-kicker">The build objective</p>
        <h2>{company.outcome}</h2>
        <div>
          {company.website ? (
            <a
              className="button button-primary"
              href={company.website}
              target="_blank"
              rel="noreferrer"
            >
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
  );
}
