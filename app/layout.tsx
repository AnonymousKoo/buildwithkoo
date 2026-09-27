import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { BrandIdentity } from '@/components/brand-identity'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

export const metadata: Metadata = {
  title: 'BuildWithKoo — Venture Portfolio',
  description:
    'The venture portfolio for Koo: companies, platforms, systems, and the build process behind them.',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <BrandIdentity />
          <p>Venture portfolio & company-building platform.</p>
          <Link href="/#home">Back to top <span aria-hidden="true">↑</span></Link>
        </footer>
      </body>
    </html>
  )
}
