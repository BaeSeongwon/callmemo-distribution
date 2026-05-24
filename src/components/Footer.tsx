import { ChevronRight, HelpCircle, Mail, Shield } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface FooterLink {
  icon: LucideIcon
  label: string
  href: string
}

const footerLinks: FooterLink[] = [
  { icon: HelpCircle, label: '자주 묻는 질문', href: '#faq' },
  { icon: Shield, label: '개인정보처리방침', href: '#privacy' },
  { icon: Mail, label: '문의하기', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="px-5 pb-10 pt-6">
      <div className="mx-auto max-w-5xl">
        <div id="faq" className="space-y-1">
          {footerLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center justify-between rounded-xl px-4 py-3.5 transition-colors hover:bg-gray-50"
            >
              <span className="flex items-center gap-3 text-sm font-medium text-text-dark">
                <Icon className="h-4 w-4 text-text-muted" />
                {label}
              </span>
              <ChevronRight className="h-4 w-4 text-gray-300" />
            </a>
          ))}
        </div>

        <div id="privacy" className="hidden" aria-hidden="true" />
        <div id="contact" className="hidden" aria-hidden="true" />

        <p className="mt-8 text-center text-xs text-text-muted">
          © 2024 CallMemo. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
