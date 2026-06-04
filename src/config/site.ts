/** GitHub Pages 배포 URL (끝 슬래시 포함). 앱 `kDistributionSiteUrl`과 맞출 것. */
export const distributionSiteUrl =
  'https://baeseongwon.github.io/callmemo-distribution/' as const

export const siteConfig = {
  appName: '콜메모',
  version: '1.2.1',
  publishedAt: __SITE_PUBLISHED_AT__,
  fileSizeMb: __SITE_FILE_SIZE_MB__,
  /** 개인정보 보호·서비스 문의 (GitHub Issues) */
  contactUrl: 'https://github.com/BaeSeongwon/call_memo_app/issues',
  operatorName: '콜메모 (CallMemo)',
  privacyPolicyEffectiveDate: '2026.06.01',
} as const

export function getApkFileName(version: string = siteConfig.version): string {
  return `callmemo-v${version}.apk`
}

export function getApkDownloadUrl(version: string = siteConfig.version): string {
  return `${import.meta.env.BASE_URL}${getApkFileName(version)}`
}

export function getDisplayName(): string {
  return `${siteConfig.appName} v${siteConfig.version}`
}

export function getSiteHomeUrl(): string {
  return import.meta.env.BASE_URL
}

export function getPrivacyPolicyUrl(): string {
  return `${import.meta.env.BASE_URL}privacy.html`
}

/** 앱·외부 링크용 절대 URL */
export function getPrivacyPolicyAbsoluteUrl(): string {
  return `${distributionSiteUrl}privacy.html`
}
