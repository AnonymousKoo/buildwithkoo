"use client";

import Link from "next/link";
import { BrandIdentity } from "./brand-identity";

const navigation = [
  { label: "Ventures", href: "/#portfolio" },
  { label: "Partners", href: "/#partners" },
  { label: "Approach", href: "/#approach" },
];

function NavigationLinks() {
  return (
    <>
      {navigation.map((item) => (
        <Link href={item.href} key={item.href}>
          {item.label}
        </Link>
      ))}
    </>
  );
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
        <nav
          aria-label="Mobile navigation"
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a"))
              event.currentTarget.closest("details")?.removeAttribute("open");
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              const menu = event.currentTarget.closest("details");
              menu?.removeAttribute("open");
              menu?.querySelector("summary")?.focus();
            }
          }}
        >
          <NavigationLinks />
          <Link className="header-cta" href="/apply">
            Build With Koo
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </details>
    </header>
  );
}
