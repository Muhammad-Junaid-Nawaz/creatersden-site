# Project: CreatersDen

**Status:** Design direction approved; dedicated project folder, handoff documentation, and public GitHub repository created; ready for Astro setup
**Last updated:** 2026-09-22

## Brief
- **What is this, concretely:** A premium video-editing and creative post-production agency serving brands and creators. The site must demonstrate editorial craft, communicate commercial reliability, and convert qualified prospects into project inquiries.
- **Audience (who visits, what were they doing 5 min before):** DTC brand teams, tech and SaaS marketers, content creators, and advertising agencies comparing production partners, reviewing reels and case studies, or trying to estimate scope and turnaround.
- **Primary action (the one thing a visitor should do):** **Proposal awaiting confirmation:** complete the scope estimator and continue into a pre-populated project inquiry. Secondary action: view relevant work and case studies.
- **Pages/sections needed (rough shape, not final sitemap):** Home; Work index; individual case studies; Services; Process; Estimate; About; Contact.
- **Feel (3 adjectives, each contrasted against something specific):** **Blocking - client confirmation required.** Proposed starting point: cinematic rather than decorative; exacting rather than corporate; energetic rather than noisy.

## Constraints
- **Content owner after launch (and technical level):** **Blocking - not yet confirmed.** The specified Markdown/MDX and Git workflow assumes a technically comfortable maintainer.
- **Track decision (static/WordPress) and why:** Static, explicitly confirmed by the client. The project will live in the client's GitHub repository and deploy to Cloudflare.
- **Page architecture (multi-page/single-page scroll) and why:** Multi-page, explicitly confirmed by the client. Separate service, work, process, estimate, about, contact, and case-study URLs support substantial content, sharing, and search visibility.
- **Hard requirements (payments, bookings, members area, languages, blog):** Filterable work gallery; short hover-scrub proxies; full video playback; case-study pages; before/after comparison slider; four-step scope/turnaround estimator; contact form populated by estimator results; bot protection; optional Cal.com/Calendly scheduling; per-page SEO and social metadata; sitemap; structured data; responsive and accessible interactions.
- **Existing brand (logo/colors/fonts) or creating new:** **Blocking - client asset inventory required.** No approved logo, palette, type system, or brand guide was supplied with the specification.
- **Deadline:** **Not yet provided.**
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
- **Framework:** Astro is the leading candidate; current setup and deployment configuration will be verified against official documentation immediately before scaffolding.

## QA
<!-- Findings only; fixes follow in a separate pass. -->

## Publish
<!-- GitHub-connected Cloudflare deployment. Credentials and authenticated dashboard actions remain with the client. -->
