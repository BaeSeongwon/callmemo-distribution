export const siteConfig = {
  appName: '콜메모',
  version: '1.1.2',
  publishedAt: '2026.05.25',
  fileSizeMb: '53.3',
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
