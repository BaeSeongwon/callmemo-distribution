import { ChevronRight, HelpCircle,  Shield } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { getPrivacyPolicyUrl, siteConfig } from '../config/site'

interface FooterLink {
  icon: LucideIcon
  label: string
  href: string
  external?: boolean
}

const footerLinks: FooterLink[] = [
  { icon: HelpCircle, label: '자주 묻는 질문', href: '#faq' },
  { icon: Shield, label: '개인정보처리방침', href: getPrivacyPolicyUrl() },
  // { icon: Mail, label: '문의하기', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="px-5 pb-10 pt-6">
      <div className="mx-auto max-w-5xl">
        <div className="space-y-1">
          {footerLinks.map(({ icon: Icon, label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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

        <p className="mt-8 text-center text-xs text-text-muted">
          © 2024 {siteConfig.operatorName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
