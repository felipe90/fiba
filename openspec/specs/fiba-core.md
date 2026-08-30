# Spec: FIBA Core Architecture & Platform Requirements

## 1. Overview
The FIBA platform ("El ADN del Arte") serves Fundación Bellas Artes Integra as its official institutional portal, showcasing its mission, community impact, cultural initiatives, and accepting donations.

## 2. Architecture & Tech Stack
- **Nuxt 3 Framework**: SSR/SSG hybrid rendering for high-performance SEO and fast content delivery.
- **Frontend Layer**: Vue 3 Composition API, TypeScript strict mode, responsive design with custom CSS design tokens.
- **State & Data Abstraction**: Composables (`useProjects.ts`, `useContact.ts`, etc.) decoupling UI from backend data sources.
- **Data Source Roadmap**:
  - **Fase 1 (MVP)**: Centralized typed constants (`constants/content.ts`).
  - **Fase 2 (Scale)**: Strapi v4 Headless CMS via REST/GraphQL API.
- **Payment & Donation Layer (Future/Fase 2-3)**:
  - Yappy (Panama local mobile payments)
  - Stripe (International card processing)
- **Deployment Target**: Vercel with automatic CI/CD and edge SSR rendering.

## 3. Core Functional Requirements
- **FR-01**: Institutional Landing Page highlighting value proposition, mission, metrics, and featured projects.
- **FR-02**: Project Directory displaying current and past artistic/community initiatives with rich metadata.
- **FR-03**: Donation & Support Hub providing bank transfer information, direct WhatsApp contact, and payment routing.
- **FR-04**: Server-side Contact API route (`/api/contact`) validating inbound messages with sanitization and email notification readiness.
- **FR-05**: Responsive Layout (Header, Navigation Drawer, Footer) conforming to accessibility (WCAG 2.1 AA).

## 4. Non-Functional Requirements
- **NFR-01 (Performance)**: Lighthouse performance score >= 90.
- **NFR-02 (SEO & Sharing)**: Complete OpenGraph and Twitter Card metadata for social sharing.
- **NFR-03 (Security)**: Strict input validation on all server endpoints, HTTPS enforcement, sanitized headers.
