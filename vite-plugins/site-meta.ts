import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'

type SiteId = 'callmemo' | 'callmessage'

function readProfileVersion(profilePath: string): string {
  const content = fs.readFileSync(profilePath, 'utf-8')
  const match = content.match(/const VERSION = '([^']+)'/)
  if (!match) {
    throw new Error(`Could not read VERSION from ${profilePath}`)
  }
  return match[1]
}

function apkFileName(site: SiteId, version: string): string {
  const prefix = site === 'callmessage' ? 'callmessage' : 'callmemo'
  return `${prefix}-v${version}.apk`
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

export function siteMetaPlugin(root: string, site: SiteId): Plugin {
  return {
    name: 'site-meta',
    config() {
      const profilePath = path.join(root, 'src/sites', site, 'profile.ts')
      const version = readProfileVersion(profilePath)
      const apkName = apkFileName(site, version)
      const apkPath = path.join(root, 'public', apkName)

      if (!fs.existsSync(apkPath)) {
        throw new Error(
          `APK not found: public/${apkName} (version from ${profilePath}). ` +
            (site === 'callmessage'
              ? 'Run `node scripts/ensure-callmessage-apk.mjs` or add the release APK.'
              : 'Add the APK to public/.'),
        )
      }

      const publishedAt = formatPublishedAt(new Date())
      const fileSizeMb = getApkSizeMb(apkPath)

      return {
        define: {
          __SITE_ID__: JSON.stringify(site),
          __SITE_PUBLISHED_AT__: JSON.stringify(publishedAt),
          __SITE_FILE_SIZE_MB__: JSON.stringify(fileSizeMb),
        },
      }
    },
    closeBundle() {
      const outDir =
        site === 'callmessage'
          ? path.join(root, 'dist/callmessage-distribution')
          : path.join(root, 'dist')

      if (site === 'callmessage') {
        const nestedIndex = path.join(outDir, 'callmessage', 'index.html')
        const rootIndex = path.join(outDir, 'index.html')
        if (fs.existsSync(nestedIndex)) {
          fs.renameSync(nestedIndex, rootIndex)
          fs.rmSync(path.join(outDir, 'callmessage'), { recursive: true, force: true })
        }
      }

      const indexHtml = path.join(outDir, 'index.html')
      const notFoundHtml = path.join(outDir, '404.html')
      if (fs.existsSync(indexHtml)) {
        fs.copyFileSync(indexHtml, notFoundHtml)
      }
    },
  }
}
