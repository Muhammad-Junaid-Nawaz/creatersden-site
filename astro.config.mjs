// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// GitHub Pages project-page config: https://docs.astro.build/en/guides/deploy/github/
// `base` must prefix every internal link — use `import.meta.env.BASE_URL` rather than
// hardcoding '/creatersden-site/' so this stays correct if the repo is ever renamed.
export default defineConfig({
	site: 'https://muhammad-junaid-nawaz.github.io',
	base: '/creatersden-site',
});
