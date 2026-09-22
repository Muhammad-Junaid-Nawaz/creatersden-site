# CreatersDen Progress Report

**Status date:** 2026-09-22  
**Project phase:** Astro scaffold, design tokens, structural shell, and home page built; six routes + estimator + QA + deploy remain

## What has been completed

### 1. Source material reviewed

- Read the supplied CreatersDen website specification in full.
- Read the supplied website-delivery skills and supporting instructions.
- Extracted the required audience, page types, interactions, publishing constraints, and content dependencies.
- Kept document content subordinate to the client's direct instructions.

### 2. Reference sites reviewed

The following sites were examined as references, not templates:

- Myriad — theatrical restraint and confident display scale
- Lemonlight — service clarity, proof, and conversion paths
- Sandwich — distinctive, human voice
- Vidico — estimate-led conversion and outcome-oriented case studies

The detailed findings and non-copying guardrails are in [`docs/REFERENCES.md`](docs/REFERENCES.md).

### 3. Design directions produced

- Created a browser-based comparison of four design directions.
- Created a separate comparison of the original neon-lime palette and the alternative Cinder & Ember palette.
- The client selected a hybrid direction:
  - Direction D's editorial timeline structure
  - Direction A's large, tightly set uppercase display typography
  - The first concept's varied typography by section
  - Cinder & Ember as the approved palette

Preview artifacts are retained in [`docs/design-previews`](docs/design-previews/).

### 4. Design system decisions recorded

- Approved color values and text-contrast ratios were calculated.
- Typography roles were defined without committing to unlicensed commercial font files.
- Motion was defined as editorial behavior: cuts, scrubs, playhead movement, frame reveals, and wipes.
- Generic agency defaults were explicitly rejected: neon glow borders, purple/blue gradients, glass cards, stock creator imagery, and universal fade-up animation.

### 5. Hosting route clarified

- GitHub Pages is the selected zero-cost initial host.
- A public repository is required for GitHub Pages on GitHub Free.
- A custom domain can be connected later without rebuilding the site.
- GitHub Pages is static, so the estimator can work in-browser but a production contact form will need a third-party endpoint or a later serverless solution.

### 6. GitHub ownership checked

- The signed-in GitHub account was identified as `Muhammad-Junaid-Nawaz`.
- Existing repositories visible at the time were `lab-scanner`, `stelz-lab-kiosk`, and `portfolio`.
- No CreatersDen repository existed.
- The supplied `alshedivat/al-folio` commit is owned by a third party and must not be altered or treated as the client's repository.

### 7. Astro scaffold, tokens, and home page (this session)

- Scaffolded Astro 7.3 (minimal template, TypeScript strict), merged around the existing `AGENTS.md`/`README.md` rather than overwriting them.
- Configured `astro.config.mjs` (`site`/`base`) and added `public/.nojekyll`, both verified against Astro's current GitHub Pages docs before writing.
- Selected and installed four self-hosted, SIL-OFL-licensed font families for the four approved typography roles (Archivo, Fraunces, IBM Plex Sans, IBM Plex Mono), deliberately distinct from each reference site's own fonts. Latin-only subset (cut 80+ font files to 20).
- Built design tokens (`src/styles/tokens.css`) from the approved Cinder & Ember palette, with two derived tokens (surface, line/divider) flagged rather than invented silently.
- Built the structural shell: `BaseLayout.astro` (skip link, landmarks, per-page meta), `SiteHeader.astro`, `SiteFooter.astro` — all internal links base-aware for the `/creatersden-site/` GitHub Pages path.
- Built the home page as the representative route: draft hero copy (carried over from `docs/design-previews/palette-comparison.html`, marked draft on-page), the timeline signature element, an honestly-labeled work-preview section, and an estimator CTA.
- Production build succeeds with no errors or warnings.
- Visually rendered the home page and **caught two real bugs**: a missing-slash favicon href, and a mispositioned timeline marker (fixed by simplifying a calc() to a literal value).
- **Verification gap, flagged rather than hidden:** the only rendering tool available in this environment is an old bundled-Qt build of `wkhtmltoimage` (no real Chromium/Firefox/Safari could be installed — apt only has snap-wrapped transitional packages that don't run headless here). It doesn't support flexbox `gap` and cannot honor a strict mobile viewport (`--disable-smart-width` unsupported). Desktop-width rendering is reasonably trustworthy; mobile/responsive behavior is implemented per standard CSS but not yet confirmed in a real browser.

## What has not been completed

- Six of eight routes (`/work/`, two case-study templates, `/services/`, `/process/`, `/estimate/`, `/about/`, `/contact/`) and the custom 404 page.
- The four-step estimator's actual logic (only a CTA linking to `/estimate/` exists so far).
- Sitemap, structured data, and full Open Graph image handling.
- No production images, reels, preview proxies, project metrics, testimonials, client logos, or team assets have been supplied.
- No final email address, form endpoint, scheduling URL, privacy copy, or legal copy has been supplied.
- Nothing has been pushed to GitHub yet this session — Claude cannot push (no repository credentials, and per its own operating rules wouldn't handle them if offered); the working tree is committed locally only, pending your push.
- No GitHub Pages deployment has been run; no custom domain purchased or configured.
- Mobile/responsive behavior is implemented but not yet confirmed in a real browser (see verification gap above) — worth a quick manual check before this milestone is considered fully done.

## Immediate next work

1. Build the remaining six routes and the two case-study templates.
2. Implement the client-side estimator without inventing prices.
3. Run responsive, keyboard, contrast, link, metadata, and build QA (`web-qa-audit`) — including a real-browser mobile check to close the gap noted above.
4. Add sitemap, structured data, and full per-page OG metadata.
5. Add the GitHub Pages Actions workflow, then enable Pages.
6. Connect a purchased custom domain later.

## Repository publication completed

- Public repository: `https://github.com/Muhammad-Junaid-Nawaz/creatersden-site`
- Default branch: `main`
- Local remote name: `origin`
- Initial documentation commit: `621a682`
