# Tasks: fiba-phase1-mvp

## Review Workload Forecast

- **Execution Mode**: Hybrid (Automated execution with human checkpoint review)
- **Delivery Strategy**: Exception-OK (Proceed autonomously through green phases; pause only on validation failures or ambiguity)
- **Change Scope**: Initial MVP Platform Implementation (`fiba-phase1-mvp`)
- **Capabilities Involved**:
  - `fiba-design-system`
  - `fiba-landing-mvp`
  - `fiba-content-api`

### Workload Summary Table

| Phase | Description | Capability | Tasks | Est. Complexity | Risk Level |
|---|---|---|:---:|:---:|:---:|
| **Phase 1** | Project Scaffolding & Nuxt 3 Engine Configuration | Foundation | 4 | Low | Low |
| **Phase 2** | Design Tokens & Reusable UI Primitives | `fiba-design-system` | 4 | Medium | Low |
| **Phase 3** | Layout Architecture & Responsive Navigation | `fiba-design-system` | 3 | Medium | Medium |
| **Phase 4** | Domain Types & Centralized Content Layer | `fiba-content-api` | 3 | Low | Low |
| **Phase 5** | Reactive Composables Layer | `fiba-content-api` | 4 | Medium | Low |
| **Phase 6** | Server-Side Contact API with Validation & Honeypot | `fiba-content-api` | 3 | Medium | Medium |
| **Phase 7** | Landing Page Institutional Sections | `fiba-landing-mvp` | 6 | High | Low |
| **Phase 8** | Page Assembly, Layout Integration & SEO / Meta | `fiba-landing-mvp` | 3 | Low | Low |
| **Phase 9** | End-to-End Verification, Accessibility & Build QA | All Capabilities | 4 | Medium | Low |
| **Total** | **Full Phase 1 MVP Delivery** | **All** | **34** | **Standard** | **Managed** |

---

## 1. Project Scaffolding & Nuxt 3 Engine Configuration

- [x] 1.1 Configure `package.json` with Nuxt 3, Vue 3, Tailwind CSS, Zod, and icon dependencies.
- [x] 1.2 Setup `tsconfig.json` with strict TypeScript checks enabled.
- [x] 1.3 Configure `nuxt.config.ts` with SSR mode, Tailwind CSS module, SEO defaults, and app head metadata.
- [x] 1.4 Setup `tailwind.config.ts` extending brand colors, typography, border radii, and custom utility classes.

---

## 2. Design Tokens & Reusable UI Primitives (`fiba-design-system`)

- [x] 2.1 Create `assets/css/main.css` establishing CSS Custom Properties (`--fiba-primary-*`, `--fiba-accent-*`, `--fiba-secondary-*`, `--fiba-surface-*`, typography scale, focus ring standards).
- [x] 2.2 Create `assets/css/tailwind.css` connecting Tailwind directives and custom token mappings.
- [x] 2.3 Implement `components/ui/AppButton.vue` supporting variants (`primary`, `secondary`, `outline`, `gold`, `ghost`), sizes (`sm`, `md`, `lg`), disabled, and loading spinner states.
- [x] 2.4 Implement `components/ui/AppCard.vue`, `components/ui/AppBadge.vue`, and `components/ui/AppModal.vue` with accessible focus trapping, keyboard ESC listener, and backdrop blur.

---

## 3. Layout Architecture & Responsive Navigation (`fiba-design-system`)

- [x] 3.1 Implement `components/layout/TheHeader.vue` featuring sticky glassmorphic navigation, brand logo, section anchors, active section spy, CTA button, and mobile menu trigger.
- [x] 3.2 Implement `components/layout/TheMobileDrawer.vue` slide-over navigation with focus trap, backdrop click dismissal, and route transition auto-close.
- [x] 3.3 Implement `components/layout/TheFooter.vue` with multi-column institutional info, mission statement, legal RUC, navigation links, and social links.

---

## 4. Domain Types & Centralized Content Layer (`fiba-content-api`)

- [x] 4.1 Implement `types/content.ts` defining strict TypeScript interfaces (`Project`, `ProjectCategory`, `ProjectStatus`, `ImpactMetric`, `DonationDetails`, `OrganizationInfo`, `ContactPayload`, `ApiResponse`).
- [x] 4.2 Populate `constants/content.ts` with authoritative data:
  - `ORGANIZATION_INFO` (Mission, Vision, Strategic Pillars, Legal & Social Info)
  - `IMPACT_METRICS` (1,500+ children, 120+ workshops, 25+ initiatives, 100% transparency)
  - `FEATURED_PROJECTS` (Artistic and educational cultural initiatives with categories, summaries, stats, and gallery paths)
  - `DONATION_CONFIG` (Banco General ACH account details, Yappy `@fundacionfiba` steps, WhatsApp direct message template)
- [x] 4.3 Add placeholder and asset references under `public/images/` and `public/images/projects/`.

---

## 5. Reactive Composables Layer (`fiba-content-api`)

- [x] 5.1 Implement `composables/useProjects.ts` providing project listing, category filtering (`selectedCategory`), slug lookup (`getProjectBySlug`), and featured project selectors.
- [x] 5.2 Implement `composables/useImpactMetrics.ts` providing impact statistics and presentation helpers.
- [x] 5.3 Implement `composables/useDonationInfo.ts` managing donation metadata and clipboard copy logic with auto-resetting feedback state (`copiedKey`).
- [x] 5.4 Implement `composables/useContact.ts` managing reactive form fields, submission status (`isSubmitting`, `isSuccess`, `errorMessage`), and client-side validation.

---

## 6. Server-Side Contact API (`fiba-content-api`)

- [x] 6.1 Implement `server/api/contact.post.ts` handling `POST /api/contact` requests with Nitro event handler.
- [x] 6.2 Implement Zod schema validation for contact submissions with field-level constraints and custom Spanish error messages.
- [x] 6.3 Implement anti-spam honeypot interceptor and text sanitization (stripping HTML/script tags) with structured server event logging.

---

## 7. Landing Page Institutional Sections (`fiba-landing-mvp`)

- [x] 7.1 Implement `components/sections/HeroSection.vue` with institutional title ("El ADN del Arte"), mission narrative, CTA buttons, and background cultural aesthetics.
- [x] 7.2 Implement `components/sections/AboutSection.vue` presenting FIBA's mission, vision, 3 strategic pillars (Educación, Inclusión, Patrimonio), and institutional statement.
- [x] 7.3 Implement `components/sections/ImpactMetricsSection.vue` rendering live impact indicators with animated count displays and metric icons.
- [x] 7.4 Implement `components/sections/ProjectsSection.vue` with interactive category filter tabs, project cards, and detailed project view modal.
- [x] 7.5 Implement `components/sections/DonationSection.vue` with Banco General ACH copy-to-clipboard cards, Yappy donation guide, WhatsApp quick chat, and transparency card.
- [x] 7.6 Implement `components/sections/ContactSection.vue` providing accessible contact form, inline error feedback, and submission confirmation alerts.

---

## 8. Page Assembly, Layout Integration & SEO (`fiba-landing-mvp`)

- [x] 8.1 Implement `layouts/default.vue` wrapping `TheHeader`, `<slot />`, `TheFooter`, and global modal mounting points.
- [x] 8.2 Implement `pages/index.vue` assembling all landing page sections in sequence (`#inicio`, `#nosotros`, `#impacto`, `#proyectos`, `#donaciones`, `#contacto`).
- [x] 8.3 Configure `app.vue` with global `useHead()` / `useSeoMeta()` including OpenGraph tags, Twitter Card tags, and `NonProfitOrganization` JSON-LD structured data.

---

## 9. End-to-End Verification, Accessibility & Build QA

- [x] 9.1 Execute TypeScript strict type checking (`npx nuxi typecheck`) ensuring zero compilation errors.
- [x] 9.2 Execute full production build validation (`npm run build` / `npx nuxi build`).
- [x] 9.3 Validate WCAG 2.1 AA accessibility guidelines (keyboard focus visible, color contrast >= 4.5:1, screen reader ARIA labels).
- [x] 9.4 Verify smooth scrolling and interactive clipboard actions across desktop and mobile viewports.
