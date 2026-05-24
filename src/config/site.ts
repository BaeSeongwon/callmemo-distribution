export const siteConfig = {
  appName: 'CallMemo',
  version: '0.0.1',
  publishedAt: '2026.05.24',
  fileSizeMb: '51.1',
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
