import { BrandIdentity } from './brand-identity'

const navigation = [
  { label: 'The Opportunity', href: '#opportunity' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Who We Back', href: '#who-we-back' },
]

function NavigationLinks() {
  return (
    <>
      {navigation.map((item) => (
        <a href={item.href} key={item.href}>
          {item.label}
        </a>
      ))}
    </>
  )
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-link" href="#top">
        <BrandIdentity />
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        <NavigationLinks />
        <a className="header-cta" href="#apply">
          Apply to Build
          <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <details className="mobile-menu">
        <summary>
          <span>Menu</span>
          <span className="menu-lines" aria-hidden="true" />
        </summary>
        <nav aria-label="Mobile navigation">
          <NavigationLinks />
          <a className="header-cta" href="#apply">
            Apply to Build
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </details>
    </header>
  )
}
