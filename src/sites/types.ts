export type SiteId = 'callmemo' | 'callmessage'

export type SiteIconName = 'phone' | 'calendar' | 'file-text' | 'message-square' | 'settings' | 'image'

export interface SiteBuildMeta {
  publishedAt: string
  fileSizeMb: string
}

export interface SiteProfile {
  id: SiteId
  appName: string
  version: string
  publishedAt: string
  fileSizeMb: string
  distributionSiteUrl: string
  contactUrl: string
  operatorName: string
  privacyPolicyEffectiveDate: string
  apkFilePrefix: string
  showPrivacyPolicyLink: boolean
  theme: {
    primary: string
    primaryLight: string
    primaryBg: string
  }
  document: {
    title: string
    description: string
  }
  logo: {
    src: string
    alt: string
  }
  mockup: {
    src: string
    alt: string
  }
  hero: {
    titleLines: string[]
    subtitle: string
    badges: { icon: SiteIconName; label: string }[]
  }
  features: { icon: SiteIconName; label: string }[]
  faqs: { question: string; answer: string }[]
}

export type SiteProfileFactory = (meta: SiteBuildMeta) => SiteProfile
