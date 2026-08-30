# Proposal: fiba-web

## Intent

Fundación Bellas Artes Integra (FIBA) "El ADN del Arte" requires a fast-forward web platform delivery using the SDD / fast-forward planning approach. This proposal defines the `fiba-web` change to deliver an immediate MVP Nuxt 3 web presence with typed local content, design system foundations, and composable data layers — primed for incremental Strapi CMS integration and donation pipeline deployment in phases 2-4.

---

## Scope

### In Scope

- **Nuxt 3 application** with SSR/SSG, TypeScript strict mode, Tailwind CSS
- **Design system tokens** (colors, typography, components) per FIA 2.0 specification
- **Typed constants** (`constants/content.ts`) for organizational info, impact metrics, featured projects, and donation config
- **Composable data layers** (`useProjects.ts`, `useContact.ts`) abstracting content access for future Strapi API migration
- **Server API endpoint** `server/api/contact.post.ts` with Zod schema validation and email notification readiness
- **Landing page components** — Hero, About/Mission, Impact metrics, Featured Projects gallery, Donation info
- **Responsive layout** — Header, Navigation Drawer, Footer conforming to WCAG 2.1 AA
- **Meta tags** — Complete OpenGraph and Twitter Card metadata (lang: es, theme-color: #3D0C11)
- **Deployment** — Vercel with automatic CI/CD and edge SSR

### Out of Scope (Future Phases)

- Strapi v4 CMS integration (Phase 2)
- Donation & payment gateway integration (Phase 3)
- Art catalog / tienda integrada (Phase 4)
- Multi-idioma / i18n support (Phase 2 extension)
- Custom payment pasarelas beyond Yappy/Stripe setup

---

## Capabilities

### New Capabilities

| Capability | Description |
|---|---|
| `fiba-design-system` | Visual foundation: burgundy/amber/obsidian tokens, typography scale, WCAG 2.1 AA buttons/cards/modals, responsive navigation |
| `fiba-landing-mvp` | Institutional landing page: Hero, About/Mission, Impact metrics counter, Featured Projects gallery, Donation info cards/modal |
| `fiba-content-api` | Local typed content data layer + server-side contact API (`/api/contact`) with Zod validation and structured error handling |

### Modified Capabilities

| Capability | Change |
|---|---|
| None (initial platform milestone) | — |

---

## Approach — Fast-Forward (SDD / fiba-ff)

1. **Initialize** Nuxt 3 app with TypeScript strict mode and Tailwind CSS — `npx nuxi@latest init fiba-web .` (or `nuxi generate` in existing repo)
2. **Design System** — Define CSS tokens in `assets/css/tokens.css` (burgundy `#3D0C11`, amber `#CA6702`, obsidian `#001219`, warm ivory `#FDFBF7`); typography: Cinzel + Domine + Cormorant Garamond + Plus Jakarta Sans
3. **Typed Constants** — `constants/content.ts` already exists with `OrganizationInfo`, `ImpactMetric`, `Project`, `DonationDetails` — reuse and extend as single source of truth
4. **Composable Abstraction** — Create `composables/useProjects.ts`, `composables/useContact.ts` that read from `constants/content.ts`; mirror Strapi API schema for future drop-in replacement
5. **Landing Page Components** — Build `pages/index.vue` (or `components/Hero.vue`, `About.vue`, `Metrics.vue`, `ProjectsGrid.vue`, `Donation.vue`) using Nuxt 3 `<NuxtPage>` / `<ClientOnly>` as needed
6. **Server API** — Create `server/api/contact.post.ts` using H3 + Zod: validate name/email/message, honeypot check, prepare Resend transactional email; return `{ success: true }` or structured errors
7. **Meta Configuration** — Nuxt 3 `nuxt.config.ts` already defines `es` lang and full OG/Twitter metadata; ensure `app.head.title` template is consistent
8. **Deploy to Vercel** — `vercel` or `vercel deploy` with environment variables from `.env.example` (RESEND_API_KEY, etc.)

Each phase follows the same fast-forward pattern: implement → verify → document → hand off to next phase.

---

## Affected Areas

| Area | Change |
|---|---|
| `nuxt.config.ts` | Confirm SSR, Tailwind, meta tags (es lang, OG, Twitter, theme-color) |
| `constants/content.ts` | Existing — reuse; may extend with new fields for future phases |
| `composables/useProjects.ts` | New — typed pull from constants, mirror Strapi schema |
| `composables/useContact.ts` | New — contact form state + validation mirroring `server/api/contact.post.ts` |
| `pages/index.vue` (or components) | New — landing page layout with Hero, About, Metrics, ProjectsGrid, Donation |
| `server/api/contact.post.ts` | New — Zod-validated POST endpoint + email notification readiness |
| `assets/css/tokens.css` | New — CSS custom properties for design tokens (colors, typography) |
| `tailwind.config.ts` | Existing — extend if token palette added |
| `public/` | Assets: `/images/og-fiba-cover.svg`, `/images/logo-fiba.svg` |

---

## Risks & Mitigations

| Risk | Mitigation |
|---|---|
| **Content-hardcoding coupling** — UI tightly coupled to static `constants/content.ts` | Abstract content access through composables (`useProjects`, `useContact`) that mirror future Strapi API schemas; swap implementation without component changes |
| **Spam on `/api/contact`** | Strict Zod schema validation + honeypot field + rate limiting; return 403 on validation failure |
| **Design token drift** — Tokens not consistent with brand guidelines | Define all tokens in single `tokens.css`; reference via CSS custom properties; WCAG 2.1 AA validation on every component |
| **Vercel deployment failure** — Missing env vars or build config | Test `npm run build` locally; ensure `.env.example` has all required vars (RESEND_API_KEY, etc.) before deploy |
| **SEO regressions** — Missing or incorrect meta tags | Lighthouse/PageSpeed CI on every PR; snapshot OG/Twitter metadata in automated tests |

---

## Rollback Plan

1. **Git rollback** — `git reset --hard HEAD~1` to revert last commit; `git push --force` if needed
2. **Nuxt rebuild** — Delete `.nuxt/` and run `npm run dev` to regenerate; or `vercel rollback` to previous deployment
3. **API endpoint removal** — Delete `server/api/contact.post.ts`; revert any `nuxt.config.ts` changes
4. **Design token revert** — Restore `assets/css/tokens.css` from git; `npm run rebuild` or `vercel redeploy`
5. **Composable removal** — Delete `composables/useProjects.ts` and `composables/useContact.ts`
6. **Component removal** — Remove landing page components (`Hero.vue`, `About.vue`, `Metrics.vue`, `ProjectsGrid.vue`, `Donation.vue`) or revert `pages/index.vue`
7. **Verification** — Run `npm run build && npx nuxi typecheck` to confirm no compile errors after rollback

Rollback is expected within 15 minutes of decision; all changes are contained within the Nuxt 3 project boundary with no external service dependencies at this stage.

---

## Dependencies

| Dependency | Status | Notes |
|---|---|---|
| Nuxt 3 framework | ✅ Available | `^3.12.0` or latest; `nuxi` CLI available |
| Vue 3 + TypeScript | ✅ Available | Strict mode enabled in `tsconfig.json` |
| Tailwind CSS | ✅ Available | Configured in `nuxt.config.ts` and `tailwind.config.ts` |
| Zod (for schema validation) | ✅ Available | `npm install zod h3` — server API dependency |
| Resend (transactional email) | ⚠️ Future | API key in `.env.example`; implemented as readiness hook only in Phase 1 |
| Strapi v4 CMS | 🗓️ Phase 2 | Not included — composables designed for future API drop-in |
| Yappy/Stripe payment gateways | 🗓️ Phase 3 | Not included — design tokens and donation info cards laid groundwork |
| Vercel deployment | ✅ Available | CI/CD configured; environment variables from `.env.example` |

---

## Success Criteria

- [ ] Nuxt 3 app builds successfully: `npm run build` passes with zero TypeScript errors
- [ ] Lighthouse Performance score >= 90 on `http://localhost:3000` (mobile + desktop)
- [ ] All WCAG 2.1 AA contrast checks pass for design tokens (burgundy `#3D0C11` on warm ivory `#FDFBF7`)
- [ ] Landing page renders with all required sections: Hero, About/Mission, Impact metrics, Featured Projects gallery, Donation info
- [ ] `/api/contact` POST endpoint validates with Zod schema and returns `{ success: true }` on valid payload
- [ ] Meta tags render correctly: `lang="es"`, OpenGraph (title, description, image, locale), Twitter Cards (title, description, image, card type)
- [ ] Deployment to Vercel succeeds: `vercel deploy` completes without errors
- [ ] `constants/content.ts` is the single source of truth; all composables read from it without hardcoded strings
- [ ] Rollback verified: `git reset --hard HEAD~1` + `npm run build` succeeds without errors

✅ **All criteria must be met before the `fiba-web` change is considered closed.**