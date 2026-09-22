# CreatersDen Website Handoff

Read this file before continuing the project. It contains the minimum complete state needed to resume without repeating discovery.

## Project objective

Design and build a premium, static, multipage website for CreatersDen, a video-editing and creative post-production agency. The site should communicate editorial craft and commercial reliability, display relevant work, and convert qualified prospects through a scope estimator and inquiry flow.

## Audience

- DTC brand teams
- Tech and SaaS marketing teams
- Content creators
- Advertising and creative agencies seeking a post-production partner

## Approved information architecture

- Home
- Work index with filters
- Individual case studies
- Services
- Process
- Estimate
- About
- Contact
- Custom 404 page

## Approved visual direction

### Core concept

Use **Direction D — The Den** as the structural concept: a refined editorial timeline inspired by post-production craft without literally imitating editing software.

Use **Direction A's typography treatment** for major statements: forceful, tightly spaced, uppercase grotesk headlines. Preserve the first concept's varied typography by assigning different type roles to different kinds of content.

### Typography roles

1. **Display grotesk:** Major campaign statements, hero copy, section-number transitions, and high-impact calls to action. Uppercase, tightly tracked, large scale.
2. **Editorial serif:** Story-led introductions, case-study narrative moments, pull quotes, and selective emotional contrast.
3. **Readable sans-serif:** Navigation, body copy, forms, labels, buttons, and service explanations.
4. **Monospace:** Timecodes, project metadata, estimator summaries, format labels, and technical delivery details.

Do not use a different font arbitrarily in every section. Variation must follow these semantic roles. Choose open-source or properly licensed, self-hostable faces during implementation and subset them for performance. No exact font family has been finally approved yet.

### Approved palette: Cinder & Ember

| Token | Hex | Intended role |
|---|---:|---|
| Cutting-room graphite | `#141519` | Primary background and dark surfaces |
| Projector white | `#F3EFE6` | Primary text and light editorial surfaces |
| Ember | `#F06A45` | Primary accent, selected states, high-priority CTA details |
| Steel blue | `#7FA8BC` | Secondary accent, technical/process information |
| Restrained brass | `#D0A64B` | Sparse highlight, awards/proof/delivery markers |

Verified contrast against graphite:

- Projector white: 15.9:1
- Ember: 5.95:1
- Steel blue: 7.15:1
- Brass: 8.03:1

Avoid making every accent equally prominent. Ember is the lead accent; steel and brass are supporting signals.

### Layout and signature behavior

- Pair a large, blunt statement with process timeline/timecode information.
- Use aspect-ratio frames and disciplined editorial grids.
- Keep project proof and the estimator visible across the site.
- Motion should feel like cuts, scrubs, playhead travel, frame reveals, and before/after wipes.
- Respect `prefers-reduced-motion`; remove continuous and scroll-linked movement in reduced-motion mode.

### Explicitly rejected defaults

- Neon lime as the primary brand color
- Purple/blue gradients
- Glassmorphism cards
- Floating blobs
- Neon glow borders
- One soft geometric font everywhere
- Equal-weight feature-card grids
- Generic creator or camera-crew stock photos
- Universal fade-up animations
- Vague phrases such as “unleash,” “supercharge,” or “transform your content”

## Content and asset policy

Do not fabricate client work, logos, testimonials, team members, pricing, performance metrics, awards, or contact information. Until authentic assets arrive, use clearly labeled neutral editorial frames such as “Project media pending” and “Case study content pending.” Placeholders must not be mistaken for real client work.

Assets still needed:

- Logo files and any existing brand guide
- Showreel
- Project thumbnails/posters
- Short preview proxies
- Full portfolio video locations or IDs
- Before/after image pairs
- Verified case-study copy and results
- Client logos with permission
- Testimonials
- Team biographies and photography
- Contact destination and scheduling URL
- Social links
- Privacy and terms copy

## Functional requirements

- Filterable Work gallery
- Short hover-scrub previews when real media exists
- Full video playback via accessible modal or case-study route
- Case-study pages
- Before/after comparison control
- Four-step scope and turnaround estimator
- Estimator summary carried into the inquiry flow
- Responsive, keyboard-accessible interactions
- Per-page titles, descriptions, canonical metadata, Open Graph metadata, sitemap, and structured data

The estimator must not invent monetary prices. It may classify scope, summarize selections, and offer a provisional turnaround band until the client approves pricing rules.

## Technical direction

- Static multipage build
- Astro is the selected leading framework
- Prefer semantic HTML, modern CSS, and small amounts of vanilla JavaScript
- Add dependencies only where they materially improve the result
- GitHub Pages through GitHub Actions for the initial free launch
- Use a repository-aware base path so project pages work at `/creatersden-site/`
- A custom domain may be attached later

GitHub Pages cannot process forms server-side. Use a temporary mail-app/project-brief flow or an approved third-party form endpoint; a later Cloudflare Worker/Pages Function is also possible.

## GitHub state

- Account: `Muhammad-Junaid-Nawaz`
- Intended repository name: `creatersden-site`
- Intended URL: `https://github.com/Muhammad-Junaid-Nawaz/creatersden-site`
- Visibility: public for free GitHub Pages hosting
- Remote status: **created, connected as `origin`, and synchronized on `main`**

Important: `https://github.com/alshedivat/al-folio/commit/ac7add47defd381e997251e5404f1ea177728ad3` is a third-party commit, not the client's repository.

## Source files in this folder

- `PROJECT.md` — living brief and decision log
- `PROGRESS.md` — factual completed/not-completed report
- `instructions.md` — mandatory operating instructions for another LLM
- `docs/REFERENCES.md` — reference-site analysis
- `docs/design-previews/design-directions.html` — initial direction comparison
- `docs/design-previews/palette-comparison.html` — palette comparison and selected Ember anchor

## Continuation definition of done

The first implementation milestone is complete only when the Astro site builds without errors, all listed routes exist, the approved visual system is implemented, interactions work with keyboard and reduced motion, placeholders are honest, and the result has been visually checked at desktop and mobile sizes. Deployment is a separate milestone after the production build and GitHub Pages workflow are ready.
