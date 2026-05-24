import { ChevronRight, Info } from 'lucide-react'

const steps = [
  { number: 1, label: 'APK 파일\n다운로드' },
  { number: 2, label: '설정에서\n알 수 없는 앱 허용' },
  { number: 3, label: 'APK 파일\n설치 실행' },
]

export function InstallGuide() {
  return (
    <section id="install" className="bg-gray-50 px-5 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-2">
          <Info className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-text-dark">설치 방법</h2>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-2">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {step.number}
                </div>
                <p className="mt-2 whitespace-pre-line text-center text-xs font-medium text-text-dark sm:text-sm">
                  {step.label}
                </p>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="hidden h-5 w-5 shrink-0 text-gray-300 sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
