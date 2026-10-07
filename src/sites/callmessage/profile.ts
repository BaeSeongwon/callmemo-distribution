// Sync copy with docs/APP_INTRODUCTION.md and docs/APP_FEATURES.md when marketing text changes.
import mockupImg from '../../assets/mockup.png'
import logoImg from './assets/logo.svg'
import type { SiteProfileFactory } from '../types'

const VERSION = '0.1.0-beta'

export const createCallmessageProfile: SiteProfileFactory = (meta) => ({
  id: 'callmessage',
  appName: '콜 메시지',
  version: VERSION,
  publishedAt: meta.publishedAt,
  fileSizeMb: meta.fileSizeMb,
  distributionSiteUrl:
    'https://baeseongwon.github.io/callmemo-distribution/callmessage-distribution/',
  contactUrl: 'https://github.com/BaeSeongwon/missed_call_responder/issues',
  operatorName: '콜 메시지 (Missed Call Responder)',
  privacyPolicyEffectiveDate: '2026.06.01',
  apkFilePrefix: 'callmessage',
  showPrivacyPolicyLink: false,
  theme: {
    primary: '#7C5CFF',
    primaryLight: '#EDE9FF',
    primaryBg: '#F5F2FF',
  },
  document: {
    title: '콜 메시지 - APK 다운로드',
    description:
      '콜 메시지 - 부재중 전화 시 SMS/MMS 자동 응답 Android 앱 다운로드 (베타)',
  },
  logo: {
    src: logoImg,
    alt: '콜 메시지 로고',
  },
  mockup: {
    src: mockupImg,
    alt: '콜 메시지 앱 화면 (플레이스홀더)',
  },
  hero: {
    titleLines: ['부재중 전화가 오면,', '준비한 메시지를 자동으로 보냅니다'],
    subtitle:
      '바쁠 때 놓친 전화에 SMS로 안내하고, 이미지가 있으면 MMS로 보냅니다. 자동 응답은 Android에서만 지원합니다.',
    badges: [
      { icon: 'message-square', label: '부재중 SMS 자동 응답' },
      { icon: 'image', label: 'MMS 이미지 지원' },
      { icon: 'phone', label: 'Android 전용' },
    ],
  },
  features: [
    { icon: 'phone', label: '자동 응답 ON/OFF\n및 최근 전송 기록' },
    { icon: 'message-square', label: '템플릿·SMS/MMS\n이미지 관리' },
    { icon: 'settings', label: '권한·배터리\n쿨다운 설정' },
  ],
  faqs: [
    {
      question: 'Play 스토어 없이 설치해도 되나요?',
      answer:
        '이 사이트에서 제공하는 APK를 직접 설치하는 방식입니다. Android 설정에서 “알 수 없는 앱” 설치를 허용해야 합니다.',
    },
    {
      question: '어떤 권한이 필요한가요?',
      answer:
        '부재중 전화를 감지하고 문자를 내려면 전화·통화 기록·SMS·알림 등 권한이 필요합니다. 백그라운드 감시를 위해 배터리 최적화 예외 설정을 권장합니다.',
    },
    {
      question: '내 데이터는 어디에 저장되나요?',
      answer:
        '응답 문구·템플릿·최근 전송 기록(성공 이벤트 최대 30건)은 기기에 저장됩니다. 운영자 서버로 전송하지 않습니다.',
    },
    {
      question: '베타 버전인가요?',
      answer:
        '현재 빌드는 베타 테스트 단계입니다. 앱을 처음 실행할 때 베타 안내가 한 번 표시되며, 자동 응답 설정은 안내 확인만으로 바뀌지 않습니다.',
    },
  ],
})
