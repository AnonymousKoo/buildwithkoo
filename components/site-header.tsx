import Link from 'next/link'
import { BrandIdentity } from './brand-identity'

const navigation = [
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Build Board', href: '/#build-board' },
  { label: 'Build System', href: '/#build-system' },
]

function NavigationLinks() {
  return (
    <>
      {navigation.map((item) => (
        <Link href={item.href} key={item.href}>
          {item.label}
        </Link>
      ))}
    </>
  )
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand-link" href="/#home">
        <BrandIdentity />
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        <NavigationLinks />
        <Link className="header-cta" href="/apply">
          Build With Koo
          <span aria-hidden="true">↗</span>
        </Link>
      </nav>

      <details className="mobile-menu">
        <summary>
          <span>Menu</span>
          <span className="menu-lines" aria-hidden="true" />
        </summary>
        <nav aria-label="Mobile navigation">
          <NavigationLinks />
          <Link className="header-cta" href="/apply">
            Build With Koo
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </details>
    </header>
  )
}
