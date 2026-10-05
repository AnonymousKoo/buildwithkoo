import Link from "next/link";
import type { Venture } from "../lib/ventures";

export function VentureDetail({ venture }: { venture: Venture }) {
  return (
    <main
      id="main-content"
      className={`venture-detail venture-profile venture-profile-${venture.slug}`}
    >
      <section className="venture-detail-hero venture-profile-hero">
        <div className="venture-detail-grid" aria-hidden="true" />

        <div className="venture-detail-topline">
          <Link href="/#portfolio">← BuildWithKoo portfolio</Link>
          <div className="venture-detail-topline-actions">
            <span>
              {venture.number} / {venture.status}
            </span>
            {venture.website ? (
              <a href={venture.website} target="_blank" rel="noreferrer">
                Live company ↗
              </a>
            ) : null}
          </div>
        </div>

        <div className="venture-profile-layout">
          <div className="venture-profile-heading">
            <p className="portfolio-kicker">
              {venture.vertical}
              {" // "}
              {venture.category}
            </p>
            <h1>{venture.name}</h1>
            <p className="venture-profile-headline">{venture.headline}</p>
            <p className="venture-detail-summary">{venture.summary}</p>
          </div>

          <div
            className="venture-route-visual"
            aria-label={`${venture.name} system view`}
          >
            <div className="venture-route-status">
              <span>VENTURE NODE / {venture.number}</span>
              <span>
                <i /> {venture.status}
              </span>
            </div>
            <div className="venture-route-core" aria-hidden="true">
              <span>{venture.name.slice(0, 1)}</span>
              <i />
              <i />
              <i />
            </div>
            <ol>
              {venture.system.slice(0, 4).map((step, index) => (
                <li key={step.title}>
                  <span>0{index + 1}</span>
                  <strong>{step.title}</strong>
                </li>
              ))}
            </ol>
            <p>BUILDWITHKOO / {venture.slug.toUpperCase()}</p>
          </div>
        </div>

        <div
          className="venture-brief-grid"
          aria-label={venture.name + " venture snapshot"}
        >
          <article>
            <span>Current stage</span>
            <strong>{venture.stage}</strong>
          </article>
          <article>
            <span>Built for</span>
            <p>{venture.audience}</p>
          </article>
          <article>
            <span>Core model</span>
            <p>{venture.model}</p>
          </article>
        </div>
      </section>

      <nav className="venture-page-index" aria-label="Venture brief sections">
        <a href="#venture-thesis">01 Thesis</a>
        <a href="#venture-system">02 System</a>
        <a href="#venture-outcomes">03 Outcomes</a>
        <a href="#venture-current">04 Current build</a>
      </nav>

      <section
        id="venture-thesis"
        className="venture-profile-thesis"
        aria-labelledby={venture.slug + "-thesis-title"}
      >
        <div className="venture-detail-section-label">
          <span>01</span>
          <p>Problem + thesis</p>
        </div>

        <div className="venture-thesis-grid">
          <article>
            <span>The problem</span>
            <h2 id={venture.slug + "-thesis-title"}>What has to change.</h2>
            <p>{venture.problem}</p>
          </article>
          <article>
            <span>The thesis</span>
            <h2>What we believe.</h2>
            <p>{venture.thesis}</p>
          </article>
        </div>
      </section>

      <section
        id="venture-system"
        className="venture-system"
        aria-labelledby={venture.slug + "-system-title"}
      >
        <div className="venture-detail-section-label">
          <span>02</span>
          <p>Operating model</p>
        </div>

        <div className="venture-system-content">
          <div className="venture-system-heading">
            <p className="portfolio-kicker">How the venture works</p>
            <h2 id={venture.slug + "-system-title"}>{venture.systemTitle}</h2>
          </div>

          <ol className="venture-system-grid">
            {venture.system.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="venture-outcomes"
        className="venture-outcomes"
        aria-labelledby={venture.slug + "-outcomes-title"}
      >
        <div className="venture-detail-section-label">
          <span>03</span>
          <p>Outcome surface</p>
        </div>

        <div className="venture-outcomes-content">
          <div>
            <p className="portfolio-kicker">What gets better</p>
            <h2 id={venture.slug + "-outcomes-title"}>
              {venture.outcomesTitle}
            </h2>
          </div>

          <div className="venture-outcomes-grid">
            {venture.outcomes.map((outcome, index) => (
              <article key={outcome.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{outcome.title}</h3>
                <p>{outcome.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="venture-current"
        className="venture-current"
        aria-labelledby={venture.slug + "-current-title"}
      >
        <div className="venture-detail-section-label">
          <span>04</span>
          <p>Current build</p>
        </div>

        <div className="venture-current-content">
          <div className="venture-current-intro">
            <p className="portfolio-kicker">Stage reality</p>
            <h2 id={venture.slug + "-current-title"}>
              What exists now and what is being built next.
            </h2>
            <p>{venture.stageNote}</p>
          </div>

          <ol className="venture-current-list">
            {venture.focus.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="venture-outcome venture-profile-close">
        <p className="portfolio-kicker">End state</p>
        <h2>{venture.outcome}</h2>
        <p>{venture.now}</p>
        <div>
          {venture.website ? (
            <a
              className="button button-primary"
              href={venture.website}
              target="_blank"
              rel="noreferrer"
            >
              Visit {venture.name} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <Link className="button button-primary" href="/#portfolio">
              Explore the portfolio <span aria-hidden="true">→</span>
            </Link>
          )}
          <Link className="button button-secondary" href="/#portfolio">
            Back to ventures <span aria-hidden="true">←</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
