import { CompanyLogo } from "../components/company-logo";
import Link from "next/link";
import { ventures } from "../lib/ventures";
import { partnerCompanies } from "../lib/partners";

const principles = [
  {
    title: "Outcome before feature",
    description:
      "Start with the result the venture must create. Features only matter if they move that outcome.",
  },
  {
    title: "Logic before automation",
    description:
      "Model the real decisions, rules, actors, and workflows before trying to automate the work.",
  },
  {
    title: "System before scale",
    description:
      "Build something repeatable first. Growth should compound a working system, not amplify disorder.",
  },
];

const buildStages = [
  {
    title: "Thesis",
    description:
      "Define the opportunity, the outcome, and why the venture should exist.",
  },
  {
    title: "Domain logic",
    description:
      "Model the actors, rules, decisions, workflows, and value exchange.",
  },
  {
    title: "System",
    description:
      "Turn the logic into repeatable infrastructure, automation, and operating leverage.",
  },
  {
    title: "Experience",
    description:
      "Wrap the system in a product, brand, and experience people can actually use.",
  },
  {
    title: "Operations",
    description:
      "Build the workflows, ownership, feedback loops, and controls that let it run.",
  },
  {
    title: "Scale",
    description:
      "Compound what works across customers, teams, products, and future ventures.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="main-content">
      <section
        className="engine-hero"
        id="home"
        aria-labelledby="portfolio-hero-title"
      >
        <div className="engine-grid" aria-hidden="true" />
        <div className="engine-scan" aria-hidden="true" />
        <div className="engine-copy">
          <p className="engine-kicker">
            <span /> VENTURE BUILDER / SYSTEMS ARCHITECT
          </p>
          <h1 id="portfolio-hero-title">
            I turn ideas into <span>operating companies.</span>
          </h1>
          <p className="engine-description">
            I design the business logic, systems, technology, and experiences
            that move a company from possibility to operation.
          </p>
          <div className="engine-actions">
            <a className="engine-primary" href="#portfolio">
              Explore the portfolio <span aria-hidden="true">↘</span>
            </a>
            <a className="engine-secondary" href="#approach">
              See the build method <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="engine-proof" aria-label="Portfolio summary">
            <div>
              <strong>{String(ventures.length).padStart(2, "0")}</strong>
              <span>Owned ventures</span>
            </div>
            <div>
              <strong>
                {String(partnerCompanies.length).padStart(2, "0")}
              </strong>
              <span>Partner builds</span>
            </div>
            <div>
              <i />
              <span>Portfolio active</span>
            </div>
          </div>
        </div>

        <div
          className="venture-engine"
          aria-label="BuildWithKoo venture system"
        >
          <div className="engine-label engine-label-top">
            <span>LIVE PORTFOLIO MAP</span>
            <span>BWK / 001</span>
          </div>
          <svg
            className="engine-connections"
            viewBox="0 0 720 610"
            aria-hidden="true"
          >
            <path d="M360 305 L164 148" />
            <path d="M360 305 L556 148" />
            <path d="M360 305 L164 458" />
            <path d="M360 305 L556 458" />
            <path d="M360 305 L360 86" />
            <path className="signal signal-a" d="M360 305 L164 148" />
            <path className="signal signal-b" d="M360 305 L556 148" />
            <path className="signal signal-c" d="M360 305 L164 458" />
            <path className="signal signal-d" d="M360 305 L556 458" />
            <path className="signal signal-e" d="M360 305 L360 86" />
            <circle cx="360" cy="305" r="212" />
            <circle cx="360" cy="305" r="128" />
          </svg>
          <div className="engine-core">
            <span>VENTURE ENGINE</span>
            <strong>
              BUILD
              <br />
              <em>WITH</em>KOO
            </strong>
            <small>Idea → system → company</small>
          </div>
          {ventures.map((venture, index) => (
            <Link
              className={`engine-node engine-node-${index + 1}`}
              href={`/ventures/${venture.slug}`}
              key={venture.slug}
            >
              <span>{venture.number}</span>
              <CompanyLogo slug={venture.slug} compact />
              <div>
                <strong>{venture.name}</strong>
                <small>{venture.vertical}</small>
              </div>
              <b>{venture.status}</b>
            </Link>
          ))}
          <div className="engine-partner-rail">
            <span>PARTNER BUILD LANE</span>
            {partnerCompanies.map((company) => (
              <Link href={`/partners/${company.slug}`} key={company.slug}>
                <CompanyLogo slug={company.slug} compact />
                {company.name}
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
        </div>

        <div
          className="engine-flow"
          aria-label="BuildWithKoo company-building flow"
        >
          {buildStages.map((stage, index) => (
            <span key={stage.title}>
              <b>0{index + 1}</b>
              {stage.title}
            </span>
          ))}
        </div>
      </section>

      <section
        className="builder-statement"
        aria-label="BuildWithKoo positioning"
      >
        <p>BuildWithKoo is the public record of companies being built.</p>
        <p>
          Across industries, the work follows one discipline:{" "}
          <strong>
            understand the opportunity, model the system, then build the company
            around it.
          </strong>
        </p>
      </section>

      <section
        className="venture-portfolio"
        id="portfolio"
        aria-labelledby="portfolio-title"
      >
        <div className="portfolio-section-intro">
          <p className="section-index">01 / Venture portfolio</p>
          <div>
            <h2 id="portfolio-title">
              Different ventures. One build discipline.
            </h2>
            <p>
              Explore the companies, the ideas behind them, and what each is
              being built to change.
            </p>
          </div>
        </div>

        <div className="venture-card-grid">
          {ventures.map((venture) => (
            <article
              className={`venture-card venture-card-outcome world-${venture.slug}`}
              key={venture.slug}
            >
              <header>
                <span>{venture.number}</span>
                <span
                  className={`venture-status venture-status-${venture.status.toLowerCase()}`}
                >
                  <i aria-hidden="true" />
                  {venture.status}
                </span>
              </header>

              <div
                className={`venture-art venture-art-${venture.slug} brand-showcase`}
              >
                <CompanyLogo slug={venture.slug} />
                <span className="art-label">
                  {venture.vertical} / {venture.number}
                </span>
              </div>
              <div className="venture-card-main">
                <p>
                  {venture.vertical}
                  {" // "}
                  {venture.category}
                </p>
                <h3>{venture.name}</h3>
                {venture.slug === "eos" && venture.website ? (
                  <a
                    className="venture-card-description-link"
                    href={venture.website}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "inherit", display: "block", textDecoration: "none" }}
                  >
                    <p className="venture-card-headline">{venture.headline}</p>
                    <p className="venture-card-outcome-copy">{venture.outcome}</p>
                  </a>
                ) : (
                  <>
                    <p className="venture-card-headline">{venture.headline}</p>
                    <p className="venture-card-outcome-copy">{venture.outcome}</p>
                  </>
                )}
              </div>

              <footer className="venture-card-footer">
                <span>{venture.stage}</span>
                <div className="venture-card-links">
                  <Link href={`/ventures/${venture.slug}`}>
                    Venture brief <span aria-hidden="true">→</span>
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

      <section
        className="partner-companies"
        id="partners"
        aria-labelledby="partners-title"
      >
        <div className="portfolio-section-intro partner-companies-intro">
          <p className="section-index">02 / Companies I build with</p>
          <div>
            <h2 id="partners-title">Partner companies. Built together.</h2>
            <p>
              These are not BuildWithKoo-owned ventures. They are companies
              where I am contributing to the build through strategy, systems,
              technology, operating structure, or a combination of them.
            </p>
          </div>
        </div>

        <div className="partner-card-grid">
          {partnerCompanies.map((company) => (
            <article
              className="partner-card partner-card-command"
              key={company.slug}
            >
              <header>
                <span>{company.number}</span>
                <span>
                  <i aria-hidden="true" /> Partner build
                </span>
              </header>

              <div className={`partner-brand-showcase partner-brand-${company.slug}`}><CompanyLogo slug={company.slug} /></div>
              <div className="partner-card-body">
                <p>{company.category}</p>
                <h3>{company.name}</h3>
                {company.tagline ? (
                  <p className="partner-card-tagline">{company.tagline}</p>
                ) : null}
                <p>{company.summary}</p>
              </div>

              <div className="partner-build-strip">
                <div>
                  <span>Operator</span>
                  <strong>{company.operator ?? "Partner-led company"}</strong>
                  {company.operatorRole ? (
                    <small>{company.operatorRole}</small>
                  ) : null}
                </div>
                <div>
                  <span>Build lane</span>
                  <strong>{company.contribution[0]}</strong>
                  <small>{company.contribution[1]}</small>
                </div>
              </div>

              <footer>
                <div>
                  <span>Relationship</span>
                  <strong>{company.relationship}</strong>
                </div>
                <div className="partner-card-links">
                  <Link href={`/partners/${company.slug}`}>
                    Partner brief <span aria-hidden="true">→</span>
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

      <section
        className="portfolio-thesis"
        id="approach"
        aria-labelledby="portfolio-thesis-title"
      >
        <div className="portfolio-thesis-lead">
          <p className="section-index">03 / The portfolio thesis</p>
          <h2 id="portfolio-thesis-title">
            The industries change. <span>The build discipline does not.</span>
          </h2>
          <p>
            I&apos;m not collecting unrelated side projects. I&apos;m building
            companies around clear outcomes, real domain logic, and systems that
            can operate repeatedly.
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

      <section
        className="build-system"
        id="build-system"
        aria-labelledby="build-system-title"
      >
        <div className="build-system-grid" aria-hidden="true" />
        <div className="build-system-intro">
          <p className="section-index">04 / Build method</p>
          <div>
            <h2 id="build-system-title">
              From opportunity <span>to operating company.</span>
            </h2>
            <p>
              The website, app, or brand is only one layer. The real build is
              the chain from thesis to logic, system, experience, operations,
              and scale.
            </p>
          </div>
        </div>

        <ol
          className="build-system-stages"
          aria-label="BuildWithKoo venture-building stages"
        >
          {buildStages.map((stage, index) => (
            <li key={stage.title}>
              <span>0{index + 1}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="build-board build-board-refined"
        id="now"
        aria-labelledby="build-board-title"
      >
        <div className="build-board-intro">
          <p className="section-index">05 / Now building</p>
          <div>
            <h2 id="build-board-title">What is moving right now.</h2>
            <p>
              A portfolio should show motion without turning the homepage into
              an internal dashboard. This is the current public snapshot.
            </p>
          </div>
        </div>

        <div className="build-board-list">
          {ventures.map((venture) => (
            <article key={venture.slug}>
              <div className="build-board-number">{venture.number}</div>
              <div className="build-board-name">
                <span>
                  {venture.vertical}
                  {" // "}
                  {venture.category}
                </span>
                <h3>{venture.name}</h3>
              </div>
              <p>{venture.now}</p>
              <div className="build-board-action">
                <strong>{venture.stage}</strong>
                <Link
                  href={`/ventures/${venture.slug}`}
                  aria-label={`View ${venture.name} venture`}
                >
                  View <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="build-with-koo"
        id="build-with-koo"
        aria-labelledby="build-with-koo-title"
      >
        <div>
          <p className="section-index">06 / Build with Koo</p>
          <h2 id="build-with-koo-title">
            The portfolio comes first.{" "}
            <span>Partnership is a separate path.</span>
          </h2>
        </div>
        <div className="build-with-koo-copy">
          <p>
            BuildWithKoo is first a record of what I build. Have an ambitious
            company in mind? Partnership enquiries move through Sekinfra, where
            we explore the fit and the work ahead.
          </p>
          <Link className="button button-primary" href="/apply">
            Explore the partnership path <Arrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
