## 1. Build output and base paths

- [ ] 1.1 Change callmessage production default in `vite.config.ts` to `/callmessage-distribution/` (remove nested default); keep dev behavior unchanged
- [ ] 1.2 Set callmemo `build.outDir` to `dist/callmemo-distribution`; adjust `emptyOutDir` so `build:callmemo` then `build:callmessage` preserves both folders
- [ ] 1.3 Update `vite-plugins/site-meta.ts` output paths for callmemo under `dist/callmemo-distribution`
- [ ] 1.4 Run `npm run build` and verify `dist/callmemo-distribution/index.html`, `dist/callmessage-distribution/index.html`, and APK asset paths in built HTML

## 2. Site profiles and metadata

- [ ] 2.1 Update `src/sites/callmessage/profile.ts` `distributionSiteUrl` to `https://baeseongwon.github.io/callmessage-distribution/`
- [ ] 2.2 Confirm callmemo `distributionSiteUrl` remains `https://baeseongwon.github.io/callmemo-distribution/`

## 3. GitHub Pages deployment

- [ ] 3.1 Confirm deployment target with maintainer: `baeseongwon.github.io` user site (recommended) vs separate `callmessage-distribution` project repo
- [ ] 3.2 Update `.github/workflows/deploy.yml` to publish combined `dist/` to the user Pages repository (or document dual-repo flow if Alternative A chosen)
- [ ] 3.3 Configure GitHub Pages on target repo (Actions source) and required token permissions for cross-repo deploy if needed

## 4. Documentation and verification

- [ ] 4.1 Revise README GitHub Pages section: sibling URLs, combined `dist/` layout, migration from nested callmessage URL
- [ ] 4.2 Smoke-test locally: `npm run dev` → `/callmemo-distribution/`; `npm run dev:callmessage` → `/callmessage-distribution/`
- [ ] 4.3 After deploy, verify live `https://baeseongwon.github.io/callmemo-distribution/` and `https://baeseongwon.github.io/callmessage-distribution/` (adjust host if different)
