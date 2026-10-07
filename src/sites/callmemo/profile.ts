import logoImg from '../../assets/logo.png'
import mockupImg from '../../assets/mockup.png'
import type { SiteProfileFactory } from '../types'

const VERSION = '1.2.1'

export const createCallmemoProfile: SiteProfileFactory = (meta) => ({
  id: 'callmemo',
  appName: '콜메모',
  version: VERSION,
  publishedAt: meta.publishedAt,
  fileSizeMb: meta.fileSizeMb,
  distributionSiteUrl: 'https://baeseongwon.github.io/callmemo-distribution/',
  contactUrl: 'https://github.com/BaeSeongwon/call_memo_app/issues',
  operatorName: '콜메모 (CallMemo)',
  privacyPolicyEffectiveDate: '2026.06.01',
  apkFilePrefix: 'callmemo',
  showPrivacyPolicyLink: true,
  theme: {
    primary: '#2563eb',
    primaryLight: '#dbeafe',
    primaryBg: '#f0f4ff',
  },
  document: {
    title: '콜메모 - APK 다운로드',
    description:
      'CallMemo - 통화 후 메모 작성 및 Google 캘린더 연동 Android 앱 다운로드',
  },
  logo: {
    src: logoImg,
    alt: 'CallMemo Logo',
  },
  mockup: {
    src: mockupImg,
    alt: '콜메모 앱 화면',
  },
  hero: {
    titleLines: ['통화가 끝나면,', '중요한 내용을 기록하세요'],
    subtitle: '통화 후 바로 메모하고, Google 캘린더에 일정으로 저장합니다.',
    badges: [
      { icon: 'phone', label: '통화 후 자동 메모' },
      { icon: 'calendar', label: 'Google 캘린더 연동' },
    ],
  },
  features: [
    { icon: 'phone', label: '통화 종료 후\n자동 메모' },
    { icon: 'file-text', label: '메모 작성 및\n일정 등록' },
    { icon: 'calendar', label: 'Google 캘린더\n자동 연동' },
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
        '통화 종료 감지를 위해 전화·통화 기록 권한이 필요합니다. 일정 등록을 위해 캘린더·알림 권한을 사용합니다. Google 캘린더 연동은 선택 사항입니다.',
    },
    {
      question: '내 데이터는 어디에 저장되나요?',
      answer:
        '메모와 설정은 주로 기기에 저장됩니다. Google 캘린더 연동을 켠 경우에만 메모·전화번호가 Google 계정의 캘린더에 저장될 수 있습니다. 자세한 내용은 개인정보처리방침을 참고하세요.',
    },
  ],
})
