## Purpose

GitHub Pages에 배포된 콜메모·콜 메시지 랜딩 사이트가 로컬 개발과 동일한 형제 URL 경로로 접근 가능하도록 빌드 출력과 공개 URL 규칙을 정의합니다.

## ADDED Requirements

### Requirement: Sibling public URL paths on pages host

On the production GitHub Pages host, the callmemo distribution site SHALL be reachable at the path prefix `/callmemo-distribution/` and the callmessage distribution site SHALL be reachable at the path prefix `/callmessage-distribution/`, where each prefix is a direct child of the pages site root (not nested under the other product prefix).

#### Scenario: Callmemo home at expected path

- **WHEN** a user opens `https://<pages-host>/callmemo-distribution/`
- **THEN** the callmemo distribution landing home loads with working assets and in-app routes under that prefix

#### Scenario: Callmessage home at expected path

- **WHEN** a user opens `https://<pages-host>/callmessage-distribution/`
- **THEN** the callmessage distribution landing home loads with working assets and in-app routes under that prefix

#### Scenario: Callmessage is not nested under callmemo path

- **WHEN** a user opens `https://<pages-host>/callmemo-distribution/callmessage-distribution/`
- **THEN** that URL is NOT the canonical production entry for the callmessage site (may 404 or redirect per deployment policy, but MUST NOT be the only working callmessage URL documented for users)

### Requirement: Consistent Vite base paths in production builds

Production builds for each site SHALL use Vite `base` values `/callmemo-distribution/` for callmemo and `/callmessage-distribution/` for callmessage, matching local development path prefixes.

#### Scenario: Callmessage production base matches development

- **WHEN** the callmessage site is built for production without overriding `CALLMESSAGE_PAGES_BASE`
- **THEN** generated asset and router references use `/callmessage-distribution/` as the base path

### Requirement: Combined dist layout for user-site deployment

The repository's default `npm run build` SHALL produce a `dist/` tree containing both sites as sibling directories: `dist/callmemo-distribution/` (callmemo site) and `dist/callmessage-distribution/` (callmessage site), suitable for uploading as the artifact root of a user/org GitHub Pages site (`https://<username>.github.io/`).

#### Scenario: Both site roots exist after build

- **WHEN** `npm run build` completes successfully
- **THEN** `dist/callmemo-distribution/index.html` and `dist/callmessage-distribution/index.html` both exist

### Requirement: Profile canonical URLs match deployment

Each site profile's `distributionSiteUrl` SHALL use the canonical public URL for that site on the pages host (`.../callmemo-distribution/` and `.../callmessage-distribution/` respectively), not a nested callmemo/callmessage path.

#### Scenario: Callmessage profile URL

- **WHEN** the callmessage site renders footer or privacy links that use `distributionSiteUrl`
- **THEN** the configured URL path segment is `/callmessage-distribution/` on the same pages host as callmemo

### Requirement: Documented deployment target for sibling paths

Project documentation SHALL state that achieving sibling paths on `github.io` requires deploying the combined `dist/` artifact to the user/org Pages repository root (or an equivalent documented workflow that publishes the same folder layout), and SHALL explain that deploying only from the `callmemo-distribution` project repository without that layout leaves callmessage at a nested URL.

#### Scenario: README explains URL vs repo name

- **WHEN** a maintainer reads the GitHub Pages section of the README
- **THEN** they see which deployment target yields `/callmemo-distribution/` and `/callmessage-distribution/` at the host root versus nested paths under a single project site
