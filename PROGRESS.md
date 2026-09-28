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

### 9. Hero showreel frame — replaces process timeline (2026-09-28, local changes only, not yet committed)

- Client-approved spec: replace the hero's right-hand process timeline with a prominent 16:9 showreel frame, keep headline/copy/CTA on the left, retain the three-item benefits strip.
- Removed the `stages` data array and `<ol class="timeline">` markup plus all `.timeline*` CSS from `src/pages/index.astro`. That content isn't lost — it's a natural fit for the future `/process/` route and remains in git history (pre-change commit `0c4271e`).
- Added `src/components/ShowreelFrame.astro`: a 16:9 frame with near-square corners (`--radius-sm`), a subtle border, restrained ember viewfinder-corner marks (not a play icon), and a small monospace "Studio showreel" label.
- **Media state check performed:** searched the whole repo (`public/`, no `.mp4`/`.webm`/`.mov` anywhere) — no showreel footage or poster stills have been supplied yet. Per the client's own instruction for this state, the frame renders an honest static placeholder ("Showreel pending / Real project footage to come.") with no functioning-looking play control, and is correctly excluded from the Tab order (verified live — Tab moves from "See selected work" straight to the next section's link, nothing focuses on the placeholder).
- Deliberately did **not** build the accessible video-modal system (muted inline preview, full-screen player, Escape-to-close, focus restoration, sound-after-interaction) in this pass — there's no real video to wire it to yet, and building that interaction with nothing to test against would be untestable dead code. Flagged below as the next step once real media arrives.
- Rebalanced `.hero__grid` from `1.2fr 0.8fr` to `1fr 1fr` so the video reads as substantial, and reduced `.hero` top padding from `--space-2xl` to `--space-lg` so the primary CTA sits higher in the viewport.
- Verified with a real Chromium (Playwright, headless) at exactly 390px, 768px, 1024px, and 1440px: headline wraps deliberately, CTA visible early, video stays within viewport with no horizontal overflow, mobile stacking order is headline → copy → CTA → video → benefits strip (confirmed via full-page screenshot, not just element-clipped). Keyboard Tab order confirmed correct. `prefers-reduced-motion: reduce` confirmed harmless (frame is fully static — nothing to gate).
- Production build (`npm run build`) succeeds with no errors.
- **Not committed, not pushed, not deployed** — client's explicit instruction for this task was "Local changes only. Do not commit, push, deploy, trigger GitHub workflows, or modify GitHub settings without my explicit instruction." Changes exist only as uncommitted working-tree edits in the local clone plus this new untracked component file, pending the client's review and sign-off before any git action.

### 10. Real media supplied and wired: showreel, logo, favicon (2026-09-28, local changes only, not yet committed)

- Client supplied real assets via the linked-computer device bridge into `D:\CLAUDE\creatersden-site\public\media\` — logo, showreel footage, team headshots/bios, and work stills — with the instruction to inspect, embed what's ready, and stop short of pushing.
- **Showreel (`public/media/misc/Hero Index video.mp4`, 1920×1080, 53s, 245MB source, not committed as-is):** confirmed 60fps/H.264/36.7Mbps — far too heavy to ship. Pulled the poster frame at exactly 00:00:22 per the client's instruction (verified pixel-identical to the reference screenshot they sent), then produced three web-delivery derivatives with `ffmpeg`, all committed under `public/media/showreel/`:
  - `poster.jpg` / `poster.webp` — the 22s frame, 1600px wide (132KB / 63KB)
  - `preview.mp4` — muted 8s loop (15s–23s), 960px wide, no audio track (~1MB)
  - `full.mp4` — the complete 53s reel, still 1920×1080, re-encoded to ~23MB (from 245MB)
  - The original 245MB source file was **not** committed — it only exists in the client's own folder and this session's scratch space, not in git.
- **`ShowreelFrame.astro` rebuilt** (replacing the honest-placeholder version from §9) into the full interactive component the original spec asked for: poster shown by default; if the visitor hasn't set `prefers-reduced-motion` and isn't on a save-data connection, the muted preview autoplays with a visible pause control; "Play showreel" opens the full video in an accessible dialog — sound enabled only because that click is the interaction gesture, Escape and a close button both dismiss it, focus moves to the dialog on open and restores to the trigger button on close, and Tab is trapped inside the dialog while open. All verified live with headless Chromium: tab order is correct (nothing extraneous gets focus), `prefers-reduced-motion: reduce` shows the static poster only with the preview and pause control both absent, and the modal opens unmuted/playing with focus on its close button.
- **Logo — naming discrepancy found and resolved live:** the first logo file the client supplied read "**Creator's Den**" (apostrophe) in both the SVG's `aria-label` and the visible wordmark, conflicting with "CreatersDen" used everywhere else (repo name, live URL path, all copy, meta tags). Flagged it rather than guessing; the client corrected and re-supplied the logo mid-session with the wordmark fixed to "CREATERSDEN" (`public/media/logo/creatersden-cleaned.svg` / `creatersden-preview.png`) — matches site-wide naming now, no further action needed there.
- **Logo wired in:** the supplied lockup has graphite wordmark text on a white background rect, which isn't legible on our dark graphite chrome, so rather than repaint the client's actual wordmark colors, extracted just the colorful emblem (the hexagonal play-mark, all five gradients preserved) into a standalone `public/media/logo/creatersden-icon.svg` with a tightened viewBox and no background rect. That icon now sits beside the existing text-based "CREATERSDEN" wordmark (already styled correctly in our own type system) in both `SiteHeader.astro` and `SiteFooter.astro`. The full-color lockup PNG/SVG as supplied is also in the repo for any future light-surface use, just not wired in yet.
- **Favicon replaced:** the previous `favicon.svg`/`favicon.ico` were a generic placeholder glyph (unrelated to the client's brand) from early scaffolding. Rendered the new emblem SVG to a transparent PNG via headless Chromium (no `rsvg-convert` available in this sandbox) and rebuilt both `favicon.svg` (emblem, cropped viewBox) and `favicon.ico` (proper multi-res 16/32/48px .ico via ImageMagick) from the client's real logo.
- **Other supplied assets inventoried and copied into `public/media/` as source files, but deliberately not yet wired into any page** (this was a large asset drop; wiring these means new page-content decisions the client hasn't been asked about yet — see Immediate next work):
  - `public/media/team/` — real headshots for Hamza Babar and Urooj Zafar (Urooj's as a designed PDF one-pager, not a plain photo), plus real bios/service lists in `.docx`/`.pdf` for three editors: Humza Babar, Syed Yasher Ali, and Urooj Zafar. **No photo was supplied for Yasher Ali.** Note the file is named "Hamza Babar" but his own bio doc spells it "Humza Babar" — flagged, not resolved, client should confirm the correct spelling before this goes on the About page.
  - `public/media/work/` — six real project still images (`1.PNG`–`6.PNG`, ~3.3MB total, copied in) plus six real project video files in the client's own folder (`1.mp4`, `final (1).mp4`, `Groovetie.mp4`, `launching a brand_1.mp4`, `Real Estate 2.mp4`, `shauny_weise.mp4`, totaling ~425MB) that were **not** staged or copied into this repo this session — out of scope for today's task, and each would need the same "find the real moment, transcode for web" treatment the showreel got before going anywhere near the `/work/` page.
- Production build (`npm run build`) succeeds with no errors. Total new committed media: ~33MB (`public/media/`), reasonable for one commit.
- **Not committed, not pushed, not deployed** — same explicit instruction as §9 ("local changes only... without my explicit instruction"), reaffirmed this session for the media work specifically ("when finalized I can push it online with your guidance"). Everything above exists only as uncommitted working-tree changes plus new untracked files, pending the client's review.

## What has not been completed

- The About and Work pages themselves — real content now exists for both (team bios/headshots, project stills) but hasn't been built into page copy/layout; that's a content-and-design decision, not just an asset-wiring one (see §10 and Immediate next work).
- The six real work *videos* the client supplied (~425MB total) haven't been transcoded or brought into the repo yet — same treatment the showreel got, just not done yet.
- Sitemap, structured data, and full Open Graph image handling.
- GitHub Pages hasn't been enabled in repository settings yet, and the Actions workflow hasn't run — next step once a commit is authorized and pushed to `main`.
- No final email address, form endpoint, scheduling URL, privacy copy, or legal copy has been supplied.
- No custom domain has been purchased or configured.
- Two small unresolved naming/content questions from §10: "Hamza" vs. "Humza" Babar spelling, and no headshot supplied for Yasher Ali.

## Immediate next work

1. **Get client sign-off on everything in §9 and §10, then commit and push.** Local-only per explicit instruction — waiting on the client's go-ahead before any git action.
2. **Build the About page** using the real team bios/headshots now in `public/media/team/` — needs the Hamza/Humza spelling confirmed and a decision on how to handle Yasher Ali's missing photo (placeholder avatar vs. text-only listing) before writing it.
3. **Build the Work page and case studies** using the six real stills in `public/media/work/` — the six work videos still need pulling from the client's folder, picking representative frames/clips, and the same transcode treatment the showreel got, before they can go on the page.
4. The estimator's actual logic (still no real pricing rules from the client).
5. Sitemap, structured data, and full Open Graph image handling.
6. Full `web-qa-audit` pass before calling any route launch-ready.
7. Connect a purchased custom domain later (client's stated plan: maintain on GitHub short-term, possible move to WordPress once a domain is bought).

## Repository publication completed

- Public repository: `https://github.com/Muhammad-Junaid-Nawaz/creatersden-site`
- Default branch: `main`
- Local remote name: `origin`
- Initial documentation commit: `621a682`
