import { Download, Shield } from 'lucide-react'
import {
  getApkDownloadUrl,
  getApkFileName,
  getDisplayName,
  siteConfig,
} from '../config/site'

function DownloadIllustration() {
  return (
    <div className="hidden shrink-0 sm:block" aria-hidden="true">
      <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
        <rect x="10" y="10" width="60" height="55" rx="6" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />
        <rect x="18" y="22" width="30" height="4" rx="2" fill="#2563EB" opacity="0.6" />
        <rect x="18" y="30" width="44" height="3" rx="1.5" fill="#93C5FD" />
        <rect x="18" y="37" width="36" height="3" rx="1.5" fill="#93C5FD" />
        <rect x="62" y="40" width="28" height="28" rx="6" fill="#2563EB" />
        <rect x="68" y="48" width="16" height="12" rx="2" fill="white" opacity="0.9" />
        <rect x="70" y="50" width="4" height="4" rx="1" fill="#2563EB" />
        <rect x="76" y="50" width="6" height="2" rx="1" fill="#2563EB" opacity="0.5" />
      </svg>
    </div>
  )
}

export function DownloadCard() {
  const downloadUrl = getApkDownloadUrl()
  const apkFileName = getApkFileName()

  return (
    <section className="-mt-6 px-5 pb-12 mt-10">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl bg-white p-6 shadow-lg shadow-blue-100/60 ring-1 ring-gray-100 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <span className="inline-block rounded-md bg-primary-light px-2.5 py-1 text-xs font-semibold text-primary">
                최신 버전
              </span>
              <h2 className="mt-3 text-xl font-bold text-text-dark md:text-2xl">{getDisplayName()}</h2>
              <p className="mt-1 text-sm text-text-muted">업데이트: {siteConfig.publishedAt}</p>
              <span className="mt-3 inline-block rounded-md bg-success-light px-2.5 py-1 text-xs font-semibold text-success">
                안드로이드 전용
              </span>
            </div>
            <DownloadIllustration />
          </div>

          <a
            href={downloadUrl}
            download={apkFileName}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-blue-700"
          >
            <Download className="h-5 w-5" />
            APK 다운로드 ({siteConfig.fileSizeMb}MB)
          </a>

          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-text-muted">
            <Shield className="h-3.5 w-3.5" />
            안전한 파일입니다. 안심하고 다운로드하세요.
          </p>
        </div>
      </div>
    </section>
  )
}
