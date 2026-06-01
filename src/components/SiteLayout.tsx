import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

interface SiteLayoutProps {
  children: ReactNode
  showMainNav?: boolean
}

export function SiteLayout({ children, showMainNav = true }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header showMainNav={showMainNav} />
      {children}
      <Footer />
    </div>
  )
}
