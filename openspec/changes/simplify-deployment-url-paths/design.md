## Context

See `proposal.md` — Why. Today:

- Callmemo builds to `dist/` with `base: '/callmemo-distribution/'`.
- Callmessage builds to `dist/callmessage-distribution/` with production `base` defaulting to `/callmemo-distribution/callmessage-distribution/` (`vite.config.ts`).
- GitHub Actions uploads `dist` from the `callmemo-distribution` **project** repo, so the Pages root is `https://<user>.github.io/callmemo-distribution/`. Callmessage therefore lives at `.../callmemo-distribution/callmessage-distribution/`.
- Local dev already uses sibling bases on one dev server.

GitHub project Pages cannot serve `github.io/callmessage-distribution/` from a single project repo whose site root is `github.io/callmemo-distribution/` — sibling paths require the **user/org site** at `github.io/` (artifact root contains both folders) or a **second project repo** named `callmessage-distribution`.

## Goals / Non-Goals

**Goals:**

- Production URLs match dev: `/callmemo-distribution/` and `/callmessage-distribution/` under the same `pages-host`.
- Single `npm run build` emits both folders under `dist/` for one upload.
- Remove nested-path default for callmessage production builds.
- Align profiles and README with the chosen deployment.

**Non-Goals:**

- Custom domain setup or CDN configuration.
- Changing landing page content, themes, or APK naming.
- Automating a second repository unless explicitly chosen in migration (document manual alternative).

## Decisions

### 1. Default production base for callmessage

**Choice:** Default `CALLMESSAGE_PAGES_BASE` to `/callmessage-distribution/` (same as development); delete the nested `/callmemo-distribution/callmessage-distribution/` default.

**Alternatives:** Keep env override only for legacy nested deploy — rejected as primary because it perpetuates confusing URLs.

### 2. Callmemo build output directory

**Choice:** Change callmemo `outDir` from `dist` to `dist/callmemo-distribution`. Callmessage stays `dist/callmessage-distribution`. `build:callmemo` must not `emptyOutDir` the entire `dist` when callmessage output already exists — use `emptyOutDir: false` for callmessage build and only empty callmemo subfolder on first build step, or run callmemo first with empty `dist` then callmessage with `emptyOutDir: false`.

**Rationale:** User-site deployment needs both siblings at artifact root. Project-repo-only deploy would break callmemo (would become `.../callmemo-distribution/callmemo-distribution/`).

**Alternatives:** Leave callmemo at `dist` root — only works for project site, fails sibling-path goal.

### 3. GitHub Pages deployment target

**Choice (recommended):** Update `.github/workflows/deploy.yml` to deploy the combined `dist/` to the **`baeseongwon.github.io`** user Pages repository (checkout that repo or use deploy action with `external_repository` / separate push job). Source code can remain in `callmemo-distribution`; CI builds and publishes artifact to user site.

**Alternative A:** Second repo `callmessage-distribution` — deploy callmessage build only there; callmemo stays on current project repo. Achieves sibling URLs on `github.io` but two workflows and duplicated CI.

**Alternative B:** Stay on project repo only — **cannot** meet sibling-path requirement; document as unsupported for callmessage canonical URL.

**Assumption:** Maintainer has or can create `<username>.github.io` repo and enable Pages from Actions. Record in README if username differs.

### 4. site-meta plugin paths

**Choice:** Update `vite-plugins/site-meta.ts` to resolve APK/meta output paths for callmemo under `dist/callmemo-distribution` instead of `dist` root.

### 5. Backward compatibility

**Choice:** Optional redirect is out of scope for static GH Pages unless added as a small `404.html` or docs note. README lists old nested URL as deprecated after migration.

## Risks / Trade-offs

- **[Project repo bookmark breakage]** Users who bookmarked nested callmessage URL need the new path → README migration note; optional redirect HTML in old path only if still deploying project repo (unlikely after switch).
- **[User site repo permissions]** Workflow needs token access to push/deploy `username.github.io` → use `GITHUB_TOKEN` with permissions on that repo or a PAT secret; document setup.
- **[Double emptyOutDir]** Wrong build order can wipe callmessage output → enforce build order and `emptyOutDir` flags in tasks.
- **[Profile hardcoded host]** URLs use `baeseongwon.github.io` → keep env or single constant if multi-env needed later.

## Migration Plan

1. Implement build layout + base path changes; verify locally with `vite preview` for each site.
2. Run full `npm run build`; confirm both `dist/*/index.html` and APK paths under each prefix.
3. Configure `baeseongwon.github.io` Pages (Actions source).
4. Update workflow to publish `dist` to user site; run workflow once.
5. Update `distributionSiteUrl` in both profiles.
6. Verify live URLs for both paths; update any external links (GitHub Issues templates, app store listings).

**Rollback:** Revert workflow to project repo deploy and restore nested `CALLMESSAGE_PAGES_BASE` default; redeploy previous commit.

## Open Questions

- Confirm whether `baeseongwon.github.io` repo already exists and is the intended Pages target (vs. org site or second project repo). Implementation tasks assume user site unless maintainer chooses Alternative A.
