import { useSiteProfile } from '../hooks/useSiteProfile'
import { resolveSiteIcon } from '../sites/icons'

function PhoneMockup() {
  const { mockup } = useSiteProfile()

  return (
    <div className="relative mx-auto w-[220px] shrink-0 lg:w-[260px]">
      <div className="rounded-[2rem] border-[6px] border-gray-800 bg-gray-900 p-2 shadow-2xl">
        <div className="overflow-hidden rounded-[1.5rem]">
          <img src={mockup.src} alt={mockup.alt} className="w-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const { hero } = useSiteProfile()

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
            {hero.titleLines.map((line, index) => (
              <span key={line}>
                {line}
                {index < hero.titleLines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">{hero.subtitle}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            {hero.badges.map(({ icon, label }) => {
              const Icon = resolveSiteIcon(icon)
              return (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-text-dark shadow-sm"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {label}
                </span>
              )
            })}
          </div>
        </div>

        <PhoneMockup />
      </div>
    </section>
  )
}
