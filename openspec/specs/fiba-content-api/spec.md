# Spec: FIBA Content & API Layer (fiba-content-api)

## 1. Overview & Objectives
The `fiba-content-api` capability defines the TypeScript data contracts, centralized content constants, UI composables, and the server-side contact API endpoint (`/api/contact`) for the FIBA Phase 1 MVP. This architecture establishes clean decoupling between the presentation layer and data sources, enabling seamless evolution to Strapi CMS in Phase 2.

## 2. Type Contracts (`types/content.ts`)

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
  honeypot?: string; // Anti-spam trap
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
```

## 3. Local Typed Content Layer (`constants/content.ts`)
- Provides authoritative, rich static content representing FIBA:
  - `ORGANIZATION_INFO`: Mission, vision, core values, location, legal and social data.
  - `FEATURED_PROJECTS`: Curated array of `Project` records.
  - `IMPACT_METRICS`: Metrics dataset (`+1,500` beneficiaries, `+120` workshops, `+25` projects, etc.).
  - `DONATION_CONFIG`: Bank accounts, Yappy instructions, and WhatsApp contact templates.

## 4. Composables Architecture

### 4.1 `useProjects()`
- **Functions**:
  - `projects`: `ComputedRef<Project[]>`
  - `featuredProjects`: `ComputedRef<Project[]>`
  - `getProjectBySlug(slug: string)`: `Project | undefined`
  - `filterByCategory(category: ProjectCategory | 'todos')`: `Project[]`
  - `categories`: List of unique categories for filter tabs.

### 4.2 `useImpactMetrics()`
- Returns `metrics`: `ImpactMetric[]` along with helper methods for presentation and formatting.

### 4.3 `useDonationInfo()`
- Returns `donationInfo`: `DonationDetails` and helper utilities (e.g. `copyToClipboard(text: string)`).

### 4.4 `useContact()`
- Manages contact form submission state:
  - `isSubmitting`: `Ref<boolean>`
  - `error`: `Ref<string | null>`
  - `success`: `Ref<boolean>`
  - `submitContact(payload: ContactPayload)`: Dispatches `POST /api/contact` via `$fetch`.

## 5. Server Route: `/api/contact` (`server/api/contact.post.ts`)

### 5.1 Request Flow & Security
1. **Method Check**: Strict POST only.
2. **Honeypot Verification**: If hidden field `honeypot` is non-empty, silently reject or return success to thwart spam bots.
3. **Payload Validation**:
   - `name`: String, 2-100 characters.
   - `email`: Valid RFC 5322 email string.
   - `subject`: String, 2-100 characters.
   - `message`: String, 10-2000 characters.
   - `phone`: Optional string, sanitizing digits and symbols.
4. **Sanitization**: Strip malicious scripts or HTML tags.
5. **Dispatch / Mock Delivery**:
   - Log structured event in server console.
   - Extensible hook for Resend / SMTP email delivery in production.
6. **Response**: HTTP 200 `{ success: true, message: "Mensaje recibido correctamente. Nos pondremos en contacto pronto." }`.

## 6. Acceptance Criteria
1. All content types are strictly enforced without `any` types.
2. `useProjects()` accurately filters and retrieves items by category and slug.
3. Server route `/api/contact` rejects invalid emails or short messages with HTTP 400 and clear error messages.
4. Spam honeypot correctly intercepts bot submissions.
5. Code passes TypeScript strict checks (`npx nuxi typecheck`).
