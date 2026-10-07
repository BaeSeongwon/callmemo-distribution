import { HelpCircle } from 'lucide-react'
import { useSiteProfile } from '../hooks/useSiteProfile'

export function FaqSection() {
  const { faqs } = useSiteProfile()

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
