# CallMemo Distribution

CallMemo Android 앱 APK 배포 랜딩 페이지입니다. `public/`에 포함된 APK 파일을 GitHub Pages로 배포합니다.

## 로컬 개발

Node.js 20 또는 22 LTS 권장 (Vite 6 기준).

```bash
npm install
npm run dev
```

## APK 배포

1. `call_memo_app`에서 릴리스 APK를 빌드합니다.

```bash
cd ../call_memo_app
flutter build apk --release \
  --dart-define=GOOGLE_SERVER_CLIENT_ID=YOUR_WEB_CLIENT_ID.apps.googleusercontent.com
```

2. 빌드된 APK를 이 저장소의 `public/` 폴더에 복사합니다. 파일명은 `callmemo-v{version}.apk` 형식입니다.

```bash
cp build/app/outputs/flutter-apk/app-release.apk \
  ../callmemo-distribution/public/callmemo-v1.0.1.apk
```

3. [`src/config/site.ts`](src/config/site.ts)에서 버전 정보를 맞춥니다.

```ts
export const siteConfig = {
  appName: '콜메모',
  version: '1.0.1',           // APK 파일명의 버전과 동일
  publishedAt: '2026.05.24',
  fileSizeMb: '24.0',         // ls -lh 로 확인 후 갱신
} as const
```

4. `main` 브랜치에 push하면 GitHub Actions가 사이트와 APK를 함께 배포합니다.

## GitHub Pages 배포

1. 저장소 Settings → **Pages** → Source: **GitHub Actions**
2. `main` 브랜치에 push하면 자동 배포됩니다.
3. 배포 URL: `https://<username>.github.io/callmemo-distribution/`
4. APK 다운로드 URL 예: `https://<username>.github.io/callmemo-distribution/callmemo-v1.0.1.apk`

### 커스텀 도메인 사용 시

[`vite.config.ts`](vite.config.ts)의 `base`를 `'/'`로 변경하세요.

```ts
export default defineConfig({
  base: '/',
})
```

## 프로젝트 구조

```
public/
  callmemo-v1.0.1.apk   # 배포할 APK (직접 추가)
src/
├── components/         # UI 컴포넌트
└── config/site.ts      # 버전·다운로드 경로 설정
```

## 기술 스택

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- lucide-react
- GitHub Pages
