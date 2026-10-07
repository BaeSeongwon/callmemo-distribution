# CallMemo / CallMessage Distribution

Android APK 배포 랜딩 페이지 모노레포입니다. **콜메모**와 **콜 메시지** 사이트를 같은 UI 템플릿으로 빌드합니다.

| 사이트 | Vite `base` | 프로필 |
|--------|-------------|--------|
| 콜메모 | `/callmemo-distribution/` | `src/sites/callmemo/profile.ts` |
| 콜 메시지 | `/callmessage-distribution/` | `src/sites/callmessage/profile.ts` |

## 로컬 개발

Node.js 20 또는 22 LTS 권장 (Vite 6 기준).

```bash
npm install
npm run dev              # 콜메모 (기본)
npm run dev:callmessage  # 콜 메시지
```

개발 서버 예: `http://localhost:5173/callmemo-distribution/`, `http://localhost:5173/callmessage-distribution/`

## 빌드

```bash
npm run build
```

`dist/`에 콜메모 사이트, `dist/callmessage-distribution/`에 콜 메시지 사이트가 생성됩니다.

## APK 배포

### 콜메모

1. `call_memo_app`에서 릴리스 APK를 빌드합니다.
2. `public/callmemo-v{version}.apk`로 복사합니다.
3. [`src/sites/callmemo/profile.ts`](src/sites/callmemo/profile.ts)의 `VERSION`을 APK 파일명과 맞춥니다.
4. `publishedAt`, `fileSizeMb`는 빌드 시 APK에서 자동 채움됩니다.

### 콜 메시지

1. Flutter 앱에서 릴리스 APK를 빌드합니다.
2. `public/callmessage-v{version}.apk`로 복사합니다.
3. [`src/sites/callmessage/profile.ts`](src/sites/callmessage/profile.ts)의 `VERSION`을 맞춥니다.
4. APK가 없으면 `npm run build:callmessage`가 콜메모 APK를 **임시 복사**합니다(`scripts/ensure-callmessage-apk.mjs`). 배포 전 실제 APK로 교체하세요.

콜 메시지 앱 소개·기능 문서: [`docs/APP_INTRODUCTION.md`](docs/APP_INTRODUCTION.md), [`docs/APP_FEATURES.md`](docs/APP_FEATURES.md)

## GitHub Pages 배포

1. 저장소 Settings → **Pages** → Source: **GitHub Actions**
2. `main`에 push하면 Actions가 `npm run build` 후 `dist` 전체를 배포합니다.

### GitHub Pages (`github.io`) — 이 저장소 한 번에 배포

1. GitHub 저장소 **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. `main` 브랜치에 push (또는 Actions에서 **Deploy to GitHub Pages** 워크플로 수동 실행)
3. 배포 후 URL:
   - 콜메모: `https://<username>.github.io/callmemo-distribution/`
   - 콜 메시지: `https://<username>.github.io/callmemo-distribution/callmessage-distribution/`

프로덕션 빌드는 위 중첩 경로에 맞춰 콜 메시지 `base`가 자동 설정됩니다.  
저장소 이름이 `callmessage-distribution`인 **별도 Pages**에만 올릴 때는  
`CALLMESSAGE_PAGES_BASE=/callmessage-distribution/ npm run build:callmessage` 로 빌드한 뒤 `dist/callmessage-distribution/` 내용만 그 저장소에 배포하세요.

### 커스텀 도메인

사이트별 `vite.config.ts`의 `siteBase` 값을 `'/'`로 바꾸고 저장소/도메인 구성을 맞춥니다.

## 프로젝트 구조

```
callmessage/index.html     # 콜 메시지 HTML 엔트리
index.html                 # 콜메모 HTML 엔트리
public/
  callmemo-v*.apk
  callmessage-v*.apk
src/
  sites/callmemo/          # 콜메모 문구·테마
  sites/callmessage/       # 콜 메시지 문구·테마 (docs와 동기화)
  components/              # 공유 UI
```

## 기술 스택

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- lucide-react
- GitHub Pages
