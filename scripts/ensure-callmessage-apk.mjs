import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const profilePath = path.join(root, 'src/sites/callmessage/profile.ts')
const profile = fs.readFileSync(profilePath, 'utf-8')
const versionMatch = profile.match(/const VERSION = '([^']+)'/)
if (!versionMatch) {
  console.error('Could not read VERSION from callmessage profile')
  process.exit(1)
}

const version = versionMatch[1]
const targetName = `callmessage-v${version}.apk`
const targetPath = path.join(root, 'public', targetName)

if (fs.existsSync(targetPath)) {
  process.exit(0)
}

const callmemoProfile = fs.readFileSync(
  path.join(root, 'src/sites/callmemo/profile.ts'),
  'utf-8',
)
const callmemoVersionMatch = callmemoProfile.match(/const VERSION = '([^']+)'/)
if (!callmemoVersionMatch) {
  console.error('Could not read callmemo VERSION for placeholder APK copy')
  process.exit(1)
}

const sourcePath = path.join(root, 'public', `callmemo-v${callmemoVersionMatch[1]}.apk`)
if (!fs.existsSync(sourcePath)) {
  console.error(
    `Missing ${targetName} and no callmemo APK at ${sourcePath} to use as a build placeholder.`,
  )
  process.exit(1)
}

fs.copyFileSync(sourcePath, targetPath)
console.warn(
  `Created placeholder public/${targetName} from callmemo APK. Replace with the real 콜 메시지 release build.`,
)
