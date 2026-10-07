## Why

콜 메시지(Missed Call Responder) Android 앱의 베타 APK를 배포할 공식 랜딩 페이지가 필요합니다. 콜메모용 `/callmemo-distribution/` 사이트와 동일한 UX(히어로, APK 다운로드, 기능, 설치 안내, FAQ)를 제공하면 사용자가 익숙한 형태로 설치·안내를 받을 수 있습니다. `docs/`에 정리된 앱 소개·기능 문서를 랜딩 콘텐츠의 단일 출처로 씁니다.

## What Changes

- 콜 메시지 전용 GitHub Pages 배포 경로 `/callmessage-distribution/`에 맞는 랜딩 사이트 추가
- 기존 콜메모 랜딩과 동일한 페이지 구조·섹션(Hero, DownloadCard, Features, InstallGuide, FaqSection, Header/Footer 레이아웃) 재사용
- `docs/APP_INTRODUCTION.md`, `docs/APP_FEATURES.md` 기반으로 콜 메시지용 문구·기능·FAQ·권한 안내 반영 (보라색 UI `#7C5CFF` 등 앱 브랜딩)
- 콜 메시지 APK 파일명·버전·다운로드 URL·배포 URL 설정 (`callmessage-v{version}.apk`)
- 빌드·배포 파이프라인이 콜메모 사이트를 깨지 않으면서 콜 메시지 사이트 아티팩트를 함께 생성·배포하도록 확장
- (선택) 콜 메시지 개인정보처리방침 경로 — 초기에는 FAQ·권한 안내로 대체하거나 콜메모와 동일한 레이아웃의 스텁 페이지 추가

## Capabilities

### New Capabilities

- `distribution/callmessage-landing`: `/callmessage-distribution/`에서 제공하는 콜 메시지 APK 배포 랜딩 페이지의 콘텐츠, 브랜딩, 다운로드 동작, 라우팅 요구사항

### Modified Capabilities

- (없음 — 기존 `openspec/specs/` 메인 스펙 없음. 콜메모 랜딩 동작은 구현 수준에서 유지하며 별도 스펙 델타는 두지 않음)

## Impact

- `src/`: 공유 컴포넌트 추출 또는 사이트별 설정 주입, 콜 메시지 엔트리·라우터·`site` 설정
- `public/`: `callmessage-v*.apk` 배치
- `vite.config.ts`, `vite-plugins/`, `package.json` 빌드 스크립트: 멀티 사이트 또는 이중 빌드
- `.github/workflows/deploy.yml`: `dist`에 두 base path 출력 병합
- `docs/`: 콘텐츠 참조만 (랜딩 문구와 동기화 시 수동 또는 주석으로 출처 명시)
- 콜메모 `distributionSiteUrl`, `base: '/callmemo-distribution/'` 기존 배포 URL 유지
