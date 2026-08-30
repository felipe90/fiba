# Spec: FIBA Landing MVP (fiba-landing-mvp)

## 1. Overview & Objectives
The `fiba-landing-mvp` capability defines the complete single-page institutional portal for Fundación Bellas Artes Integra ("El ADN del Arte"). It presents FIBA's mission, impact metrics, curated cultural projects gallery, structured donation channels, and direct inquiry contact form.

## 2. Page Structure & Sections

### 2.1 Hero Section (`HeroSection.vue`)
- **Headline**: "El ADN del Arte — Transformando Vidas a Través de la Cultura".
- **Subtitle**: Impulsamos el talento artístico, la inclusión comunitaria y el patrimonio cultural en Panamá mediante formación, talleres y experiencias transformadoras.
- **CTAs**:
  - Primary: "Explorar Proyectos" (smooth scroll to `#proyectos`).
  - Secondary: "Hacer una Donación" (triggers donation modal / scroll to `#donaciones`).
- **Visual Element**: High-resolution cultural imagery overlay with artistic gradient and animated scroll indicator.

### 2.2 About & Mission Section (`AboutSection.vue`)
- **Institutional Identity**: Introduction to Fundación Bellas Artes Integra (FIBA), our vision, and philosophy ("El ADN del Arte").
- **Pillars of Impact**:
  1. **Educación y Formación**: Talleres y becas para niños y jóvenes en disciplinas plásticas, escénicas y musicales.
  2. **Inclusión Comunitaria**: Acercamos las bellas artes a comunidades vulnerables como motor de cohesión social.
  3. **Patrimonio y Creación**: Preservación cultural y apoyo a artistas emergentes panameños.
- **Quote Block**: Institutional statement highlighting art as a fundamental human right and catalyst for change.

### 2.3 Impact Metrics Section (`ImpactMetricsSection.vue`)
- Displays live/typed metrics showcasing FIBA's social and cultural footprint:
  - **+1,500** Niños y jóvenes formados en disciplinas artísticas.
  - **+120** Talleres y actividades culturales comunitarias realizadas.
  - **+25** Proyectos de impacto social y exhibiciones apoyadas.
  - **100%** Compromiso y transparencia en la gestión de recursos.
- Interactive counter animation on scroll into view.

### 2.4 Featured Projects Section (`ProjectsSection.vue`)
- Grid layout displaying active and past initiatives:
  - **Project Card**:
    - Image with category badge (e.g., "Educación", "Artes Plásticas", "Música", "Comunidad").
    - Title and concise description.
    - Key stats (Beneficiaries, Location, Year).
    - Status badge ("En Curso" / "Completado").
    - "Ver Detalles" interaction displaying extended modal/drawer with project narrative and gallery.
- Filter tabs by category (Todos, Educación, Comunidad, Exposiciones).

### 2.5 Donation & Transparency Hub (`DonationSection.vue`)
- **Message**: "Tu aporte cultiva talento y transforma comunidades".
- **Channels**:
  1. **Banco General (Transferencia Local / ACH)**:
     - Nombre de la Cuenta: Fundación Bellas Artes Integra
     - Tipo de Cuenta: Corriente
     - Número de Cuenta: `03-XX-XX-XXXXXX-X` (Copy to clipboard button)
     - RUC / DV: `1557XXXX-X-XXXXXX DV XX` (Copy button)
     - Correo de comprobantes: `donaciones@fundacionfiba.org`
  2. **Yappy (Banco General Panamá)**:
     - Yappy Directory Name: `@fundacionfiba` / Número directo
     - Pasos sencillos para enviar donaciones desde la app Banco General.
  3. **Contacto Directo & Donaciones Internacionales**:
     - Botón directo de WhatsApp con mensaje predeterminado: *"Hola FIBA, deseo realizar una donación / conocer cómo apoyar sus programas"*.
- **Transparency Card**: Institutional commitment to auditing, reporting, and impact tracking.

### 2.6 Contact & Inquiries Section (`ContactSection.vue`)
- Form fields:
  - `name`: Nombre completo (requerido).
  - `email`: Correo electrónico (requerido, validación RFC).
  - `phone`: Teléfono / WhatsApp (opcional).
  - `subject`: Asunto / Tipo de consulta (Donaciones, Voluntariado, Alianzas, Información General).
  - `message`: Mensaje (mínimo 10 caracteres).
- Client-side validation state, real-time error messages, submission feedback banner (success/error).

## 3. SEO, Metadata & OpenGraph
- Standard Head configuration in `app.vue` / `pages/index.vue`:
  - `title`: "Fundación Bellas Artes Integra — El ADN del Arte"
  - `description`: "Plataforma institucional de la Fundación Bellas Artes Integra (FIBA). Promovemos la transformación social y cultural a través de las bellas artes en Panamá."
  - `og:image`: High quality branded preview card (`/images/og-fiba-cover.jpg`).
  - Structured Data (JSON-LD) for `NGO` / `NonProfitOrganization`.

## 4. Acceptance Criteria
1. Full single-page experience renders smoothly with zero hydration mismatch errors.
2. Smooth scrolling navigates seamlessly between all major sections (`#inicio`, `#nosotros`, `#impacto`, `#proyectos`, `#donaciones`, `#contacto`).
3. Donation copy-to-clipboard buttons provide visual confirmation ("¡Copiado!").
4. Contact form submits to `/api/contact` and displays feedback upon completion.
5. Fully responsive across mobile (375px+), tablet (768px+), and desktop (1024px+).
