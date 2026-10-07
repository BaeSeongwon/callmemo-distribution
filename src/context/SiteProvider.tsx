import { useLayoutEffect, type ReactNode } from 'react'
import { setActiveProfile } from '../sites/active'
import type { SiteProfile } from '../sites/types'

interface SiteProviderProps {
  profile: SiteProfile
  children: ReactNode
}

function applyTheme(profile: SiteProfile) {
  const root = document.documentElement
  root.style.setProperty('--site-primary', profile.theme.primary)
  root.style.setProperty('--site-primary-light', profile.theme.primaryLight)
  root.style.setProperty('--site-primary-bg', profile.theme.primaryBg)
  document.title = profile.document.title

  const meta = document.querySelector('meta[name="description"]')
  if (meta) {
    meta.setAttribute('content', profile.document.description)
  }
}

export function SiteProvider({ profile, children }: SiteProviderProps) {
  setActiveProfile(profile)
  applyTheme(profile)

  useLayoutEffect(() => {
    setActiveProfile(profile)
    applyTheme(profile)
  }, [profile])

  return <>{children}</>
}
