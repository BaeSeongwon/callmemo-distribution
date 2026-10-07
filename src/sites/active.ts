import type { SiteProfile } from './types'

let activeProfile: SiteProfile | null = null

export function setActiveProfile(profile: SiteProfile): void {
  activeProfile = profile
}

export function getActiveProfile(): SiteProfile {
  if (!activeProfile) {
    throw new Error('Site profile not initialized. Call setActiveProfile in main.tsx.')
  }
  return activeProfile
}
