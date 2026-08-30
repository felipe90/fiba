# 🎨 FIBA Portal — El ADN del Arte

Plataforma web institucional de la **Fundación Bellas Artes Integra (FIBA)** — una aplicación moderna, rápida y accesible construida con **Nuxt 3**, **TypeScript** y **Tailwind CSS**.

---

## ✨ Características

- **Landing page institucional** — Hero, misión, métricas de impacto, galería de proyectos
- **Diseño accesible** — WCAG 2.1 AA compliance, navegación responsiva, modo oscuro listo
- **Sistema de diseño** — Tokens de color (burgundy, amber, obsidian), tipografía escalable
- **API de contacto** — Formulario con validación Zod y protección anti-spam
- **Contenido tipado** — TypeScript strict mode, composables abstractos para futura integración CMS
- **Deploy automático** — Vercel con SSR/SSG, CI/CD incluido
- **Performance** — Lighthouse optimizado, meta tags (OG, Twitter Cards), SEO listo

---

## 🏗️ Stack Tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| **Framework** | Nuxt 3 | ^3.15.4 |
| **Runtime** | Vue 3 | ^3.5.13 |
| **Lenguaje** | TypeScript | ^5.7.3 |
| **Estilos** | Tailwind CSS | ^3.4.17 |
| **Iconos** | Lucide Vue Next | ^0.475.0 |
| **Validación** | Zod | ^3.24.2 |
| **Package Manager** | pnpm | ^11.1.1 |
| **Testing** | Playwright | ^1.62.1 |
| **Deployment** | Vercel | Automático |

---

## 🚀 Guía de Inicio Rápido

### Requisitos Previos
- Node.js ≥ 18.x
- pnpm ≥ 11.x

### 1. Clonar e Instalar

```bash
git clone <repository-url>
cd FIBA
pnpm install
```

### 2. Desarrollo Local

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Compilar para Producción

```bash
pnpm build
pnpm preview
```

---

## 📦 Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia servidor con hot reload

# Producción
pnpm build        # Compila la aplicación
pnpm preview      # Previsualiza build de producción
pnpm generate     # Genera sitio estático (SSG)

# Utilidades
pnpm typecheck    # Verifica tipos TypeScript
pnpm postinstall  # Prepara Nuxt (automático)
```

---

## 📁 Estructura del Proyecto

```
FIBA/
├── pages/                          # Rutas (Nuxt routing automático)
│   ├── index.vue                  # Landing page principal
│   ├── donar.vue                  # Página de donaciones
│   └── proyectos/index.vue        # Galería de proyectos
│
├── components/                     # Componentes Vue reutilizables
│   ├── Hero.vue                   # Sección hero
│   ├── About.vue                  # Sección sobre nosotros
│   ├── Metrics.vue                # Métricas de impacto
│   ├── ProjectsGrid.vue           # Galería de proyectos
│   ├── Donation.vue               # Información de donaciones
│   ├── layout/                    # Layout components
│   │   ├── TheHeader.vue          # Header principal
│   │   ├── TheFooter.vue          # Footer
│   │   └── TheMobileDrawer.vue    # Menú móvil
│   ├── sections/                  # Sections del landing
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── ImpactMetricsSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── ContactSection.vue
│   │   └── DonationSection.vue
│   └── ui/                        # Componentes de UI base
│       ├── AppButton.vue
│       ├── AppCard.vue
│       ├── AppBadge.vue
│       ├── AppModal.vue
│       └── ProjectCard.vue
│
├── composables/                    # Composables (lógica reutilizable)
│   ├── useProjects.ts             # Gestiona datos de proyectos
│   ├── useContact.ts              # Gestiona formulario de contacto
│   ├── useImpactMetrics.ts        # Gestiona métricas
│   └── useDonationInfo.ts         # Gestiona info de donaciones
│
├── constants/                      # Datos estáticos tipados
│   └── content.ts                 # Contenido, proyectos, métricas, donaciones
│
├── server/                         # Backend (Nuxt server routes)
│   └── api/
│       └── contact.post.ts        # Endpoint para formulario de contacto
│
├── types/                          # TypeScript type definitions
│   └── content.ts                 # Tipos para contenido
│
├── assets/                         # Assets estáticos
│   └── css/
│       ├── main.css
│       ├── tailwind.css
│       └── tokens.css             # Tokens de diseño (colores, tipografía)
│
├── public/                         # Archivos públicos (favicon, robots.txt)
│   └── images/
│       └── projects/              # Imágenes de proyectos
│
├── layouts/                        # Layouts de página
│   └── default.vue
│
├── app.vue                         # Componente raíz
├── nuxt.config.ts                 # Configuración de Nuxt
├── tailwind.config.ts             # Configuración de Tailwind
├── tsconfig.json                  # Configuración de TypeScript
├── package.json                   # Dependencias
├── pnpm-lock.yaml                 # Lock file de pnpm
├── openspec/                      # Documentación de especificaciones
└── README.md                       # Este archivo
```

---

## 🎨 Sistema de Diseño

### Tokens de Color

El proyecto utiliza **tokens de diseño** definidos en `assets/css/tokens.css` y `tailwind.config.ts`:

| Token | Valor | Uso |
|-------|-------|-----|
| **Burgundy** | `#3D0C11` | Primario, accents |
| **Amber** | `#CA6702` | Secundario, highlights |
| **Obsidian** | `#001219` | Texto, backgrounds oscuros |
| **Ivory** | `#FDFBF7` | Backgrounds claros, neutral |

### Tipografía

- **Cinzel** — Títulos principales (elegancia)
- **Domine** — Subtítulos y headings
- **Cormorant Garamond** — Texto largo (elegancia)
- **Plus Jakarta Sans** — UI y body text (legibilidad)

### Componentes de UI

Todos los componentes siguen **WCAG 2.1 AA**:

- `AppButton.vue` — Botones accesibles
- `AppCard.vue` — Cards reutilizables
- `AppBadge.vue` — Badges de estado
- `AppModal.vue` — Modales accesibles
- `ProjectCard.vue` — Tarjetas de proyecto

---

## 📊 Contenido Tipado

El contenido del sitio está centralizado en `constants/content.ts` con tipos TypeScript:

```typescript
// constants/content.ts
export const ORGANIZATION_INFO: OrganizationInfo = {
  name: "FIBA",
  tagline: "El ADN del Arte",
  description: "...",
  // ...
}

export const IMPACT_METRICS: ImpactMetric[] = [...]
export const FEATURED_PROJECTS: Project[] = [...]
export const DONATION_CONFIG: DonationDetails = {...}
```

**Ventajas:**
- Validación de tipos en tiempo de compilación
- Fácil de mantener y actualizar
- Preparado para migración a Strapi CMS (Phase 2)

---

## 🔌 API de Contacto

### Endpoint: `POST /api/contact`

Valida y procesa solicitudes de contacto.

**Solicitud:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "message": "Me gustaría colaborar..."
}
```

**Respuesta (éxito):**
```json
{
  "success": true,
  "message": "Mensaje enviado correctamente"
}
```

**Respuesta (error):**
```json
{
  "success": false,
  "error": "Email inválido"
}
```

**Validaciones:**
- Nombre: 2-100 caracteres
- Email: formato válido
- Mensaje: 10-1000 caracteres
- Honeypot: campo oculto anti-spam
- Rate limiting: configurado en servidor

---

## 🔧 Configuración de Desarrollo

### Variables de Entorno

Crea un archivo `.env.local` (no versionado):

```bash
# .env.local
NUXT_API_BASE=http://localhost:3000
NUXT_PUBLIC_SITE_NAME=FIBA Portal
```

Para producción, usa `.env.example` como referencia y configura en Vercel.

### TypeScript Strict Mode

El proyecto usa `strict: true` en `tsconfig.json`:

```bash
pnpm typecheck    # Verifica todos los tipos
```

---

## 📱 Responsive Design

La aplicación es completamente responsiva:

- **Mobile** (< 640px) — Navegación en drawer, layouts optimizados
- **Tablet** (640px - 1024px) — Grillas ajustadas
- **Desktop** (> 1024px) — Experiencia completa

Usa Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

---

## 🚀 Deploy a Vercel

### Opción 1: Git Push (Recomendado)

1. Conecta el repositorio a Vercel
2. Vercel detecta automáticamente Nuxt 3
3. Cada push a `main` inicia un deploy automático

### Opción 2: CLI

```bash
# Instala Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Variables de Entorno en Vercel

En el dashboard de Vercel, ve a **Settings** → **Environment Variables** y añade:

```
NUXT_API_BASE = https://fiba.vercel.app
```

---

## 📈 Performance & SEO

### Lighthouse Targets

- **Performance** ≥ 90
- **Accessibility** ≥ 95
- **Best Practices** ≥ 90
- **SEO** ≥ 95

### Meta Tags Automáticos

Nuxt genera automáticamente:
- Open Graph (OG) — Compartir en redes
- Twitter Cards — Previsualizaciones de tweets
- Theme Color — `#3D0C11` (burgundy)
- Canonical URLs — SEO duplicate prevention

---

## 🧪 Testing

### E2E Testing con Playwright

```bash
# Instalar dependencias de testing
pnpm install

# Ejecutar tests
npx playwright test

# Modo UI
npx playwright test --ui
```

Los tests se guardan en `tests/` (estructura sugerida).

---

## 📋 Roadmap (Fases Futuras)

### Phase 2: CMS Integration
- Integración con Strapi v4
- Multi-idioma (i18n)
- Blog y noticias dinámicas

### Phase 3: Donation Pipeline
- Pasarela de pagos (Stripe, Yappy)
- Seguimiento de donaciones
- Recibos automáticos

### Phase 4: Art Catalog
- Tienda integrada
- Catálogo de obras
- Sistema de reservas

---

## 🤝 Contribuir

1. **Fork** el repositorio
2. Crea una rama: `git checkout -b feature/mi-caracteristica`
3. Commit tus cambios: `git commit -m "feat: descripción clara"`
4. Push: `git push origin feature/mi-caracteristica`
5. Abre un **Pull Request**

**Estándares de código:**
- TypeScript strict mode
- Componentes single-file Vue
- Pruebas E2E para features
- Commits convencionales (`feat:`, `fix:`, `docs:`, etc.)

---

## 📄 Licencia

Este proyecto es propiedad de **Fundación Bellas Artes Integra (FIBA)**. Todos los derechos reservados.

Para uso comercial o redistribución, contacta a [contact@fiba.org](mailto:contact@fiba.org).

---

## 📞 Contacto & Soporte

- **Email**: contact@fiba.org
- **Web**: [fiba.org](https://fiba.org)
- **GitHub Issues**: [Reportar bugs](../../issues)

---

## 🙏 Agradecimientos

Construido con ❤️ por el equipo de FIBA, usando:
- [Nuxt 3](https://nuxt.com) — Framework completo
- [Vue 3](https://vuejs.org) — Biblioteca reactiva
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS
- [Vercel](https://vercel.com) — Hosting y deploy

---

**Última actualización**: 30 de agosto de 2026
