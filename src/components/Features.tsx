import { Calendar, FileText, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  label: string
}

const features: Feature[] = [
  { icon: Phone, label: '통화 종료 후\n자동 메모' },
  { icon: FileText, label: '메모 작성 및\n일정 등록' },
  { icon: Calendar, label: 'Google 캘린더\n자동 연동' },
  // { icon: Cloud, label: '계정 연동으로\n안전한 백업' },
]

export function Features() {
  return (
    <section id="features" className="px-5 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-text-dark">주요 기능</h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <p className="mt-3 whitespace-pre-line text-sm font-medium leading-snug text-text-dark">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
