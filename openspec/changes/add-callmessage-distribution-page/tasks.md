## 1. Site profile and shared template

- [x] 1.1 Define `SiteProfile` (name, version, URLs, theme, hero, features, faqs, apk prefix, assets) and React context/provider
- [x] 1.2 Refactor `Hero`, `Features`, `FaqSection`, `Header`, `Footer`, `DownloadCard` to read copy and theme from profile without changing callmemo visible text
- [x] 1.3 Move callmemo values into `sites/callmemo/profile.ts` and wire existing `src/config/site.ts` to delegate to callmemo profile
- [x] 1.4 Add runtime or wrapper CSS variable mapping so `primary` tokens follow profile accent color

## 2. Callmessage site content

- [x] 2.1 Add `sites/callmessage/profile.ts` from `docs/APP_INTRODUCTION.md` and `docs/APP_FEATURES.md` (hero, ≥3 features, FAQ including permissions/storage/beta)
- [x] 2.2 Set `distributionSiteUrl` to `https://baeseongwon.github.io/callmessage-distribution/` and contact/operator fields (GitHub Issues URL if available)
- [x] 2.3 Add placeholder logo/mockup under `sites/callmessage/assets/` (replace when marketing assets exist)

## 3. Build entries and Vite

- [x] 3.1 Add callmessage HTML/TS entry (`main.tsx` bootstrap with site id) and router basename `/callmessage-distribution/`
- [x] 3.2 Extend `vite.config.ts` (or `vite.config.shared.ts`) for `SITE=callmemo|callmessage` with correct `base` and `rollupOptions.input`
- [x] 3.3 Extend `site-meta` plugin to resolve APK path per site (`callmemo-v*` vs `callmessage-v*`)
- [x] 3.4 Add `dev:callmessage` and dual `build` scripts merging both outputs into `dist/` (callmemo output unchanged at `dist/callmemo-distribution/` or current layout)

## 4. APK and public assets

- [x] 4.1 Document APK copy path in README (`callmessage-v{version}.apk` in `public/`)
- [x] 4.2 Add callmessage APK to `public/` when available and align `version` in profile

## 5. Deploy and verification

- [x] 5.1 Confirm `npm run build` in CI produces both sites; smoke-test callmemo home and APK URL
- [x] 5.2 Smoke-test callmessage home at `/callmessage-distribution/` (local and after deploy): sections, purple theme, APK link
- [x] 5.3 Document GitHub Pages URL expectations (sibling repo `callmessage-distribution` vs nested under `callmemo-distribution` repo) in README
