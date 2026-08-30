# FIBA Web — Implementation Tasks

**Source**: Engram observation ID 1211, topic_key `sdd/fiba-web/design`
**Change**: fiba-web
**Scope**: project

---

## Legend

- **✅** = Complete
- **🔲** = Pending
- **→** = dependency on previous task
- **`topic_key`**: `sdd/fiba-web/tasks`

---

## Phase 1: Design System Foundation

### 1.1 Create assets/css/tokens.css
- **Description**: Create a design-token CSS file with 4 CSS custom properties corresponding to the FIBA color palette: burgundy (`--color-burgundy: #3D0C11`), amber (`--color-amber: #CA6702`), obsidian (`--color-obsidian: #0A9396`), and warm ivory (`--color-warm-ivory: #FDFBF7`). These will be the canonical token names used across all components.
- **Completion criteria**:
  - [ ] File `assets/css/tokens.css` exists with `:root { --color-burgundy: #3D0C11; --color-amber: #CA6702; --color-obsidian: #0A9396; --color-warm-ivory: #FDFBF7; }`
  - [ ] Tokens use the exact hex values specified in the design (burgundy `#3D0C11`, warm ivory `#FDFBF7`)
  - [ ] File is imported in `nuxt.config.css` or `main.css` so tokens are available globally
- **Reference**: Design § "CSS custom properties over Sass variables"; observation 1211 topic_key `sdd/fiba-web/design`
- **Dependencies**: None (foundational)

### 1.2 Update tailwind.config.ts — theme.colors & theme.fontFamily
- **Description**: Extend the Tailwind theme config to include the 4 new CSS custom properties as named colors and font family entries, matching the existing `fiba` color family and the design token typeface. Add `burgundy`, `amber`, `obsidian`, `warmIvory` to `theme.colors` and corresponding font family entries to `theme.fontFamily`.
- **Completion criteria**:
  - [ ] `tailwind.config.ts` includes `burgundy: #3D0C11`, `amber: #CA6702`, `obsidian: #0A9396`, `warmIvory: #FDFBF7` under `theme.extend.colors`
  - [ ] `tailwind.config.ts` includes font family entries for display/body tokens matching `--font-display` and `--font-body` from the design
  - [ ] `nuxi typecheck` passes without errors
- **Reference**: Design § "Why CSS custom properties over Sass variables"; observation 1211
- **Dependencies**: 1.1 (tokens.css must exist first, or both can be done in parallel as they are independent)

### 1.3 Verify WCAG AA contrast — burgundy #3D0C11 on warm ivory #FDFBF7
- **Description**: Run a WCAG contrast check to confirm that burgundy `#3D0C11` on warm ivory `#FDFBF7` meets AA compliance for large text (3:1 minimum) and normal text (4.5:1 minimum). Document the contrast ratio result.
- **Completion criteria**:
  - [ ] Contrast ratio between `#3D0C11` and `#FDFBF7` is calculated (expected: ~3.5:1 for normal text, passes large text at 3:1)
  - [ ] If ratio does not meet AA, note the specific failure and update token values with user approval
  - [ ] Result recorded in the task log for future reference
- **Reference**: Design § "Risks: Token drift"; observation 1211 topic_key `sdd/fiba-web/design`
- **Dependencies**: 1.1 (tokens.css must exist first so contrast can be evaluated on the actual tokens)

---

## Phase 2: Data Layer — Composables

### 2.1 Create composables/useProjects.ts — reads FEATURED_PROJECTS from constants/content.ts
- **Description**: Ensure the `useProjects` composable reads the `FEATURED_PROJECTS` constant from `~/constants/content` and exposes `filteredProjects`, `categories`, `setCategory`, and `getProjectBySlug`. This composable feeds the `ProjectsGrid` component.
- **Completion criteria**:
  - [ ] `useProjects.ts` imports `FEATURED_PROJECTS` from `~/constants/content`
  - [ ] `filteredProjects` is a `computed<Project[]>` that filters by `selectedCategory` (default `'all'`)
  - [ ] `categories` array includes `'all'` + all project category labels from the constant
  - [ ] `setCategory` updates `selectedCategory` reactive state
  - [ ] `getProjectBySlug` finds a project by its slug string
  - [ ] TypeScript types resolve without errors
- **Reference**: Design § "Data flow: content.ts → composables → pages/components"; observation 1211
- **Dependencies**: None (constant and types already exist; this task verifies/ensures correctness)

### 2.2 Create composables/useContact.ts — handles form state and integrates with /api/contact
- **Description**: Ensure the `useContact` composable provides form state (`form`, `isSubmitting`, `isSuccess`, `errorMessage`, `fieldErrors`), client validation (`validateClient`), submission (`submitContact`), and reset (`resetForm`). It must integrate with the `server/api/contact.post.ts` endpoint via `$fetch`.
- **Completion criteria**:
  - [ ] `useContact.ts` exports `form` (reactive `ContactPayload`), `isSubmitting`, `isSuccess`, `errorMessage`, `fieldErrors`
  - [ ] `validateClient()` clears `fieldErrors` and populates them for missing/invalid name, email, subject, message
  - [ ] `submitContact()` sends POST to `/api/contact` using `$fetch<ApiResponse>`, handles success (shows toast) and error (shows inline errors)
  - [ ] `resetForm()` clears all form fields and error state
  - [ ] Integration with `server/api/contact.post.ts` works (valid payload → 200, invalid → 400, honeypot → 403)
- **Reference**: Design § "Integration Points: how useContact integrates with the API"; observation 1211
- **Dependencies**: None (composable already exists; task ensures it matches the design spec)

### 2.3 Create / update types for ContactPayload and ApiResponse
- **Description**: Ensure `~/types/content.ts` exports `ContactPayload` (matching the Zod schema in `contact.post.ts`) and `ApiResponse<T>` for type-safe usage across composables and server routes. If types need widening/narrowing to match the design, update them.
- **Completion criteria**:
  - [ ] `ContactPayload` type has fields: `name: string`, `email: string`, `phone?: string`, `subject: string`, `message: string`, `honeypot?: string`
  - [ ] `ApiResponse<T>` has: `success: boolean`, `message: string`, `data?: T`, `error?: string`
  - [ ] Types are used by both `useContact.ts` and `server/api/contact.post.ts`
  - [ ] No `any` types used; full TypeScript strict compliance
- **Reference**: Design § "Type design for contact payload"; observation 1211
- **Dependencies**: None (types already exist; this task verifies/updates them)

---

## Phase 3: UI Component Implementation

### 3.1 Create components/Hero.vue — design tokens, responsive layout
- **Description**: Create the Hero component using design tokens (`--color-burgundy`, `--color-amber`, `--color-obsidian`, `--color-warm-ivory`), responsive grid layout (full-width on mobile, 2-column on desktop), and the visual hierarchy from the design system. Should produce the same visual output as `HeroSection.vue` but as a standalone `.vue` file at `components/Hero.vue`.
- **Completion criteria**:
  - [ ] `components/Hero.vue` exists and renders a hero section
  - [ ] Uses CSS custom properties from `tokens.css` (e.g., `var(--color-burgundy)`, `var(--color-warm-ivory)`)
  - [ ] Responsive: single column on mobile, 2-column on `lg:` breakpoint
  - [ ] TypeScript compiles without errors
  - [ ] Visual output matches the existing `HeroSection.vue` design specifications
- **Reference**: Design § "Component Design: Hero"; observation 1211
- **Dependencies**: 1.1 (tokens.css must exist for design token usage)

### 3.2 Create components/About.vue — biography from content.ts
- **Description**: Create an About component that pulls biography/organization text from `~/constants/content` (ORGANIZATION_INFO) and renders mission, vision, and strategic pillars. Must use design tokens for colors and typography.
- **Completion criteria**:
  - [ ] `components/About.vue` exists
  - [ ] Pulls `ORGANIZATION_INFO.mission` and `ORGANIZATION_INFO.vision` from `~/constants/content`
  - [ ] Renders 3 strategic pillars with their descriptions and icons
  - [ ] Uses design tokens for colors (e.g., `text-fiba-primary-900`, `bg-fiba-surface-50`)
  - [ ] TypeScript compiles without errors
- **Reference**: Design § "Component Design: About"; observation 1211
- **Dependencies**: 2.1 (useProjects data availability), 2.3 (ContactPayload type stability)

### 3.3 Create components/Metrics.vue — impact metrics from IMPACT_STATS
- **Description**: Create a Metrics component that displays impact metrics from the `IMPACT_METRICS` constant. Each metric shows a large number, a label, and a description. Must ensure WCAG AA contrast for burgundy `#3D0C11` on warm ivory `#FDFBF7` as verified in task 1.3.
- **Completion criteria**:
  - [ ] `components/Metrics.vue` exists
  - [ ] Reads `IMPACT_METRICS` from `~/constants/content`
  - [ ] Displays 4 metrics in a responsive grid (1 col mobile, 2 tablet, 4 desktop)
  - [ ] Uses `--color-burgundy` for metric numbers, `--color-muted` for labels (WCAG-verified)
  - [ ] TypeScript compiles without errors
- **Reference**: Design § "Component Design: Metrics"; observation 1211
- **Dependencies**: 1.3 (WCAG contrast verified), 2.3 (types stable)

### 3.4 Create components/ProjectsGrid.vue with ProjectCard, responsive grid
- **Description**: Create a ProjectsGrid component that consumes `useProjects` composable, renders a responsive grid (1 column mobile, 2 tablet, 4 desktop), and includes a `ProjectCard` sub-component for each project. Must match the grid layout from the design: `1 col mobile, 2 tablet, 4 desktop`.
- **Completion criteria**:
  - [ ] `components/ProjectsGrid.vue` exists
  - [ ] Imports and uses `useProjects` composable
  - [ ] Grid responsive: `grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-4`
  - [ ] Each project card (`ProjectCard`) displays title, summary, category badge, cover image, status badge, and beneficiary count
  - [ ] Hover state applies design tokens (e.g., `--color-hover` equivalent)
  - [ ] TypeScript compiles without errors
- **Reference**: Design § "Component Design: ProjectsGrid"; observation 1211
- **Dependencies**: 2.1 (useProjects), 3.2 (About.vue pattern), design grid spec

### 3.5 Create components/Donation.vue — form, color tokens, Stripe/Yappy placeholder
- **Description**: Create a Donation component with form fields, color tokens, and placeholder integration for Stripe/Yappy payment methods. Must include bank transfer details from `DONATION_CONFIG` and a "Copy directory" action for Yappy. Form submits to the same `/api/contact` endpoint (or a dedicated donation endpoint if Phase 2).
- **Completion criteria**:
  - [ ] `components/Donation.vue` exists
  - [ ] Renders bank account details from `DONATION_CONFIG.bank`
  - [ ] Renders Yappy directory instructions from `DONATION_CONFIG.yappy`
  - [ ] Includes "Copy Yappy directory" button with clipboard fallback
  - [ ] Uses design tokens for colors/labels
  - [ ] "Contact" form integration: submit button sends data via `useContact`/`/api/contact`
  - [ ] TypeScript compiles without errors
- **Reference**: Design § "Component Design: Donation"; observation 1211
- **Dependencies**: 2.2 (useContact), 2.3 (ContactPayload/ApiResponse types), 1.1 (tokens.css)

---

## Phase 4: Page Assembly

### 4.1 Create pages/index.vue — compose all 5 sections (Hero, About, Metrics, ProjectsGrid, Donation)
- **Description**: Create the main landing page at `pages/index.vue` that composes all 5 sections in order: Hero → About → Metrics → ProjectsGrid → Donation. Ensure proper `<ClientOnly>` wrappers for components that rely on client-side data (useProjects, useContact form). The page should not include the ContactSection from the previous iteration unless explicitly needed for Phase 1 MVP.
- **Completion criteria**:
  - [ ] `pages/index.vue` exists
  - [ ] Composes exactly 5 sections in order: Hero, About, Metrics, ProjectsGrid, Donation
  - [ ] Components requiring client data wrapped in `<ClientOnly>` as needed
  - [ ] No TypeScript errors from `nuxi typecheck`
  - [ ] Page renders without Vue hydration warnings
- **Reference**: Design § "Why the 5‑section landing composition"; observation 1211
- **Dependencies**: 3.1–3.5 (all component files exist), 2.1 (useProjects data), 2.2 (useContact form)

### 4.2 Ensure pages/index.vue uses <ClientOnly> where needed
- **Description**: Audit `pages/index.vue` and wrap components that fetch data on the client (ProjectsGrid via `useProjects`, Donation form via `useContact`) in `<ClientOnly>` or `<NuxtClientOnly>` to prevent hydration mismatches during SSR initial render.
- **Completion criteria**:
  - [ ] `pages/index.vue` wraps `ProjectsGrid` and `Donation` in `<ClientOnly>` or `<NuxtClientOnly>`
  - [ ] No console warnings about missing client-only data during SSR
  - [ ] Page generates successfully with `nuxt generate` or `nuxt build`
- **Reference**: Design § "Integration Points"; observation 1211
- **Dependencies**: 4.1

---

## Phase 5: Server API Implementation

### 5.1 Create server/api/contact.post.ts — H3 defineEventHandler + Zod schema validation
- **Description**: Create/verify the server-side contact form endpoint at `server/api/contact.post.ts`. Must use H3's `defineEventHandler`, Zod schema for validation, and implement the full flow: honeypot → 403, valid → 200 `{success:true}`, invalid → 400 with detailed errors. This is the backend for the `useContact` composable.
- **Completion criteria**:
  - [ ] `server/api/contact.post.ts` uses `defineEventHandler` from `h3`
  - [ ] Zod schema (`contactSchema`) validates: `name` (min 2, max 100), `email` (email), `subject` (min 2, max 100), `message` (min 10, max 2000), `honeypot` (optional, empty = ok)
  - [ ] Honeypot filled → returns 403 (Forbidden) silently (spam bot ignored)
  - [ ] Valid payload → returns `200 { success: true, submissionId: uuid }`
  - [ ] Invalid payload → returns 400 with `error` field listing validation errors
  - [ ] No `any` types; full TypeScript strict compliance
- **Reference**: Design § "API Design: contact.post.ts endpoint structure"; observation 1211
- **Dependencies**: 2.3 (ContactPayload/ApiResponse types), design schema spec

### 5.2 Define ContactInput / ContactOutput types
- **Description**: Define TypeScript types `ContactInput` (matches the Zod schema, used for request body) and `ContactOutput` (response shape `{ success: boolean; submissionId: string }` or `{ error: string }`). These types should be importable by both the server route and client composables.
- **Completion criteria**:
  - [ ] `ContactInput` type is `z.infer<typeof contactSchema>` (auto-inferred from Zod)
  - [ ] `ContactOutput` type is `{ success: boolean; submissionId?: string } | { error: string }`
  - [ ] Both types are exported from `server/api/contact.post.ts` or a shared types module
  - [ ] Types are used consistently in `useContact.ts` fetch calls
- **Reference**: Design § "Type design for contact payload"; observation 1211
- **Dependencies**: 5.1 (server route implementation)

### 5.3 Implement validation flow: valid → 200 {success:true}, invalid → 400 errors, honeypot → 403
- **Description**: Implement the three-branch validation logic in the `defineEventHandler`:
  1. **Honeypot check**: If the hidden `honeypot` field has any non-empty value, return `403` (spam bot caught).
  2. **Schema validation**: Use `contactSchema.safeParse(body)`. If invalid, return `400` with error details from Zod.
  3. **Success**: If valid, return `200 { success: true, submissionId: <uuid> }`.
- **Completion criteria**:
  - [ ] Honeypot triggered → HTTP 403, body `{ success: true, message: 'Spam caught.' }` (no error thrown, silent success)
  - [ ] Invalid Zod parse → HTTP 400, body `{ error: 'Validation failed: ...' }` with `data.errors` details
  - [ ] Valid Zod parse → HTTP 200, body `{ success: true, submissionId: '<uuid>' }`
  - [ ] All three paths tested manually or via Vitest
- **Reference**: Design § "Error handling and response design"; observation 1211
- **Dependencies**: 5.1, 5.2

---

## Phase 6: Testing & Verification

### 6.1 Set up Vitest tests for contact.post.ts validation scenarios
- **Description**: Create Vitest test file `server/api/contact.post.test.ts` (or similar) that tests the three validation paths: honeypot → 403, valid payload → 200, invalid payload → 400. Use H3's `defineTestHandler` or direct function invocation.
- **Completion criteria**:
  - [ ] Vitest config is set up (or existing config supports `.test.ts` files)
  - [ ] Test file `server/api/contact.post.test.ts` exists with at least 3 test cases:
    - [ ] Honeypot filled → returns 403
    - [ ] Missing required fields (name, email, etc.) → returns 400
    - [ ] Valid complete payload → returns 200 with `success: true`
  - [ ] Tests pass: `pnpm test:vitest` or `npx vitest run`
- **Reference**: Design § "Testing & Verification"; observation 1211 topic_key `sdd/fiba-web/tasks`
- **Dependencies**: 5.3 (validation flow implemented), Vitest in `devDependencies`

### 6.2 Create basic Lighthouse/WCAG checks for the landing page
- **Description**: Run Lighthouse audits (or equivalent) on the local dev server (`http://localhost:3000`) for the landing page, focusing on: accessibility (WCAG AA contrast), performance, best practices. Document any failures, especially around color contrast and responsive grid breakpoints.
- **Completion criteria**:
  - [ ] Lighthouse report generated for `http://localhost:3000/` 
  - [ ] Contrast ratios documented for all text/background combinations using design tokens
  - [ ] Any WCAG AA failures listed with remediation notes
  - [ ] Responsive breakpoints (1 col mobile, 2 tablet, 4 desktop) verified visually or via DevTools
- **Reference**: Design § "Risks: Token drift, Responsive grid breakpoints"; observation 1211
- **Dependencies**: 4.1 (pages/index.vue deployed locally), design tokens in place

### 6.3 Verify TypeScript strict mode with nuxi typecheck
- **Description**: Run `nuxi typecheck` to verify the entire codebase passes TypeScript strict mode. Fix any `type` errors that arise from recent changes (new tokens, types, components).
- **Completion criteria**:
  - [ ] `nuxi typecheck` exits with code 0 (no errors)
  - [ ] All `.ts` and `.vue` files type-check without `any` escapes (or documented exceptions)
  - [ ] Any new type errors from Phase 3–5 tasks are resolved or justified
- **Reference**: Design § "Why Nuxt 3 server routes"; observation 1211
- **Dependencies**: All prior phases (tokens, types, components, API), 6.1 (Vitest tests must not introduce type errors)

---

## Phase 7: Documentation & Deployment

### 7.1 Update nuxt.config.ts if needed for i18n/strapi Phase 2 path
- **Description**: Review `nuxt.config.ts` for any i11n or strapi Phase 2 configuration needs. If Phase 2 will replace `content.ts` constants with direct Strapi API calls, add Nuxt modules or configuration to support that (e.g., `@nuxtjs/i18n`, HTTP module aliases, or environment variables for Strapi URL).
- **Completion criteria**:
  - [ ] `nuxt.config.ts` reviewed for Phase 2 i18n/strapi path
  - [ ] If i18n needed: `@nuxtjs/i18n` module added to `modules` array, locale routes configured
  - [ ] If Strapi API needed: environment variable `STRAPI_BASE_URL` defined, or HTTP module configured
  - [ ] `nuxi typecheck` still passes after changes
- **Reference**: Design § "Strapi integration path for Phase 2 (how the content API mirrors Strapi endpoints)"; observation 1211
- **Dependencies**: 6.3 (typecheck passes), design review

### 7.2 Configure Vercel deployment settings for MVP launch
- **Description**: Set up Vercel project settings for the FIBA landing page deployment: framework preset (`nuxt`), build command (`nuxt build`), output directory (`.nuxt`), and environment variables (if any — e.g., public API keys, feature flags). Ensure the domain redirects are configured for `fiba-web` MVP.
- **Completion criteria**:
  - [ ] Vercel project created or linked for the repository
  - [ ] Build and output settings correct for Nuxt 3
  - [ ] Environment variables (if any) configured in Vercel dashboard
  - [ ] Initial deployment successful (or `pnpm deploy` / `vercel deploy` dry run succeeds)
- **Reference**: Design § "Deployment MVP launch"; observation 1211
- **Dependencies**: 6.3 (typecheck passes), 7.1 (nuxt.config.ts finalized)

### 7.3 Add Project Transfer configuration for account transfer
- **Description**: Add any configuration or documentation for project account transfer / ownership transfer mechanism. This may include environment variables, Strapi transfer endpoints, or a simple markdown note describing the process for transferring project data between Strapi instances or from Strapi to `content.ts` constants.
- **Completion criteria**:
  - [ ] Project transfer process documented (markdown note or config file)
  - [ ] If environment-variable driven: `PROJECT_TRANSFER_TOKEN` or similar added to `.env.example`
  - [ ] Process covers: export current project data → import to new Strapi / static constants
- **Reference**: Design § "Phase 2 will replace constants with direct Strapi API calls"; observation 1211
- **Dependencies**: 7.1 (nuxt.config.ts reviewed for Phase 2), design documentation

---

## Task Dependencies Summary

```
1.1 → 1.3 → 3.1,3.3
1.2 → 1.1 (parallel possible)
2.1, 2.2, 2.3 (parallel)
3.1 → 4.1 → 6.3
3.2 → 4.1
3.3 → 4.1
3.4 → 4.1
3.5 → 4.1
5.1 → 5.2 → 5.3 → 6.1
6.1 → 6.2, 6.3
7.1 → 7.2, 7.3
```

---

## Phase Completion Checklist

- **Phase 1 (Design System)**: [ ] 1.1 [ ] 1.2 [ ] 1.3
- **Phase 2 (Composables)**: [ ] 2.1 [ ] 2.2 [ ] 2.3
- **Phase 3 (Components)**: [ ] 3.1 [ ] 3.2 [ ] 3.3 [ ] 3.4 [ ] 3.5
- **Phase 4 (Pages)**: [ ] 4.1 [ ] 4.2
- **Phase 5 (Server API)**: [ ] 5.1 [ ] 5.2 [ ] 5.3
- **Phase 6 (Testing & Verification)**: [ ] 6.1 [ ] 6.2 [ ] 6.3
- **Phase 7 (Documentation & Deployment)**: [ ] 7.1 [ ] 7.2 [ ] 7.3