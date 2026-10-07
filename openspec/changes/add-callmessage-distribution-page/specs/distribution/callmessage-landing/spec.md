## Purpose

콜 메시지 Android 앱의 APK를 GitHub Pages 경로 `/callmessage-distribution/`에서 배포·설치 안내하는 공개 랜딩 페이지의 동작과 콘텐츠 요구사항을 정의합니다.

## ADDED Requirements

### Requirement: Public base path and home route

The callmessage distribution site SHALL be served under the URL path prefix `/callmessage-distribution/` on GitHub Pages (including trailing-slash asset resolution consistent with the callmemo distribution site).

The site SHALL expose a home page at the root of that prefix that matches the section layout of the callmemo distribution home page: hero, APK download card, features grid, install guide, and FAQ.

#### Scenario: User opens the callmessage distribution home

- **WHEN** a user navigates to `https://<pages-host>/callmessage-distribution/`
- **THEN** the user sees the callmessage landing home with hero, download, features, install, and FAQ sections in that order

#### Scenario: Static assets resolve under the prefix

- **WHEN** the home page loads
- **THEN** scripts, styles, and in-app routes use the `/callmessage-distribution/` base path so refresh and deep links do not break

### Requirement: Branding and hero messaging

The landing SHALL identify the product as **콜 메시지** (Missed Call Responder) and describe automatic SMS/MMS reply after missed calls, consistent with `docs/APP_INTRODUCTION.md`.

The primary accent color SHALL be `#7C5CFF` (or equivalent CSS theme tokens derived from it) to align with the mobile app UI described in the docs.

The hero SHALL highlight at least: automatic reply on missed calls, SMS/MMS with optional images, and Android-only automatic response.

#### Scenario: Hero reflects app positioning

- **WHEN** the user views the hero section
- **THEN** the headline and subcopy describe missed-call auto-reply via SMS/MMS, not call memo or calendar features

### Requirement: APK download metadata and file

The site SHALL offer a direct download link for a single latest APK file named `callmessage-v{version}.apk` where `{version}` matches the configured site version string.

The download card SHALL display app display name with version, published date, file size in megabytes, and an Android-only badge, using the same presentation pattern as the callmemo download card.

#### Scenario: User downloads the APK

- **WHEN** the user activates the primary download control
- **THEN** the browser requests the APK at `/callmessage-distribution/callmessage-v{version}.apk` with a filename hint matching that pattern

### Requirement: Features section from product docs

The features section SHALL present a concise grid of user-visible capabilities derived from `docs/APP_FEATURES.md`, including at minimum: home auto-reply toggle and recent send history, message templates (SMS/MMS, images), and settings (permissions, battery optimization, cooldown, boot behavior).

Feature labels SHALL be accurate for callmessage (no Google Calendar or post-call memo claims).

#### Scenario: Features match callmessage scope

- **WHEN** the user scrolls to the features section
- **THEN** each listed feature relates to missed-call auto-reply, templates, or settings described in the docs

### Requirement: Install guide

The install guide SHALL describe the same sideload flow as the callmemo site: download APK, allow unknown apps, run installer.

#### Scenario: Install steps visible

- **WHEN** the user opens the install section
- **THEN** the user sees three numbered steps equivalent to the callmemo install guide

### Requirement: FAQ and permissions

The FAQ SHALL answer at least: sideload install without Play Store, required Android permissions for auto-reply (phone, call log, SMS, notifications as applicable), and where data is stored (on-device templates and history per docs).

Answers SHALL reflect callmessage behavior (e.g., cooldown, MMS images, beta notice) and SHALL NOT describe Google Calendar sync.

#### Scenario: Permission FAQ for auto-reply

- **WHEN** the user reads the permissions FAQ entry
- **THEN** the answer mentions phone/SMS-related permissions needed for background missed-call detection and sending, not calendar permissions

### Requirement: Site chrome and navigation

The header SHALL show the callmessage app name and logo (or placeholder asset), sticky navigation anchors to `#features`, `#install`, and `#faq`, and a link to the site home under the callmessage base path.

The footer SHALL match the callmemo distribution footer pattern (operator/contact links updated for callmessage where configured).

#### Scenario: In-page navigation

- **WHEN** the user selects a header nav item on desktop or mobile menu
- **THEN** the viewport scrolls to the corresponding section on the same page

### Requirement: Coexistence with callmemo distribution

Deploying the callmessage site SHALL NOT change the URL, content, or download behavior of the existing `/callmemo-distribution/` site in the same repository deployment.

#### Scenario: Callmemo site still available

- **WHEN** a user navigates to `https://<pages-host>/callmemo-distribution/`
- **THEN** the callmemo landing and `callmemo-v*.apk` download behavior remain as before this change
