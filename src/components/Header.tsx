import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { getSiteHomeUrl, siteConfig } from '../config/site'
import logoImg from '../assets/logo.png'

const navItems = [
  { label: '주요 기능', href: '#features' },
  { label: '설치 방법', href: '#install' },
  { label: 'FAQ', href: '#faq' },
]

interface HeaderProps {
  showMainNav?: boolean
}

export function Header({ showMainNav = true }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const homeUrl = getSiteHomeUrl()

  return (
    <header className="sticky top-0 z-50 bg-primary-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href={homeUrl} className="flex items-center gap-2.5">
          <img src={logoImg} alt="CallMemo Logo" className="h-8 w-8" />
          <span className="text-lg font-bold text-text-dark">{siteConfig.appName}</span>
        </a>

        {showMainNav && (
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        {showMainNav && (
          <button
            type="button"
            className="rounded-lg p-2 text-text-dark md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        )}
      </div>

      {showMainNav && menuOpen && (
        <nav className="border-t border-blue-100 bg-white px-5 py-3 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2.5 text-sm font-medium text-text-muted transition-colors hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
