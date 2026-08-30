# Proposal: fiba-phase1-mvp

## Why
Fundación Bellas Artes Integra (FIBA) requires an immediate, high-performance web presence to communicate its mission ("El ADN del Arte"), showcase community cultural projects, accept donation inquiries, and capture inbound contact messages. Delivering a Phase 1 MVP in Nuxt 3 with typed local data provides rapid time-to-market without backend complexity, while establishing design tokens and decoupled composables ready for future Strapi CMS and automated payment integrations.

## What Changes
- Initialize Nuxt 3 application with TypeScript strict mode, responsive layout (Header, Drawer, Footer), and custom CSS design tokens.
- Build high-impact landing page components: Hero section, About/Mission, Impact metrics counter, Featured Projects gallery, and Donation information modal/cards.
- Implement typed constants (`constants/content.ts`) and composable data layers (`useProjects.ts`, `useContact.ts`) for seamless future transition to Strapi.
- Implement server route `server/api/contact.post.ts` with schema validation (Zod/H3) and transactional email readiness.

## Capabilities

### New Capabilities
- `fiba-design-system`: Visual foundation and reusable UI tokens (colors, typography, responsive navigation, buttons, cards, modals) conforming to WCAG 2.1 AA accessibility standards.
- `fiba-landing-mvp`: Core institutional web experience presenting FIBA's mission, interactive project showcases, impact indicators, and structured donation channels (Bank transfer / Yappy info / WhatsApp direct).
- `fiba-content-api`: Local typed content data layer and server-side contact API endpoint (`/api/contact`) with request validation and structured error handling.

### Modified Capabilities
- None (initial platform milestone).

## Impact & Risk
- **Impact**: Establishes FIBA's digital footprint with Lighthouse score >= 90, responsive cross-device layout, and robust SSR deployment on Vercel.
- **Risks & Mitigations**:
  - *Risk*: Content hardcoding coupling UI to static files.
    - *Mitigation*: Abstract content access through typed composables mirroring future Strapi API schemas.
  - *Risk*: Spam on public contact endpoint.
    - *Mitigation*: Strict server-side payload validation and rate/honeypot checks.
