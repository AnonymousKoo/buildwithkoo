import { useEffect, useState } from 'react'

type ArrowProps = {
  direction?: 'right' | 'down'
}

function Arrow({ direction = 'right' }: ArrowProps) {
  return (
    <svg
      aria-hidden="true"
      className={`arrow arrow--${direction}`}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3 10h13M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="BuildWithKoo, back to top">
      <span className="brand__mark" aria-hidden="true">K</span>
      <span>BuildWithKoo</span>
    </a>
  )
}

const projects = [
  {
    index: '01',
    name: 'Foundry',
    category: 'Product strategy · Platform design',
    description: 'Making complex operations feel clear, calm, and remarkably human.',
    className: 'project-card--foundry',
    visual: (
      <div className="foundry-ui" aria-hidden="true">
        <div className="foundry-ui__nav"><span /><span /><span /></div>
        <div className="foundry-ui__body">
          <span className="foundry-ui__eyebrow">WEEKLY OUTPUT</span>
          <strong>24,860</strong>
          <div className="foundry-ui__chart">
            {[32, 50, 38, 66, 56, 84, 72, 94].map((height, index) => (
              <i key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    index: '02',
    name: 'Signal',
    category: 'Brand identity · Digital product',
    description: 'A more confident way for growing teams to understand their money.',
    className: 'project-card--signal',
    visual: (
      <div className="signal-ui" aria-hidden="true">
        <span className="signal-ui__label">SIGNAL</span>
        <div className="signal-ui__orb" />
        <div className="signal-ui__status"><i />Portfolio health <strong>Excellent</strong></div>
      </div>
    ),
  },
  {
    index: '03',
    name: 'Common Ground',
    category: 'Research · Service design',
    description: 'Reimagining the neighborhood workspace around real human rhythms.',
    className: 'project-card--common',
    visual: (
      <div className="common-ui" aria-hidden="true">
        <div className="common-ui__sun" />
        <p>SPACE TO<br /><em>THINK.</em></p>
        <span>Brooklyn · 07:00—22:00</span>
      </div>
    ),
  },
]

const capabilities = ['Product strategy', 'UX & UI design', 'Brand systems', 'Creative development']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  return (
    <div id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <Brand />
        <button
          className="menu-button"
          type="button"
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
          <i aria-hidden="true" />
        </button>
        <nav
          id="site-navigation"
          className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="#studio" onClick={() => setMenuOpen(false)}>Studio</a>
          <a className="nav-cta" href="mailto:hello@buildwithkoo.com">
            Start a project <Arrow />
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__intro reveal">
            <p className="eyebrow"><span /> Independent digital product studio</p>
            <h1 id="hero-title">
              Small team.<br />
              <span>Sharp thinking.</span><br />
              Products built to move.
            </h1>
          </div>
          <div className="hero__footer reveal reveal--delay">
            <p>We partner with ambitious people to turn promising ideas into useful, memorable digital products.</p>
            <a className="text-link" href="#work">See what we build <Arrow direction="down" /></a>
          </div>
          <div className="hero__stamp" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs>
                <path id="circle-path" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" />
              </defs>
              <text><textPath href="#circle-path">BUILD WITH INTENT · SHIP WITH CONFIDENCE · </textPath></text>
            </svg>
            <span>K</span>
          </div>
        </section>

        <section className="work section-shell" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="section-kicker">Selected work <span>(03)</span></p>
            <h2 id="work-title">Good work makes<br />the complex feel <em>obvious.</em></h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.name}>
                <div className={`project-card ${project.className}`}>{project.visual}</div>
                <div className="project__details">
                  <span>{project.index}</span>
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.category}</p>
                  </div>
                  <p className="project__description">{project.description}</p>
                  <span className="project__arrow" aria-hidden="true"><Arrow /></span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process" id="process" aria-labelledby="process-title">
          <div className="section-shell process__inner">
            <div className="process__intro">
              <p className="section-kicker section-kicker--light">How we work <span>(No theatre)</span></p>
              <h2 id="process-title">Clarity first.<br /><em>Craft always.</em></h2>
              <p>We keep the team close, the process visible, and the work moving. No relay races. No black boxes.</p>
            </div>
            <ol className="process-list">
              <li>
                <span>01</span>
                <div><h3>Find the signal</h3><p>We get close to the problem, the people, and the business before deciding what deserves to be built.</p></div>
              </li>
              <li>
                <span>02</span>
                <div><h3>Make it tangible</h3><p>We turn strategy into working ideas early, learn from the real thing, and sharpen it together.</p></div>
              </li>
              <li>
                <span>03</span>
                <div><h3>Build it right</h3><p>Design and engineering move as one team, from first system decision through the final detail.</p></div>
              </li>
            </ol>
          </div>
        </section>

        <section className="studio section-shell" id="studio" aria-labelledby="studio-title">
          <div className="studio__statement">
            <p className="section-kicker">The studio</p>
            <h2 id="studio-title">Senior hands on the work.<br />From <em>hello</em> to launch.</h2>
          </div>
          <div className="studio__grid">
            <div className="studio__portrait" aria-label="Abstract studio portrait">
              <div className="portrait-shape portrait-shape--one" />
              <div className="portrait-shape portrait-shape--two" />
              <span>Built close.<br />Built together.</span>
            </div>
            <div className="studio__copy">
              <p>BuildWithKoo is an independent studio for founders and teams at meaningful moments of change.</p>
              <p>We bring the focus of a small senior team to product strategy, experience design, identity, and the code that brings it all to life.</p>
              <div className="capabilities">
                <p>Core capabilities</p>
                <ul>
                  {capabilities.map((capability, index) => (
                    <li key={capability}><span>0{index + 1}</span>{capability}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" aria-labelledby="contact-title">
          <div className="contact__marquee" aria-hidden="true">
            <span>LET'S MAKE IT REAL · LET'S MAKE IT REAL · </span>
          </div>
          <div className="contact__inner section-shell">
            <p className="eyebrow"><span /> Taking on select projects</p>
            <h2 id="contact-title">Have a good problem?</h2>
            <a href="mailto:hello@buildwithkoo.com">hello@buildwithkoo.com <Arrow /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <Brand />
        <p>Independent studio · New York / Worldwide</p>
        <div>
          <a href="mailto:hello@buildwithkoo.com">Email</a>
          <a href="#top">Back to top ↑</a>
        </div>
        <small>© {new Date().getFullYear()} BuildWithKoo</small>
      </footer>
    </div>
  )
}

export default App
