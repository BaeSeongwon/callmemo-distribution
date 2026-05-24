import { Calendar, Phone } from 'lucide-react'

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[220px] shrink-0 lg:w-[260px]">
      <div className="rounded-[2rem] border-[6px] border-gray-800 bg-gray-900 p-2 shadow-2xl">
        <div className="overflow-hidden rounded-[1.5rem] bg-white">
          <div className="bg-primary px-4 py-3 text-center text-xs font-semibold text-white">
            CallMemo
          </div>
          <div className="space-y-3 p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                <Phone className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-xs font-semibold text-text-dark">통화 종료</p>
                <p className="text-[10px] text-text-muted">010-****-1234</p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
              <p className="mb-1 text-[10px] font-medium text-text-muted">메모 작성</p>
              <p className="text-[11px] text-text-dark">내일 오후 3시 미팅 일정...</p>
            </div>
            <button
              type="button"
              className="w-full rounded-lg bg-primary py-2 text-xs font-semibold text-white"
            >
              일정 등록
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-bg px-5 pb-10 pt-8">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-200/40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 top-32 h-48 w-48 rounded-full bg-blue-100/50"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-3xl font-bold leading-tight text-primary md:text-4xl lg:text-[2.5rem]">
            통화가 끝나면,
            <br />
            중요한 내용을 기록하세요
          </h1>
          <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">
            통화 후 바로 메모하고, Google 캘린더에 일정으로 저장합니다.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-text-dark shadow-sm">
              <Phone className="h-4 w-4 text-primary" />
              통화 후 자동 메모
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-text-dark shadow-sm">
              <Calendar className="h-4 w-4 text-primary" />
              Google 캘린더 연동
            </span>
          </div>
        </div>

        <PhoneMockup />
      </div>
    </section>
  )
}
