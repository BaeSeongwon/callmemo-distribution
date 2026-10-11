## Why

로컬 개발에서는 `/callmemo-distribution/`와 `/callmessage-distribution/`로 각 사이트에 접속할 수 있지만, 현재 GitHub Pages 배포는 프로젝트 사이트 구조 때문에 콜 메시지가 `/callmemo-distribution/callmessage-distribution/` 중첩 경로로만 열립니다. 사용자·문서·프로필에 기대하는 형제 경로(`github.io/callmemo-distribution/`, `github.io/callmessage-distribution/`)와 맞지 않아 공유 URL이 혼란스럽습니다.

## What Changes

- 프로덕션 빌드에서 콜 메시지 Vite `base`를 중첩 경로 기본값이 아닌 `/callmessage-distribution/`로 통일합니다.
- `dist/` 아티팩트 레이아웃을 두 사이트 모두 **이름 있는 최상위 폴더**(`callmemo-distribution/`, `callmessage-distribution/`)로 맞춰, `username.github.io` 루트에 배포할 때 로컬과 동일한 URL이 되도록 합니다.
- GitHub Actions 배포를 **사용자 Pages 저장소**(`<username>.github.io`)에 `dist` 전체를 올리도록 조정하거나, 동일한 URL 규칙을 만족하는 공식 대안(예: 콜 메시지 전용 저장소에 `CALLMESSAGE_PAGES_BASE=/callmessage-distribution/` 빌드만 배포)을 README에 명시합니다.
- `distributionSiteUrl` 및 관련 프로필·메타를 최종 공개 URL과 일치시킵니다.
- **BREAKING**: 이 저장소만 프로젝트 Pages(`github.io/callmemo-distribution/` = dist 루트)로 유지하면 형제 경로 목표는 달성할 수 없음 — 배포 대상 또는 출력 구조 변경이 필요합니다.

## Capabilities

### New Capabilities

- `deployment/github-pages-urls`: GitHub Pages에서 콜메모·콜 메시지 배포 사이트의 공개 URL 경로, 빌드 출력 구조, 배포 대상 저장소 요구사항.

### Modified Capabilities

- (없음 — `openspec/specs/`에 아직 메인 스펙이 없음. 콜 메시지 랜딩 요구사항은 신규 배포 URL 스펙과 함께 delta에서 정렬.)

## Impact

- `vite.config.ts` (`CALLMESSAGE_PAGES_BASE`, `outDir`, `resolveSiteBase`)
- `package.json` 빌드 스크립트·환경 변수
- `.github/workflows/deploy.yml` (배포 artifact 경로·대상 저장소)
- `src/sites/callmemo/profile.ts`, `src/sites/callmessage/profile.ts`
- `README.md` 배포 섹션
- `vite-plugins/site-meta.ts` (출력 경로)
