# CreatersDen Progress Report

**Status date:** 2026-09-22  
**Project phase:** All placeholder routes + deploy workflow built; ready to push, enable GitHub Pages, and go live with home page presentable and the rest honestly marked in-progress

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

### 8. Publish-priority milestone: placeholder routes + deploy workflow (this session)

- Client confirmed: no hard deadline, but wants a published link soon with the home page presentable; other routes can honestly say "in progress" rather than 404. Explicit instruction not to compromise quality for speed.
- Resolved the three remaining `PROJECT.md` blocking items: content owner/technical level (client will maintain via this GitHub repo directly), Feel adjectives (kept as proposed, client agreed), deadline (recorded as above).
- Built `ComingSoon.astro` (shared, on-brand placeholder component) and used it for `/work/`, `/services/`, `/process/`, `/estimate/`, `/about/`, `/contact/`, plus a proper custom `404.astro` — all using real BaseLayout chrome (nav/footer/skip-link/meta) so nothing feels broken, and none fabricate contact details or content.
- Added `.github/workflows/deploy.yml` using Astro's official `withastro/action@v2` + `actions/deploy-pages@v4` pattern, verified against current docs.
- Production build verified clean: all 8 pages (404 + 7 routes) build with no errors; base-aware links confirmed correct in output HTML; visually re-rendered one placeholder route.

## What has not been completed

- Real content for all six placeholder routes, and the estimator's actual logic.
- Sitemap, structured data, and full Open Graph image handling.
- GitHub Pages hasn't been enabled in repository settings yet, and the Actions workflow hasn't run — this is the very next step once this commit is on `main`.
- No production images, reels, preview proxies, project metrics, testimonials, client logos, or team assets have been supplied (checklist sent to client 2026-09-22).
- No final email address, form endpoint, scheduling URL, privacy copy, or legal copy has been supplied.
- No custom domain has been purchased or configured.
- Mobile/responsive behavior still not confirmed in a real browser from Claude's own sandbox — but a Claude-in-Chrome browser session is now available and connected, which can close this gap once something is live to check.

## Immediate next work

1. **Add the missing metrics strip to the home page hero** — the approved mockup (`docs/design-previews/palette-comparison.html`) has a three-column band below the hero actions ("One brief / a coherent edit system", "Every ratio / 9:16 · 1:1 · 16:9", "One handoff / organized final masters"). This was not carried into the actual built home page — a real omission, flagged by the client 2026-09-22. Build it next session.
2. **Timeline dot centering — checked, not reproduced.** Client flagged the process-timeline dots as visually off-center from the vertical line, comparing against the mockup. Measured precisely on the live site (`getBoundingClientRect` on the timeline border vs. computed dot position): dot center is within 1px of the border's true center — effectively centered. Likely a stale cache or screenshot artifact on the client's end. Re-check with a hard refresh next session before assuming it's fixed; don't re-litigate the math, just get a fresh screenshot of the live site specifically.
3. Real content for all six placeholder routes, and the estimator's actual logic, as client assets arrive in `public/media/`.
4. Sitemap, structured data, and full Open Graph image handling.
5. Full `web-qa-audit` pass before calling any route launch-ready.
6. Connect a purchased custom domain later (client's stated plan: maintain on GitHub short-term, possible move to WordPress once a domain is bought).

## Repository publication completed

- Public repository: `https://github.com/Muhammad-Junaid-Nawaz/creatersden-site`
- Default branch: `main`
- Local remote name: `origin`
- Initial documentation commit: `621a682`
