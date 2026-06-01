import { HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Play 스토어 없이 설치해도 되나요?',
    answer:
      '이 사이트에서 제공하는 APK를 직접 설치하는 방식입니다. Android 설정에서 “알 수 없는 앱” 설치를 허용해야 합니다.',
  },
  {
    question: '어떤 권한이 필요한가요?',
    answer:
      '통화 종료 감지를 위해 전화·통화 기록 권한이 필요합니다. 일정 등록을 위해 캘린더·알림 권한을 사용합니다. Google 캘린더 연동은 선택 사항입니다.',
  },
  {
    question: '내 데이터는 어디에 저장되나요?',
    answer:
      '메모와 설정은 주로 기기에 저장됩니다. Google 캘린더 연동을 켠 경우에만 메모·전화번호가 Google 계정의 캘린더에 저장될 수 있습니다. 자세한 내용은 개인정보처리방침을 참고하세요.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="px-5 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-text-dark">자주 묻는 질문</h2>
        </div>

        <dl className="space-y-6">
          {faqs.map(({ question, answer }) => (
            <div key={question} className="rounded-xl bg-gray-50 p-5">
              <dt className="font-semibold text-text-dark">{question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-text-muted">{answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
