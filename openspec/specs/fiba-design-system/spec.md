# Spec: FIBA Design System (fiba-design-system)

## 1. Overview & Objectives
The `fiba-design-system` capability establishes the visual identity, accessible design tokens, and core responsive layout primitives for Fundación Bellas Artes Integra ("El ADN del Arte"). It provides a reusable, WCAG 2.1 AA compliant UI system implemented in Nuxt 3 with custom CSS tokens and Tailwind CSS.

## 2. Design Tokens & Visual Architecture

### 2.1 Color Palette
The color tokens reflect artistic elegance, cultural heritage, and high visual contrast.

| Token | CSS Variable | Hex / Value | Purpose |
|---|---|---|---|
| `color-primary-900` | `--fiba-primary-900` | `#3D0C11` | Deep burgundy / Dark brand tone |
| `color-primary-700` | `--fiba-primary-700` | `#721B24` | Primary brand accent / Header highlights |
| `color-primary-600` | `--fiba-primary-600` | `#9B2226` | Primary action button / Links |
| `color-accent-500` | `--fiba-accent-500` | `#CA6702` | Warm amber / Artistic flair |
| `color-accent-400` | `--fiba-accent-400` | `#EE9B00` | Gold highlight / Badges |
| `color-secondary-800` | `--fiba-secondary-800` | `#001219` | Deep obsidian / Dark text & footer |
| `color-secondary-600` | `--fiba-secondary-600` | `#0A9396` | Teal accent / Metric highlight |
| `color-surface-50` | `--fiba-surface-50` | `#FDFBF7` | Warm ivory / Main page background |
| `color-surface-100` | `--fiba-surface-100` | `#F4EFEA` | Card & container background |
| `color-surface-200` | `--fiba-surface-200` | `#E8DFD8` | Border & divider lines |
| `color-text-primary` | `--fiba-text-primary` | `#1A1514` | Primary high-contrast body text |
| `color-text-muted` | `--fiba-text-muted` | `#665E59` | Secondary text / Captions |

### 2.2 Typography
- **Heading Font**: `Cinzel`, `Playfair Display`, or serif fallback (`ui-serif, Georgia, serif`) for institutional authority and artistic character.
- **Body Font**: `Plus Jakarta Sans`, `Inter`, or system sans-serif (`ui-sans-serif, system-ui, sans-serif`) for crisp readability across mobile and desktop.
- **Scale**:
  - `text-display`: `2.75rem` / `44px` (mobile), `4.25rem` / `68px` (desktop), line-height 1.1.
  - `text-h1`: `2.25rem` / `36px` (mobile), `3.25rem` / `52px` (desktop), line-height 1.2.
  - `text-h2`: `1.75rem` / `28px` (mobile), `2.25rem` / `36px` (desktop), line-height 1.25.
  - `text-h3`: `1.25rem` / `20px` (mobile), `1.5rem` / `24px` (desktop), line-height 1.3.
  - `text-body`: `1rem` / `16px`, line-height 1.6.
  - `text-sm`: `0.875rem` / `14px`, line-height 1.5.

### 2.3 Spacing, Radii & Shadows
- **Border Radii**:
  - `radius-sm`: `4px` (tags/badges)
  - `radius-md`: `8px` (buttons, inputs)
  - `radius-lg`: `16px` (cards, dialogs)
  - `radius-full`: `9999px` (pills, avatars)
- **Shadows**:
  - `shadow-subtle`: `0 2px 8px -2px rgba(0, 18, 25, 0.05)`
  - `shadow-elevated`: `0 12px 24px -6px rgba(0, 18, 25, 0.10)`
  - `shadow-modal`: `0 24px 48px -12px rgba(0, 18, 25, 0.25)`

## 3. Layout Primitives & Components

### 3.1 App Header (`TheHeader.vue`)
- **Sticky / Glassmorphism**: `backdrop-blur-md` background with subtle border for effortless navigation.
- **Brand Logo & Mark**: Scalable SVG/responsive logo linking to `#inicio` or `/`.
- **Navigation Links**:
  - Desktop: Horizontal menu (Inicio, Nosotros, Impacto, Proyectos, Donar, Contacto).
  - Smooth anchor scrolling (`scroll-behavior: smooth`) with active section spy indicator.
- **CTA Actions**: "Donar Ahora" button triggering smooth scroll to `#donaciones` or opening the Donation Modal.
- **Mobile Menu Toggle**: Accessible hamburger button with `aria-expanded` and `aria-controls`.

### 3.2 Mobile Drawer (`TheMobileDrawer.vue`)
- Slide-over drawer with backdrop overlay.
- Trap focus when open, close on `Escape` key or backdrop click.
- Auto-close on link navigation.

### 3.3 App Footer (`TheFooter.vue`)
- Multi-column responsive layout:
  - **Column 1**: FIBA identity, mission statement ("El ADN del Arte"), legal registration info (RUC Panamá).
  - **Column 2**: Navigation quick links.
  - **Column 3**: Direct contact (Email, Teléfono, WhatsApp, Ciudad de Panamá).
  - **Column 4**: Donation quick info (Banco General / Yappy badge).
- Bottom bar with copyright and privacy disclaimer.

### 3.4 Reusable UI Components
- `AppButton.vue`: Variants (`primary`, `secondary`, `outline`, `gold`, `ghost`), sizes (`sm`, `md`, `lg`), loading state with spinner.
- `AppCard.vue`: Card container with hover elevation, configurable padding, and optional border.
- `AppBadge.vue`: Category and status indicator pills with semantic color schemes.
- `AppModal.vue`: Accessible modal dialog with focus management and backdrop blur.

## 4. Accessibility & Quality Requirements
- **WCAG 2.1 AA Compliance**:
  - Text contrast >= 4.5:1 against background.
  - Interactive elements have explicit `:focus-visible` outlines (`2px solid var(--fiba-primary-600)` with offset).
  - Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Responsive Breakpoints**:
  - Mobile: `< 640px`
  - Tablet: `640px - 1023px`
  - Desktop: `>= 1024px`
- **Performance**: Zero layout shift (CLS < 0.05), CSS size minified < 40KB.

## 5. Verification & Acceptance Criteria
1. Header maintains sticky positioning with smooth background blur on scroll.
2. Mobile drawer opens/closes with keyboard accessibility (ESC key, focus trap) and screen-reader labels.
3. Design tokens provide consistent styling across all components.
4. Lighthouse accessibility audit yields score >= 95.
