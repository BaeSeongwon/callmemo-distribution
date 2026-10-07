import { getActiveProfile } from '../sites/active'

export function getApkFileName(version?: string): string {
  const { apkFilePrefix, version: defaultVersion } = getActiveProfile()
  const v = version ?? defaultVersion
  return `${apkFilePrefix}-v${v}.apk`
}

export function getApkDownloadUrl(version?: string): string {
  return `${import.meta.env.BASE_URL}${getApkFileName(version)}`
}

export function getDisplayName(): string {
  const { appName, version } = getActiveProfile()
  return `${appName} v${version}`
}

export function getSiteHomeUrl(): string {
  return import.meta.env.BASE_URL
}

export function getPrivacyPolicyUrl(): string {
  return `${import.meta.env.BASE_URL}privacy`
}

export function getPrivacyPolicyAbsoluteUrl(): string {
  const { distributionSiteUrl } = getActiveProfile()
  return `${distributionSiteUrl}privacy`
}

export function getSiteConfig() {
  const profile = getActiveProfile()
  return {
    appName: profile.appName,
    version: profile.version,
    publishedAt: profile.publishedAt,
    fileSizeMb: profile.fileSizeMb,
    contactUrl: profile.contactUrl,
    operatorName: profile.operatorName,
    privacyPolicyEffectiveDate: profile.privacyPolicyEffectiveDate,
    distributionSiteUrl: profile.distributionSiteUrl,
  }
}

/** @deprecated Prefer useSiteProfile() or getSiteConfig() */
export const siteConfig = new Proxy({} as ReturnType<typeof getSiteConfig>, {
  get(_target, prop) {
    return getSiteConfig()[prop as keyof ReturnType<typeof getSiteConfig>]
  },
})
