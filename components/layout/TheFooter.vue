<script setup lang="ts">
import { ORGANIZATION_INFO } from '~/constants/content'

const currentYear = new Date().getFullYear()

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Nosotros', href: '#nosotros' },
  { label: 'Impacto Comunitario', href: '#impacto' },
  { label: 'Iniciativas y Proyectos', href: '#proyectos' },
  { label: 'Canales de Donación', href: '#donaciones' },
  { label: 'Contacto Directo', href: '#contacto' }
]

const pillarLinks = [
  { label: 'Educación y Formación', href: '#nosotros' },
  { label: 'Inclusión Social', href: '#nosotros' },
  { label: 'Patrimonio Cultural', href: '#nosotros' },
  { label: 'Transparencia Institucional', href: '#impacto' }
]
</script>

<template>
  <footer class="bg-fiba-secondary-900 text-fiba-surface-100 pt-16 pb-12 border-t border-fiba-primary-900/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-fiba-secondary-800">
        <!-- Column 1: Organization brand and mission -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <img src="/images/logo-fiba.svg" alt="FIBA" class="h-10 w-auto brightness-200">
          </div>
          <p class="text-sm text-fiba-surface-300 leading-relaxed">
            {{ ORGANIZATION_INFO.mission }}
          </p>
          <div class="mt-2 text-xs text-fiba-accent-400 font-medium tracking-wide uppercase">
            {{ ORGANIZATION_INFO.legalRuc }}
          </div>
        </div>

        <!-- Column 2: Quick navigation -->
        <div>
          <h4 class="text-base font-serif font-semibold text-fiba-surface-50 mb-4 tracking-wide">
            Explora
          </h4>
          <ul class="space-y-2.5 text-sm">
            <li v-for="link in quickLinks" :key="link.href">
              <a
                :href="link.href"
                class="text-fiba-surface-300 hover:text-fiba-accent-400 transition-colors inline-block"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Strategic pillars & programs -->
        <div>
          <h4 class="text-base font-serif font-semibold text-fiba-surface-50 mb-4 tracking-wide">
            Pilares
          </h4>
          <ul class="space-y-2.5 text-sm">
            <li v-for="pillar in pillarLinks" :key="pillar.label">
              <a
                :href="pillar.href"
                class="text-fiba-surface-300 hover:text-fiba-accent-400 transition-colors inline-block"
              >
                {{ pillar.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact & Social presence -->
        <div>
          <h4 class="text-base font-serif font-semibold text-fiba-surface-50 mb-4 tracking-wide">
            Contacto &amp; Redes
          </h4>
          <div class="space-y-3 text-sm text-fiba-surface-300">
            <p class="flex items-start gap-2.5">
              <svg class="w-5 h-5 text-fiba-accent-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{{ ORGANIZATION_INFO.contact.address }}, {{ ORGANIZATION_INFO.contact.city }}, {{ ORGANIZATION_INFO.contact.country }}</span>
            </p>
            <p class="flex items-center gap-2.5">
              <svg class="w-5 h-5 text-fiba-accent-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a :href="`mailto:${ORGANIZATION_INFO.contact.email}`" class="hover:text-fiba-accent-400 transition-colors">
                {{ ORGANIZATION_INFO.contact.email }}
              </a>
            </p>
            <p class="flex items-center gap-2.5">
              <svg class="w-5 h-5 text-fiba-accent-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a :href="`tel:${ORGANIZATION_INFO.contact.phone}`" class="hover:text-fiba-accent-400 transition-colors">
                {{ ORGANIZATION_INFO.contact.phone }}
              </a>
            </p>
          </div>

          <!-- Social media icons -->
          <div class="mt-5 flex items-center gap-3">
            <a
              v-for="social in ORGANIZATION_INFO.socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              class="w-9 h-9 rounded-full bg-fiba-secondary-800 hover:bg-fiba-primary-700 text-fiba-surface-100 flex items-center justify-center transition-all hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-fiba-accent-400"
            >
              <span class="text-xs font-semibold uppercase">{{ social.platform.substring(0, 2) }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom footer bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-fiba-surface-300">
        <p>
          &copy; {{ currentYear }} Fundación Bellas Artes Integra (FIBA). Todos los derechos reservados.
        </p>
        <p class="text-fiba-surface-400 text-center sm:text-right">
          Diseñado y desarrollado con pasión por el arte y la educación.
        </p>
      </div>
    </div>
  </footer>
</template>
