## Context

The repository is a Vite + React + Tailwind static site for CallMemo APK distribution with `base: '/callmemo-distribution/'`, shared layout components, and content hardcoded for CallMemo (blue theme `#2563eb`). `docs/` describes a separate product, **콜 메시지**, with purple branding and missed-call SMS/MMS behavior. GitHub Pages serves one `dist/` artifact per repo; the new site needs its own path prefix `/callmessage-distribution/` alongside the existing prefix.

See `proposal.md` for motivation.

## Goals / Non-Goals

**Goals:**

- Add a callmessage landing that mirrors CallMemo’s page structure and component layout.
- Centralize per-app copy, theme tokens, APK naming, and absolute URLs in site-specific config.
- Produce a single `dist/` tree containing both `callmemo-distribution/` and `callmessage-distribution/` outputs for one Pages deployment.
- Wire `site-meta` (published date, APK size) for the callmessage APK the same way as callmemo.

**Non-Goals:**

- Changing CallMemo app strings, theme, or deployment URL behavior beyond shared refactor.
- Implementing callmessage privacy policy legal text (stub or deferred unless copy is provided).
- iOS distribution or Play Store listing.
- Automating sync from `docs/*.md` at build time (manual parity with docs is acceptable initially).

## Decisions

### 1. Multi-site build via dual Vite passes (recommended)

**Choice:** Add npm scripts `build:callmemo` and `build:callmessage` (or `build` runs both sequentially), each invoking `vite build` with `SITE=callmemo|callmessage` and merging outputs into `dist/`.

**Rationale:** Vite allows only one `base` per config run. Dual passes are simple, match existing single-app setup, and avoid a heavy monorepo framework.

**Alternatives:**

- Single build with `base: '/'` and host two repos — breaks existing callmemo URLs.
- One SPA with runtime path detection — couples routing and risks wrong theme/APK on wrong path.

### 2. Shared template, site-specific data

**Choice:** Introduce a small `SiteProfile` type (appName, version, colors, hero, feature items, faqs, apk prefix, distributionSiteUrl, contactUrl, assets). Keep presentational components (`DownloadCard`, `InstallGuide` structure) accepting profile via React context or props. CallMemo keeps current content via `sites/callmemo/profile.ts`; callmessage uses `sites/callmessage/profile.ts` filled from `docs/`.

**Rationale:** Minimizes duplication while preserving identical section order as `DistributionPage.tsx`.

**Alternatives:** Copy-paste a second page tree — faster short-term, harder to maintain.

### 3. Entry points

**Choice:** Two HTML entry files (e.g. `callmemo/index.html`, `callmessage/index.html`) each bootstrapping the same app shell with `import.meta.env.VITE_SITE_ID` or build-time define selecting the profile. Router basename = respective `base`.

**Rationale:** Clear separation for dev (`vite --config` or env) and CI.

### 4. Theming

**Choice:** Map profile primary color to CSS variables at runtime on `document.documentElement` (or site-specific wrapper class) so Tailwind `primary` tokens resolve to `#7C5CFF` for callmessage without a second full CSS bundle.

**Alternative:** Duplicate `@theme` in two CSS entry files — acceptable if runtime theming is awkward.

### 5. Assets

**Choice:** `src/sites/callmessage/assets/` for logo and mockup placeholders until real marketing assets exist; README note to replace.

### 6. Public APK layout

**Choice:** `public/callmessage/` or root `public/callmessage-v*.apk` copied into `dist/callmessage-distribution/` during build (mirror callmemo `public/` handling). `getApkFileName()` uses profile prefix `callmessage`.

### 7. CI / deploy

**Choice:** Update `npm run build` to run both site builds and merge into `dist/`. No workflow structural change beyond build command.

**Note:** If the GitHub repo name stays `callmemo-distribution`, both paths still work on `username.github.io/callmemo-distribution/../callmessage-distribution/` only if both folders exist in `dist` at site root — i.e. `dist/callmessage-distribution/index.html`. Pages serves the whole `dist` as site root, so paths are `github.io/<repo>/` for default project pages. **Important:** Default project Pages URL is `/<repo-name>/` only for the repo root — actually for project sites, the URL is `https://user.github.io/REPO_NAME/` and everything in `dist` is under that prefix.

Wait - I need to reconsider. For GitHub Pages project site:
- Repo: `callmemo-distribution`
- URL: `https://user.github.io/callmemo-distribution/`
- Files in dist root: `index.html` → served at `/callmemo-distribution/`
- If we add `callmessage-distribution/index.html` in dist, it would be at `https://user.github.io/callmemo-distribution/callmessage-distribution/` NOT `https://user.github.io/callmessage-distribution/`

The user asked for `/callmessage-distribution` page - they might want a **separate repository** `callmessage-distribution` OR nested path under same repo.

User said: "/callmessage-distribution 페이지와 동일한 템플릿으로" - comparing to `/callmemo-distribution` which is the vite base. So the callmessage site URL would be `https://baeseongwon.github.io/callmessage-distribution/` which requires a **separate GitHub repo** named `callmessage-distribution`, OR they accept nested URL.

Looking at site.ts: `https://baeseongwon.github.io/callmemo-distribution/` - parallel would be `https://baeseongwon.github.io/callmessage-distribution/` - that's a **different repo** on GitHub Pages.

Options:
1. Same repo, nested: `.../callmemo-distribution/callmessage-distribution/` - weird
2. Same repo build outputs only callmessage with base `/callmessage-distribution/` when deploying to callmessage repo - copy artifact
3. Separate repo cloned from this template

The user said "make the page" in this project with docs - most likely they want the codebase ready for `callmessage-distribution` repo OR multi-site in one dist.

For one repo `callmemo-distribution`, the only way to get `github.io/callmessage-distribution/` is a **second repository**.

I'll document in design:
- **Primary:** Implement callmessage site with `base: '/callmessage-distribution/'` and document that GitHub Pages project URL is `https://<user>.github.io/<repository-name>/`. For URL `.../callmessage-distribution/` at domain root, deploy from a repository named `callmessage-distribution` (same build target). This repo can host both builds if the Pages site is a user/org site at root — uncommon.

Actually re-read GitHub pages: If you use custom structure with actions, `path: dist` - for project site, site is at `/REPO/`. So callmessage at root path `/callmessage-distribution/` needs repo `callmessage-distribution`.

I'll state in design Open Question resolved: implement site with base `/callmessage-distribution/`; deploying to the canonical URL requires the `callmessage-distribution` GitHub repo (or org pages root). In **this** monorepo, output `dist/callmessage-distribution/` for optional combined deploy OR split workflow later. When deployed from repo `callmemo-distribution`, live URL becomes `github.io/callmemo-distribution/callmessage-distribution/` unless they use a second repo.

I'll mention this trade-off clearly in Risks and Migration.

Let me update design with this nuance - user probably wants a second repo eventually but developing in same codebase is fine.

### 8. Local dev

**Choice:** `pnpm dev:callmessage` with env setting base and profile for preview at `http://localhost:5173/callmessage-distribution/`.

## Risks / Trade-offs

- **[GitHub Pages path vs repo name]** → Document that canonical `baeseongwon.github.io/callmessage-distribution/` needs the homonymous repo; nested path under `callmemo-distribution` repo is the default if only one repo is used. Mitigation: README deploy section for callmessage.
- **[Content drift from docs]** → Comment in profile file: "sync with docs/APP_FEATURES.md". Mitigation: optional follow-up script.
- **[Shared refactor regressions]** → Manual smoke test both sites after build. Mitigation: checklist in tasks.
- **[Missing APK/logo]** → Placeholder assets; download works when APK added to public.

## Migration Plan

1. Refactor callmemo to profile-driven components without visible copy changes.
2. Add callmessage profile and second build entry.
3. Add `public/callmessage-v*.apk` when available; set version in profile.
4. Run combined build; verify both folders in `dist/`.
5. Deploy via existing Actions; validate both URLs (or document second repo push).
6. Rollback: revert merge build script; callmemo-only build restores prior behavior.

## Open Questions

- Whether callmessage Pages will live in this repository (nested URL) or a new `callmessage-distribution` repository (canonical URL). Implementation supports either via deploy target; default assumption: **same codebase, `base` `/callmessage-distribution/`, operator creates sibling repo or accepts nested path until split.**
