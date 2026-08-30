export type ProjectCategory = 'educacion' | 'comunidad' | 'artes-plasticas' | 'musica' | 'exposiciones';
export type ProjectStatus = 'en-curso' | 'completado' | 'proximo';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
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

export interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface OrganizationInfo {
  name: string;
  slogan: string;
  mission: string;
  vision: string;
  legalRuc: string;
  pillars: Pillar[];
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
    name: string;
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
