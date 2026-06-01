import { Mail } from 'lucide-react'
import { siteConfig } from '../config/site'

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-gray-100 bg-gray-50 px-5 py-12">
      <div className="mx-auto max-w-5xl text-center">
        <Mail className="mx-auto h-8 w-8 text-primary" />
        <h2 className="mt-4 text-xl font-bold text-text-dark">문의하기</h2>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          앱 이용·개인정보·오류 신고는 GitHub Issues로 보내 주세요.
          <br />
          개인정보 관련 요청(열람·삭제 등)도 동일 채널로 접수합니다.
        </p>
        <a
          href={siteConfig.contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          GitHub에서 문의하기
        </a>
      </div>
    </section>
  )
}
