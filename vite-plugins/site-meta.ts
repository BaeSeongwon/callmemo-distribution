import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'

function readSiteVersion(siteTsPath: string): string {
  const content = fs.readFileSync(siteTsPath, 'utf-8')
  const match = content.match(/version:\s*['"]([^'"]+)['"]/)
  if (!match) {
    throw new Error(`Could not read version from ${siteTsPath}`)
  }
  return match[1]
}

function formatPublishedAt(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}.${month}.${day}`
}

function getApkSizeMb(apkPath: string): string {
  const bytes = fs.statSync(apkPath).size
  return (bytes / (1024 * 1024)).toFixed(1)
}

export function siteMetaPlugin(root: string): Plugin {
  return {
    name: 'site-meta',
    config() {
      const siteTsPath = path.join(root, 'src/config/site.ts')
      const version = readSiteVersion(siteTsPath)
      const apkPath = path.join(root, 'public', `callmemo-v${version}.apk`)

      if (!fs.existsSync(apkPath)) {
        throw new Error(
          `APK not found: public/callmemo-v${version}.apk (version from src/config/site.ts)`,
        )
      }

      const publishedAt = formatPublishedAt(new Date())
      const fileSizeMb = getApkSizeMb(apkPath)

      return {
        define: {
          __SITE_PUBLISHED_AT__: JSON.stringify(publishedAt),
          __SITE_FILE_SIZE_MB__: JSON.stringify(fileSizeMb),
        },
      }
    },
  }
}
