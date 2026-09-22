# Project: CreatersDen

**Status:** All Brief/Constraints blocking items resolved. Home page built; current milestone is a published GitHub Pages link with home presentable and remaining routes as honest "under construction" pages (client's stated priority — no fixed deadline, but wants a live link soon without compromising quality)
**Last updated:** 2026-09-22

## Brief
- **What is this, concretely:** A premium video-editing and creative post-production agency serving brands and creators. The site must demonstrate editorial craft, communicate commercial reliability, and convert qualified prospects into project inquiries.
- **Audience (who visits, what were they doing 5 min before):** DTC brand teams, tech and SaaS marketers, content creators, and advertising agencies comparing production partners, reviewing reels and case studies, or trying to estimate scope and turnaround.
- **Primary action (the one thing a visitor should do):** **Proposal awaiting confirmation:** complete the scope estimator and continue into a pre-populated project inquiry. Secondary action: view relevant work and case studies.
- **Pages/sections needed (rough shape, not final sitemap):** Home; Work index; individual case studies; Services; Process; Estimate; About; Contact.
- **Feel (3 adjectives, each contrasted against something specific):** Cinematic rather than decorative; exacting rather than corporate; energetic rather than noisy. Confirmed 2026-09-22.

## Constraints
- **Content owner after launch (and technical level):** Muhammad Junaid Nawaz (repository owner) maintains the site directly via this GitHub repository, using git. Comfortable following a guided git workflow. Confirmed 2026-09-22.
- **Track decision (static/WordPress) and why:** Static, explicitly confirmed by the client. The project will live in the client's GitHub repository and deploy to Cloudflare. **Note (2026-09-22):** client intends to maintain the static site directly via GitHub until a dedicated domain is purchased, at which point a move to WordPress is possible but not yet decided. Not a track change — static remains the build target — but keep content/copy reasonably portable (avoid Astro-specific structures that would make a future WordPress migration harder than it needs to be) where doing so costs nothing now.
- **Page architecture (multi-page/single-page scroll) and why:** Multi-page, explicitly confirmed by the client. Separate service, work, process, estimate, about, contact, and case-study URLs support substantial content, sharing, and search visibility.
- **Hard requirements (payments, bookings, members area, languages, blog):** Filterable work gallery; short hover-scrub proxies; full video playback; case-study pages; before/after comparison slider; four-step scope/turnaround estimator; contact form populated by estimator results; bot protection; optional Cal.com/Calendly scheduling; per-page SEO and social metadata; sitemap; structured data; responsive and accessible interactions.
- **Existing brand (logo/colors/fonts) or creating new:** **Blocking - client asset inventory required.** No approved logo, palette, type system, or brand guide was supplied with the specification.
- **Deadline:** No hard date. Client asked for a published link within the next week with the home page presentable; remaining routes may show "under construction" rather than errors in the meantime. Explicit instruction: do not compromise quality for speed. Confirmed 2026-09-22.
- **Budget for paid tools:** Zero-cost initial launch. GitHub Pages is the confirmed temporary hosting route. Cloudflare Stream is deferred because it is paid; the initial media strategy must use optimized static previews and/or separately hosted portfolio embeds.
- **Repository:** Public repository: `https://github.com/Muhammad-Junaid-Nawaz/creatersden-site`; connected locally as `origin` with default branch `main`. The supplied `alshedivat/al-folio` commit belongs to a third party and is not this project's repository.

## Subject vocabulary
- Timeline, playhead, cut, trim, marker, frame, timecode, bins, proxies, scopes, waveform, grade, conform, master, aspect ratio, captions, sound mix.
- Visual source material should come from real edit interfaces, frame sequences, grading scopes, project stills, and delivery formats - not generic camera crews or abstract gradient blobs.

## Content inventory
- **Available:** Detailed technical/project specification and four live reference sites.
- **Needed before final design/build:** Logo files; approved brand colors and fonts if they exist; showreel; project thumbnails/posters; 4-second preview proxies; full-length portfolio video locations/IDs; before/after image pairs; case-study copy and measurable outcomes; client logos with permission; testimonials; team photography/bios; contact destination; scheduling URL; social accounts; privacy/terms text.
- **Placeholder policy:** Until real assets arrive, use clearly labeled neutral editorial frames and content fixtures that cannot be mistaken for client work. Do not use generic stock-team photography or invented performance claims.

## Reference sites
- https://myriad.video/ - liked/reference - theatrical restraint, bold typography, audience-first positioning, and polished interaction.
- https://www.lemonlight.com/ - liked/reference - explicit service breakdown, trust proof, portfolio density, and clear conversion paths.
- https://sandwich.co/ - liked/reference - distinctive human voice, memorable identity, and simple explanations of complex creative work.
- https://vidico.com/ - liked/reference - estimate-led conversion, outcome-focused case studies, and clear segmentation for tech/DTC audiences.

---

## Design direction
- **Chosen structure:** Direction D, The Den - an editorial timeline system centered on post-production craft, process, and measurable outcomes.
- **Typography system:** Preserve the varied typographic hierarchy from the original direction while using Direction A's forceful, tightly spaced uppercase grotesk for major campaign statements. Use an editorial serif selectively for story-led section openings and case-study moments, a highly readable sans-serif for navigation/body/UI copy, and monospace for timecode, technical metadata, and estimator output. Do not use the display treatment indiscriminately in every section. Exact licensed/self-hostable faces will be chosen during build and subset for performance.
- **Palette:** Cinder and Ember approved. Core roles: cutting-room graphite `#141519`; projector white `#F3EFE6`; ember `#F06A45`; steel blue `#7FA8BC`; restrained brass `#D0A64B`. Main pairings pass WCAG AA for normal text (projector white 15.9:1, ember 5.95:1, steel 7.15:1, and brass 8.03:1 against graphite).
- **Layout:** Large, blunt statement on the left; process timeline/timecode on the right; project proof and estimator CTAs remain prominent throughout the multipage system.
- **Signature element:** A disciplined playhead/timeline motif with meaningful stage markers, timecode, edit-state language, and aspect-ratio frames.
- **Motion policy:** Motion should behave like editorial actions - cuts, scrubs, playhead travel, frame reveals, and before/after wipes. No uniform fade-up treatment. Reduced-motion mode removes continuous and scroll-linked movement.
- **Defaults deliberately rejected:** Purple/blue gradients; glass cards; floating blobs; neon glow borders; one soft geometric font everywhere; equal-weight card grids; generic creator stock photos; universal fade-up animations; vague transformation copy.
- **Draft voice:** Precise, direct, craft-aware, and commercially literate. Avoid "unleash," "supercharge," "transform your content," and empty claims of cinematic quality.
- **Approval:** Direction D structure + selected Direction A display typography + the original direction's multi-role type hierarchy + Cinder and Ember palette.

## Build
- **Track:** Static, multipage.
- **Local project folder:** `D:\Chat GPT Codex\Web Developer\creatersden-site`
- **Initial hosting:** GitHub Pages through GitHub Actions. On GitHub Free, the repository must be public. A custom domain can be attached later without rebuilding the site.
- **Server-side limitation:** GitHub Pages cannot run a serverless contact handler. The estimator can remain fully client-side, but submissions require either a third-party form endpoint, a temporary mailto flow, or a later move to Cloudflare Workers/Pages Functions.
- **Framework:** Astro 7.3 scaffolded (minimal template, TypeScript strict). `astro.config.mjs` sets `site: 'https://muhammad-junaid-nawaz.github.io'` and `base: '/creatersden-site'` per Astro's current GitHub Pages guide; `public/.nojekyll` added so GitHub Pages doesn't Jekyll-process the `_astro/` asset folder.
- **Fonts:** Self-hosted via `@fontsource`, latin subset only (not the full Unicode range — cut the font payload from 80+ files to 20). Archivo (700/900) for display grotesk, Fraunces (500/600/400-italic) for editorial serif, IBM Plex Sans (400/500/600) for readable sans, IBM Plex Mono (400/500) for monospace/timecode. All SIL OFL 1.1 — confirmed by reading each package's LICENSE file directly, not assumed. No exact display/serif/sans/mono family had been finally approved in PROJECT.md; this is a build-time choice per instructions.md, deliberately distinct from each reference site's own fonts (avoided Inter/DM Sans/Proxima Nova/Averta).
- **Derived tokens (not in the original five-role palette, added because the build needed them — see `src/styles/tokens.css` comment):** `--color-surface` / `--color-surface-inverse` (elevated card backgrounds, one shade off the base/inverse background) and `--color-line` / `--color-line-inverse` (low-opacity dividers). Also added a light-surface inversion (`[data-surface="light"]`) for HANDOFF's "projector white as... light editorial surfaces" note, not yet used on any page.
- **Structural shell built:** `src/layouts/BaseLayout.astro` (skip link, landmarks, per-page title/description/canonical/OG/Twitter meta), `src/components/SiteHeader.astro` and `SiteFooter.astro` (base-aware links throughout, footer deliberately has no contact/social links since none exist yet). Sitemap, structured data, and full OG image handling are not yet implemented — deferred until more routes exist.
- **First route built (representative page):** `/` (home) — hero with the draft headline from `docs/design-previews/palette-comparison.html` (marked "Draft copy" on-page, since PROJECT.md > Brief > Feel is still unconfirmed and no hero headline was formally locked under Design direction), the timeline signature element, an honestly-labeled "Case study pending" work preview, and an estimator CTA band. No fabricated portfolio content, metrics, or contact details.
- **Remaining routes not yet built:** `/work/`, two case-study templates, `/services/`, `/process/`, `/estimate/` (including the actual four-step estimator logic), `/about/`, `/contact/`, custom 404.
- **Visual verification:** Confirmed by build (no errors/warnings) and by rendering the home page at 1440px width via `wkhtmltoimage` (an old bundled-Qt WebKit — the only rendering tool available in this environment; no real Chromium/Firefox/Safari could be installed, apt only offers snap-wrapped transitional packages that don't run headless here). Caught and fixed two real bugs this way: a missing-slash favicon href, and the timeline marker dot mispositioned over the timecode text (root cause unconfirmed — likely this renderer's handling of nested `calc(var())` — fixed by using a literal offset value instead). This renderer also does not support flexbox `gap` (only CSS Grid `gap`) and cannot honor a strict mobile viewport width (`--disable-smart-width` is unsupported: "not support using unpatched qt"), so the nav-link spacing and all mobile/responsive behavior are implemented per standard, well-supported CSS but **not yet confirmed in a real browser** — recommended before this milestone is called fully done.

## QA
<!-- Findings only; fixes follow in a separate pass. -->

## Publish
<!-- GitHub-connected Cloudflare deployment. Credentials and authenticated dashboard actions remain with the client. -->
