import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { BrandIdentity } from '@/components/brand-identity'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

export const metadata: Metadata = {
  title: 'BuildWithKoo — Build something you can own',
  description:
    'BuildWithKoo partners with proven operators ready to turn what they know into something bigger.',
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
          <p>A selective company-building partnership.</p>
          <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </footer>
      </body>
    </html>
  )
}
