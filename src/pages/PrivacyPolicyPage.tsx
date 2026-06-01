import type { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'
import { getSiteHomeUrl, siteConfig } from '../config/site'

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-b border-gray-100 py-8 last:border-b-0">
      <h2 className="text-lg font-bold text-text-dark">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-text-muted">{children}</div>
    </section>
  )
}

export function PrivacyPolicyPage() {
  return (
    <main className="px-5 py-8">
      <div className="mx-auto max-w-3xl">
        <a
          href={getSiteHomeUrl()}
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4" />
          홈으로
        </a>

        <h1 className="text-2xl font-bold text-text-dark md:text-3xl">개인정보처리방침</h1>
        <p className="mt-2 text-sm text-text-muted">
          {siteConfig.appName}({siteConfig.operatorName}) · 시행일{' '}
          {siteConfig.privacyPolicyEffectiveDate}
        </p>

        <div className="mt-6">
          <Section title="1. 개요">
            <p>
              {siteConfig.operatorName}(이하 &quot;운영자&quot;)는 모바일 앱 「{siteConfig.appName}
              」(이하 &quot;앱&quot;) 및 APK 배포 웹사이트(이하 &quot;사이트&quot;)와 관련하여
              이용자의 개인정보를 보호하고, 「개인정보 보호법」 등 관련 법령을 준수합니다.
            </p>
            <p>본 방침은 앱 설치·이용과 사이트 방문 시 적용됩니다.</p>
          </Section>

          <Section title="2. 수집하는 개인정보 항목 및 방법">
            <p>
              <strong className="text-text-dark">앱</strong>
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong className="text-text-dark">통화 관련 정보</strong>: 통화 종료 감지를 위한
                통화 상태, 통화 기록(발신·수신 번호, 통화 시각 등) — Android 권한(전화, 통화 기록)
                허용 시
              </li>
              <li>
                <strong className="text-text-dark">메모·일정 정보</strong>: 이용자가 작성한 통화
                메모, 일정 제목·설명·일시
              </li>
              <li>
                <strong className="text-text-dark">Google 계정 정보</strong>: Google 캘린더 연동
                시 로그인 계정(이메일 등) 및 캘린더 이벤트 생성에 필요한 정보
              </li>
              <li>
                <strong className="text-text-dark">기기·앱 설정</strong>: 알림 표시, 캘린더 연동
                옵션(메모 본문 포함 여부 등) — 기기 내 저장(shared_preferences)
              </li>
            </ul>
            <p className="mt-3">
              <strong className="text-text-dark">수집 방법</strong>: 앱 이용 과정에서 이용자
              기기에서 자동·직접 수집하며, Google 연동은 이용자가 선택·로그인할 때 처리됩니다.
            </p>
            <p className="mt-3">
              <strong className="text-text-dark">사이트</strong>
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                APK 다운로드 시 GitHub Pages·호스팅 사업자가 접속 IP, 브라우저 정보 등 서버 로그를
                생성할 수 있습니다.
              </li>
              <li>사이트는 회원가입·문의 폼을 운영하지 않으며, 이용자가 직접 입력하는
                개인정보는 수집하지 않습니다.
              </li>
            </ul>
          </Section>

          <Section title="3. 개인정보의 이용 목적">
            <ul className="list-disc space-y-1 pl-5">
              <li>통화 종료 후 메모 작성 알림 제공</li>
              <li>통화 메모 작성·편집 및 기기·연동 캘린더에 일정 등록</li>
              <li>Google 캘린더 연동(이용자가 켠 경우)</li>
              <li>앱 설정 저장 및 서비스 안정적 제공</li>
              <li>사이트를 통한 앱 배포·안내</li>
            </ul>
          </Section>

          <Section title="4. 보유 및 이용 기간">
            <p>
              앱 내 메모·설정은 이용자가 삭제하거나 앱을 삭제할 때까지 기기에 보관됩니다. Google
              캘린더에 생성된 일정은 Google의 정책·이용자 계정 설정에 따릅니다.
            </p>
            <p>
              운영자가 별도의 자체 서버에 이용자 개인정보를 저장·보관하지 않습니다. 사이트 접속
              로그는 GitHub Pages 등 호스팅 제공자의 정책에 따릅니다.
            </p>
          </Section>

          <Section title="5. 제3자 제공 및 처리 위탁">
            <p>운영자는 이용자 개인정보를 원칙적으로 외부에 판매·임대하지 않습니다.</p>
            <p>다만 이용 기능에 따라 아래와 같이 제3자 서비스를 이용할 수 있습니다.</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong className="text-text-dark">Google LLC</strong>: Google 로그인, Google
                Calendar API(이용자가 연동한 경우) —{' '}
                <a
                  href="https://policies.google.com/privacy"
                  className="text-primary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google 개인정보처리방침
                </a>
              </li>
              <li>
                <strong className="text-text-dark">GitHub, Inc.</strong>: 사이트·APK 호스팅(GitHub
                Pages)
              </li>
              <li>
                <strong className="text-text-dark">jsDelivr CDN</strong>: 사이트 웹폰트 로드
              </li>
            </ul>
            <p>
              Google 캘린더 연동은 이용자가 앱에서 스위치를 켜고 로그인·권한을 허용한 경우에만
              이루어집니다.
            </p>
          </Section>

          <Section title="6. 개인정보의 국외 이전">
            <p>
              Google·GitHub 등 해외에 소재한 사업자의 서비스를 이용할 수 있으며, 해당 사업자의
              정책에 따라 국외에서 처리될 수 있습니다.
            </p>
          </Section>

          <Section title="7. 이용자의 권리">
            <p>
              이용자는 개인정보 열람·정정·삭제·처리 정지를 요청할 수 있습니다. 앱 내 데이터는 앱
              삭제·메모·일정 삭제, Google 연동 해제로 대부분 처리할 수 있으며, 그 외 문의는 아래
              연락처로 요청해 주세요.
            </p>
          </Section>

          <Section title="8. 권한 거부 시 불이익">
            <p>
              전화·통화 기록 권한을 허용하지 않으면 통화 종료 감지 및 메모 알림 등 핵심 기능을
              사용할 수 없습니다. 캘린더·알림 권한을 거부하면 해당 기능이 제한될 수 있습니다.
            </p>
          </Section>

          <Section title="9. 개인정보의 안전성 확보">
            <p>
              운영자는 개인정보가 기기 밖으로 불필요하게 전송되지 않도록 설계하고, Google API
              통신 시 HTTPS를 사용합니다. 다만 인터넷 환경에서는 완전한 보안을 보장할 수 없습니다.
            </p>
          </Section>

          <Section title="10. 개인정보 보호책임자 및 문의">
            <p>
              개인정보 보호 관련 문의·불만·피해 구제는 아래로 연락해 주세요.
            </p>
            <ul className="list-none space-y-1 pl-0">
              <li>
                <strong className="text-text-dark">운영</strong>: {siteConfig.operatorName}
              </li>
              <li>
                <strong className="text-text-dark">문의</strong>:{' '}
                <a
                  href={siteConfig.contactUrl}
                  className="text-primary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Issues
                </a>
              </li>
            </ul>
          </Section>

          <Section title="11. 방침의 변경">
            <p>
              법령·서비스 변경 시 본 방침을 수정할 수 있으며, 변경 시 사이트에 게시하고 시행일을
              명시합니다.
            </p>
          </Section>
        </div>
      </div>
    </main>
  )
}
