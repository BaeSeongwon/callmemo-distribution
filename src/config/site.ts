export const siteConfig = {
  appName: '콜메모',
  version: '1.1.3',
  publishedAt: __SITE_PUBLISHED_AT__,
  fileSizeMb: __SITE_FILE_SIZE_MB__,
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
