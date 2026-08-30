# Technical Design: FIBA Phase 1 MVP (`fiba-phase1-mvp`)

## 1. Executive Summary & Architectural Goals

The **FIBA Phase 1 MVP** delivers the institutional web portal for **Fundación Bellas Artes Integra ("El ADN del Arte")**. The architecture is designed to fulfill three primary objectives:
1. **Immediate Time-to-Market**: Provide a polished, accessible (WCAG 2.1 AA), and performant (Lighthouse >= 90) single-page institutional portal with SSR/SSG capabilities.
2. **Clean Abstraction & Future-Proofing**: Isolate data models and state management through typed composables (`useProjects`, `useImpactMetrics`, `useDonationInfo`, `useContact`) and static typed datasets (`constants/content.ts`), creating a seamless migration path to Strapi Headless CMS in Phase 2.
3. **Robust Security & Interaction**: Implement server-side Nitro routes for contact inquiries with strict validation (Zod/H3), honeypot anti-spam defenses, and copy-to-clipboard / modal interactions.

---

## 2. System Architecture & Tech Stack

```
+-----------------------------------------------------------------------------------+
|                                 Client Browser                                    |
|   +---------------------------------------------------------------------------+   |
|   |                         Nuxt 3 / Vue 3 Application                        |   |
|   |  - SSR / Hydration with Vue 3 Composition API (<script setup lang="ts">)  |   |
|   |  - Custom CSS Design Tokens & Tailwind CSS Utility System                 |   |
|   |  - Accessibility (WCAG 2.1 AA, Focus Trap, Semantic HTML)                 |   |
|   +---------------------------------------------------------------------------+   |
|                                         |                                         |
|            +----------------------------+----------------------------+            |
|            |                                                         |            |
|            v                                                         v            |
|   +-------------------+                                     +-----------------+   |
|   | UI Layer / Layout |                                     | Composables /   |   |
|   | - TheHeader       |                                     | Reactive State  |   |
|   | - TheMobileDrawer |                                     | - useProjects   |   |
|   | - TheFooter       |                                     | - useImpact     |   |
|   | - Page Sections   |                                     | - useDonation   |   |
|   | - Reusable UI     |                                     | - useContact    |   |
|   +-------------------+                                     +-----------------+   |
|            |                                                         |            |
|            |                                                         v            |
|            |                                                +-----------------+   |
|            |                                                | Typed Data      |   |
|            |                                                | constants/      |   |
|            |                                                | content.ts      |   |
|            |                                                +-----------------+   |
|            |                                                         |            |
|            | (POST /api/contact)                                     |            |
+------------|---------------------------------------------------------|------------+
             |                                                         |
             v                                                         | (Phase 2)
+------------------------------------+                                 v
|       Nuxt Nitro Server Engine     |                     +-----------------------+
|  - server/api/contact.post.ts      |                     | Strapi Headless CMS   |
|  - Schema Validation (Zod)         |                     | (Future Phase 2 Target|
|  - Honeypot Spam Interceptor       |                     +-----------------------+
|  - Mailer Hook (Resend / SMTP)     |
+------------------------------------+
```

### Core Tech Stack:
- **Framework**: Nuxt 3 (SSR Mode) + Vue 3 Composition API
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS + Custom CSS Variables Design System (`assets/css/main.css`)
- **Icons**: Lucide Icons / Heroicons (SVG-based)
- **Validation**: Zod (Client and Server schema validation)
- **Hosting / CI/CD**: Vercel Edge / Node Runtime

---

## 3. Directory & File Organization

```
FIBA/
├── assets/
│   └── css/
│       ├── main.css              # Design tokens, CSS variables, typography reset
│       └── tailwind.css          # Tailwind directives & theme extensions
├── components/
│   ├── layout/
│   │   ├── TheHeader.vue         # Sticky glassmorphic header with navigation & CTA
│   │   ├── TheMobileDrawer.vue   # Accessible slide-over drawer with focus trap
│   │   └── TheFooter.vue         # Comprehensive footer with legal, quick links & contact
│   ├── sections/
│   │   ├── HeroSection.vue       # Impactful brand hero with action CTAs
│   │   ├── AboutSection.vue      # Mission, vision & 3 strategic pillars
│   │   ├── ImpactMetricsSection.vue # Animated metrics & social impact indicators
│   │   ├── ProjectsSection.vue   # Curated initiatives gallery with category filters
│   │   ├── DonationSection.vue   # Bank ACH, Yappy guide, WhatsApp direct channels
│   │   └── ContactSection.vue    # Inbound inquiry form with validation
│   └── ui/
│       ├── AppButton.vue         # Polymorphic button (primary, secondary, gold, ghost)
│       ├── AppCard.vue           # Surface container with elevation & border styles
│       ├── AppBadge.vue          # Category, status & highlight pill badges
│       └── AppModal.vue          # Accessible dialog with backdrop blur & keyboard nav
├── composables/
│   ├── useProjects.ts            # Project query, filtering and retrieval
│   ├── useImpactMetrics.ts       # Metrics data source & formatter
│   ├── useDonationInfo.ts        # Donation metadata & copy-to-clipboard helper
│   └── useContact.ts             # Contact submission handler with reactive states
├── constants/
│   └── content.ts                # Authoritative typed content dataset
├── layouts/
│   └── default.vue               # Global layout wrapping Header, Main, Footer, Modals
├── pages/
│   └── index.vue                 # Single-page landing aggregating all sections
├── public/
│   ├── favicon.ico
│   ├── images/
│   │   ├── og-fiba-cover.jpg     # OpenGraph social banner
│   │   ├── logo-fiba.svg         # Primary vector logo
│   │   └── projects/             # High-res curated project imagery
│   └── robots.txt
├── server/
│   └── api/
│       └── contact.post.ts       # Validated API endpoint with honeypot & logging
├── types/
│   └── content.ts                # Strict TypeScript domain interfaces
├── nuxt.config.ts                # Nuxt configuration, meta, modules, Tailwind
├── tailwind.config.ts            # Tailwind color and font extensions
├── tsconfig.json                 # Strict TypeScript configuration
└── package.json                  # Dependencies & scripts
```

---

## 4. Design System & Token Architecture (`fiba-design-system`)

### 4.1 Color System & Semantics

Defined in `assets/css/main.css` and mapped to Tailwind colors:

```css
:root {
  /* Brand Primary */
  --fiba-primary-900: #3D0C11;
  --fiba-primary-800: #57131A;
  --fiba-primary-700: #721B24;
  --fiba-primary-600: #9B2226;
  --fiba-primary-500: #AE2012;

  /* Artistic Accents */
  --fiba-accent-500: #CA6702;
  --fiba-accent-400: #EE9B00;
  --fiba-accent-300: #E9D8A6;

  /* Secondary / Obsidian / Teal */
  --fiba-secondary-900: #001219;
  --fiba-secondary-800: #001824;
  --fiba-secondary-600: #0A9396;
  --fiba-secondary-400: #94D2BD;

  /* Surfaces & Canvas */
  --fiba-surface-50: #FDFBF7;
  --fiba-surface-100: #F4EFEA;
  --fiba-surface-200: #E8DFD8;
  --fiba-surface-300: #D8CCC2;

  /* Text & Typography */
  --fiba-text-primary: #1A1514;
  --fiba-text-secondary: #423B38;
  --fiba-text-muted: #665E59;
}
```

### 4.2 Typography Hierarchy
- **Serif Display**: `Cinzel`, `Playfair Display`, or serif stack for institutional elegance on headers (`h1`, `h2`, `h3`, blockquotes).
- **Sans Body**: `Plus Jakarta Sans`, `Inter`, or system sans for legible high-density reading.
- **Focus Rings**: Strict `:focus-visible` with `outline: 2px solid var(--fiba-primary-600); outline-offset: 2px;` across all interactive elements.

---

## 5. Domain Models & Data Contracts (`fiba-content-api`)

All data structures are typed strictly in `types/content.ts`:

```typescript
export type ProjectCategory = 'educacion' | 'comunidad' | 'artes-plasticas' | 'musica' | 'exposiciones';
export type ProjectStatus = 'en-curso' | 'completado' | 'proximo';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  fullDescription: string;
  coverImage: string;
  gallery?: string[];
  status: ProjectStatus;
  year: number;
  location: string;
  beneficiariesCount?: number;
  tags: string[];
  featured: boolean;
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description: string;
  icon?: string;
}

export interface BankAccountDetails {
  bankName: string;
  accountType: string;
  accountNumber: string;
  accountHolder: string;
  ruc: string;
  email: string;
}

export interface DonationDetails {
  bank: BankAccountDetails;
  yappy: {
    directoryName: string;
    phone: string;
    instructions: string[];
  };
  whatsapp: {
    phoneNumber: string;
    defaultMessage: string;
  };
}

export interface OrganizationInfo {
  name: string;
  slogan: string;
  mission: string;
  vision: string;
  legalRuc: string;
  pillars: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  contact: {
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    whatsappNumber: string;
  };
  socialLinks: Array<{
    platform: 'instagram' | 'facebook' | 'youtube' | 'linkedin' | 'x';
    url: string;
  }>;
}

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
```

---

## 6. Composables & State Flow

### 6.1 `useProjects`
- Decouples UI components from raw static datasets.
- Implements dynamic category filtering (`selectedCategory`), slug lookup (`getProjectBySlug`), and featured project selection (`featuredProjects`).

### 6.2 `useDonationInfo`
- Provides structured data for ACH, Yappy, and WhatsApp channels.
- Encapsulates clipboard copying logic with active feedback state (`copiedKey: Ref<string | null>`) resetting automatically after 2.5 seconds.

### 6.3 `useContact`
- Encapsulates reactive form state (`form`, `isSubmitting`, `errorMessage`, `isSuccess`).
- Validates payload before dispatching `$fetch('/api/contact', { method: 'POST', body: form })`.

---

## 7. Server Route Design: `/api/contact`

### 7.1 Validation Schema (Zod)
```typescript
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'El nombre debe tener al menos 2 caracteres').max(100),
  email: z.string().trim().email('Correo electrónico no válido'),
  phone: z.string().trim().max(30).optional().or(z.literal('')),
  subject: z.string().trim().min(2, 'El asunto es requerido').max(100),
  message: z.string().trim().min(10, 'El mensaje debe tener al menos 10 caracteres').max(2000),
  honeypot: z.string().optional()
});
```

### 7.2 Security & Flow Logic
1. **Honeypot Check**: If `body.honeypot` is truthy, the endpoint immediately returns HTTP 200 `{ success: true, message: "Mensaje recibido" }` without processing to neutralize automated spam bots.
2. **Sanitization**: Strips HTML tags and potential script injections from all text inputs.
3. **Structured Server Logging**: Logs inquiry details to standard output / telemetry.
4. **Error Handling**: Formats Zod errors into friendly client response messages with HTTP 400.

---

## 8. Landing Page Sections & Interactions (`fiba-landing-mvp`)

1. **Header & Navigation**:
   - Glassmorphic backdrop (`backdrop-blur-md bg-surface-50/80`).
   - Smooth anchor navigation linking to `#inicio`, `#nosotros`, `#impacto`, `#proyectos`, `#donaciones`, `#contacto`.
   - Accessible mobile drawer with keyboard trap and focus restoration.
2. **Hero Section**:
   - Institutional title: *"El ADN del Arte — Transformando Vidas a Través de la Cultura"*.
   - Action buttons for immediate project discovery or donation.
3. **About / Mission Section**:
   - 3 Strategic Pillars: *Educación y Formación*, *Inclusión Comunitaria*, and *Patrimonio y Creación*.
4. **Impact Metrics Section**:
   - Animated visual indicators (`+1,500 Niños`, `+120 Talleres`, `+25 Proyectos`, `100% Transparencia`).
5. **Projects Section**:
   - Filterable project grid with category pills.
   - Interactive project detail modal with high-res imagery, story, and impact metadata.
6. **Donation Hub**:
   - Interactive bank ACH card with one-click copy buttons for Account Number and RUC.
   - Step-by-step Yappy guide.
   - Direct WhatsApp support link.
7. **Contact Section**:
   - Clean, accessible form with live validation and success/error status alerts.

---

## 9. Non-Functional Requirements & Performance Strategy

- **Performance**: Static asset optimization, image WebP/AVIF generation, CSS tree-shaking, Lighthouse Score target >= 90.
- **SEO & Social Sharing**: Complete OpenGraph, Twitter Card, and JSON-LD `NGO` structured data schema injected via `useHead()` / `useSeoMeta()`.
- **Accessibility**: Semantic HTML tags, ARIA attributes (`aria-expanded`, `aria-controls`, `aria-label`), color contrast >= 4.5:1, keyboard focusable targets.
- **SSR Hydration Safety**: Avoid client-only globals during SSR pass to ensure zero hydration mismatch errors.

---

## 10. Strapi CMS Migration Path (Phase 2 Preview)

The composables design enables Phase 2 migration without altering component templates:
```typescript
// Phase 1: Local constants
export const useProjects = () => {
  const projects = computed(() => FEATURED_PROJECTS);
  return { projects, ... };
};

// Phase 2: Strapi API integration
export const useProjects = () => {
  const { find } = useStrapi();
  const { data: projects, refresh } = await useAsyncData('projects', () => find('projects', { populate: '*' }));
  return { projects, refresh, ... };
};
```
